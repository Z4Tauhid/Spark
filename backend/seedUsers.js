import bcrypt from "bcryptjs";
import clientPromise from "./lib/mongodb.js";

const users = [
  { name: "Baptiest Mol", email: "baptiest@mol.com", password: "A@l12345", img: "https://sparkproductshowcase.lovable.app/assets/baptiest-mol-_sLgaXqw.png" },
  
];

async function seed() {
  try {
    const client = await clientPromise;
    const db = client.db("sparkDB");
    const collection = db.collection("users");

    for (let user of users) {
      const existing = await collection.findOne({ email: user.email });
      if (existing) {
        console.log(`User ${user.email} already exists`);
        continue;
      }
      const hashed = await bcrypt.hash(user.password, 12);
      await collection.insertOne({ ...user, password: hashed });
      console.log(`Inserted user ${user.email}`);
    }
    console.log("Seeding completed!");
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
}

seed();