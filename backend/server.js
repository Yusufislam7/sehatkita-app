const express = require("express");
const cors = require("cors");
const bookingRoutes = require("./routes/bookingRoutes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/bookings", bookingRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});