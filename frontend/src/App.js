import React from "react";
import Booking from "./pages/Booking";
import History from "./pages/History";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>SehatKita</h1>
      <Booking />
      <hr />
      <History />
    </div>
  );
}

export default App;