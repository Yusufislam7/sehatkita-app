import React, { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/bookings")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Riwayat Booking</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Tanggal</th>
            <th>Keluhan</th>
            <th>Dokumen</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.nama}</td>
              <td>{item.tanggal}</td>
              <td>{item.keluhan}</td>
              <td>
                {item.file && (
                  <a href={item.file} target="_blank" rel="noreferrer">
                    Lihat Dokumen
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;