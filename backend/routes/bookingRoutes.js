const express = require("express");
const router = express.Router();
const db = require("../config/db");
const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = require("../config/s3");

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "sehatkita-yusuf-unique",
    key: function (req, file, cb) {
      cb(null, `dokumen/${Date.now()}-${file.originalname}`);
    },
  }),
});

// Tambah Booking
router.post("/", upload.single("file"), (req, res) => {
  const { nama, tanggal, keluhan } = req.body;
  const fileUrl = req.file ? req.file.location : null;

  const sql = `
    INSERT INTO bookings (nama, tanggal, keluhan, file)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [nama, tanggal, keluhan, fileUrl], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Booking berhasil!", fileUrl });
  });
});

// Ambil Semua Booking
router.get("/", (req, res) => {
  db.query("SELECT * FROM bookings", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

module.exports = router;
