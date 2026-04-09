import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Storage config
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    let resourceType = "auto";

    // 🔥 FORCE PDF TO BE RAW
    if (file.mimetype === "application/pdf") {
      resourceType = "raw";
    }

    return {
      folder: "applications",
      resource_type: resourceType,
      public_id: Date.now() + "-" + file.originalname,
    };
  },
});

// Multer config
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

export default upload;