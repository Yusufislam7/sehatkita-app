const express = require("express");
const router = express.Router();
const db = require("../config/db");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// Tambah Booking
router.post("/", upload.single("file"), (req, res) => {
  const { nama, tanggal, keluhan } = req.body;
  const file = req.file ? req.file.filename : null;

  const sql = "INSERT INTO bookings (nama, tanggal, keluhan, file) VALUES (?, ?, ?, ?)";
  db.query(sql, [nama, tanggal, keluhan, file], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Booking berhasil!");
  });
});

// Ambil Data Booking
router.get("/", (req, res) => {
  db.query("SELECT * FROM bookings", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

module.exports = router;