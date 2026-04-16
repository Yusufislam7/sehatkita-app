import React, { useState, useEffect } from "react";
import axios from "axios";

function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://54.254.56.237:5000/api/bookings")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Riwayat Booking</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.nama} - {item.tanggal} - {item.keluhan}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
