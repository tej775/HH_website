import express from "express";
import cors from "cors";
import multer from "multer";
import crypto from "crypto";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref, push, set, get, child } from "firebase/database";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --- Firebase config (Realtime Database) ---
const firebaseConfig = {
  apiKey: "AIzaSyADG7pnfwIn7CSQTXGKfC8lhuyGOUjwpIA",
  authDomain: "adminportal-f55de.firebaseapp.com",
  databaseURL: "https://adminportal-f55de-default-rtdb.firebaseio.com",
  projectId: "adminportal-f55de",
  storageBucket: "adminportal-f55de.appspot.com",
  messagingSenderId: "569026204719",
  appId: "1:569026204719:web:b3ab45cb237ec255c662da",
  measurementId: "G-G3XEFJDRBV",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(
  firebaseApp,
  "https://adminportal-f55de-default-rtdb.asia-southeast1.firebasedatabase.app"
);

// --- Multer setup (store in memory) ---
const upload = multer({ storage: multer.memoryStorage() });

// --- AES Secret Key ---
const SECRET_KEY = crypto.createHash("sha256")
  .update("myVeryStrongSecretKey123!")
  .digest();

// --- Upload Endpoint ---
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { name, category, role, year } = req.body;
    console.log("Uploading member:", name, category, role, year);

    // Basic validation
    if (
      !req.file ||
      !name ||
      !category ||
      ((category === "executive" && !role) ||
        ((category === "students" || category === "web") && !year))
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 1MB file size check
    if (req.file.size > 1 * 1024 * 1024) {
      return res.status(400).json({ message: "File too large. Max 1MB" });
    }

    const fileBuffer = req.file.buffer;

    // Encrypt image
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(SECRET_KEY), iv);
    const encryptedImage = Buffer.concat([cipher.update(fileBuffer), cipher.final()]).toString("base64");

    // Encrypt text fields
    const encryptText = (text) => {
      const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(SECRET_KEY), iv);
      return cipher.update(text, "utf8", "hex") + cipher.final("hex");
    };

    const encryptedData = {
      name: encryptText(name),
      category,
      role: role ? encryptText(role) : null,
      year: year ? encryptText(year) : null,
      image: encryptedImage,
      iv: iv.toString("hex"),
      createdAt: new Date().toISOString(),
    };

    // Store in Realtime Database
    const categoryRef = ref(db, `teamMembers/${category}/members`);
    const newMemberRef = push(categoryRef);
    await set(newMemberRef, encryptedData);

    // Return the newly added member
    res.json({ message: "Member added successfully", member: { id: newMemberRef.key, ...encryptedData } });

  } catch (err) {
    console.error("Upload failed:", err);
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
});

// --- Update member ---
app.put("/team/:category/:id", upload.single("image"), async (req, res) => {
  try {
    const { category, id } = req.params;
    const { name, role, year } = req.body;

    if (!name || !category) return res.status(400).json({ message: "Required fields missing" });

    const memberRef = ref(db, `teamMembers/${category}/members/${id}`);
    const snapshot = await get(memberRef);
    if (!snapshot.exists()) return res.status(404).json({ message: "Member not found" });

    const existing = snapshot.val();
    const iv = req.file ? crypto.randomBytes(16) : Buffer.from(existing.iv, "hex");

    const encryptText = (text) => {
      const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(SECRET_KEY), iv);
      return cipher.update(text, "utf8", "hex") + cipher.final("hex");
    };

    let encryptedImage = existing.image;
    if (req.file) {
      const fileBuffer = req.file.buffer;
      const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(SECRET_KEY), iv);
      encryptedImage = Buffer.concat([cipher.update(fileBuffer), cipher.final()]).toString("base64");
    }

    const updatedData = {
      name: encryptText(name),
      category,
      role: role ? encryptText(role) : null,
      year: year ? encryptText(year) : null,
      image: encryptedImage,
      iv: iv.toString("hex"),
      updatedAt: new Date().toISOString(),
    };

    await set(memberRef, updatedData);
    res.json({ message: "Member updated successfully", member: { id, ...updatedData } });

  } catch (err) {
    console.error("Update failed:", err);
    res.status(500).json({ message: "Update failed", error: err.message });
  }
});

// --- Delete member ---
app.delete("/team/:category/:id", async (req, res) => {
  try {
    const { category, id } = req.params;
    const memberRef = ref(db, `teamMembers/${category}/members/${id}`);
    const snapshot = await get(memberRef);
    if (!snapshot.exists()) return res.status(404).json({ message: "Member not found" });

    await set(memberRef, null); // Proper deletion
    res.json({ message: "Member deleted successfully", id });

  } catch (err) {
    console.error("Delete failed:", err);
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
});

// --- Fetch team members ---
app.get("/team", async (req, res) => {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, "teamMembers"));
    if (!snapshot.exists()) return res.json([]);

    const data = snapshot.val();
    const membersList = [];
    for (const category in data) {
      const members = data[category].members || {};
      for (const id in members) {
        membersList.push({
          id,
          category,
          name: members[id].name,
          role: members[id].role || null,
          year: members[id].year || null,
          image: members[id].image,
          iv: members[id].iv,
        });
      }
    }
    res.json(membersList);

  } catch (err) {
    console.error("Fetch failed:", err);
    res.status(500).json({ message: "Failed to fetch team", error: err.message });
  }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
