import express from "express";
import clientPromise from "../lib/mongodb.js";

const router = express.Router();

// GET all applications
router.get("/", async (req, res) => {
  try {
     console.log("FETCH APPLICATIONS HIT");
    const client = await clientPromise;
    const db = client.db();
    const applications = await db
      .collection("applications")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    res.json(applications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch applications" });
  }
});

export default router;