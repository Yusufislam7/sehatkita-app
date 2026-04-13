import React, { useState } from "react";
import axios from "axios";

function Booking() {
  const [form, setForm] = useState({
    nama: "",
    tanggal: "",
    keluhan: ""
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nama", form.nama);
    data.append("tanggal", form.tanggal);
    data.append("keluhan", form.keluhan);
    data.append("file", file);

    await axios.post("http://localhost:5000/api/bookings", data);
    alert("Booking berhasil!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Booking Layanan Kesehatan</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nama" placeholder="Nama" onChange={handleChange} required /><br /><br />
        <input type="date" name="tanggal" onChange={handleChange} required /><br /><br />
        <textarea name="keluhan" placeholder="Keluhan" onChange={handleChange} required /><br /><br />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} /><br /><br />
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

export default Booking;