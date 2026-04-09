import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import clientPromise from "../lib/mongodb.js";
import upload from "../middleware/upload.js";

const router = express.Router();
router.use(cookieParser());


// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Email and password required" });

    const client = await clientPromise;
    const users = client.db().collection("users");

    const user = await users.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name, img: user.img },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    // Set token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.json({ message: "Login successful", user: { name: user.name, email: user.email, img: user.img  } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error during login" });
  }
});

// LOGOUT
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

router.get("/me", (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    res.json({
      user: {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name,
        img: decoded.img,
      },
    });
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
});

// upload user registration info

router.post(
  "/apply",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "cv", maxCount: 1 },
    { name: "coverLetter", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      console.log("=== APPLY ROUTE HIT ===");
      console.log("BODY:", req.body);
      console.log("FILES:", req.files);

      const client = await clientPromise;
      const db = client.db();
      const applications = db.collection("applications");

      // Check if email already submitted an application
      const existing = await applications.findOne({ email: req.body.email });
      if (existing) {
        return res.status(400).json({ error: "You have already submitted an application." });
      }

      const data = {
        ...req.body,
        photo: req.files.photo?.[0]?.path || null,
        cv: req.files.cv?.[0]?.path || null,
        coverLetter: req.files.coverLetter?.[0]?.path || null,
        createdAt: new Date(),
      };

      await applications.insertOne(data);

      res.json({ message: "Application submitted successfully" });
    } catch (err) {
      console.error("ERROR IN /APPLY:", err);
      res.status(500).json({ error: "Upload failed" });
    }
  }
);

export default router;