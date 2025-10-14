// app.get("/images/:name", async (req, res) => {
//   try {
//     const q = collection(db, "images"); 
//     const snapshot = await getDocs(q);
//     const doc = snapshot.docs.find(d => d.data().name === req.params.name);

//     if (!doc) return res.status(404).send("Image not found");

//     const data = doc.data();
//     const encryptedBuffer = Buffer.from(data.data, "base64");
//     const iv = Buffer.from(data.iv, "hex");

//     const decipher = crypto.createDecipheriv(
//       "aes-256-cbc",
//       Buffer.from(SECRET_KEY),
//       iv
//     );
//     const decrypted = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);

//     res.set("Content-Type", "image/jpeg"); // or image/png
//     res.send(decrypted);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });
