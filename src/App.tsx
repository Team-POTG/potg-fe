import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Summoners from "./pages/summoners/Summoners";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:summonerName" element={<Summoners />} />
    </Routes>
  );
}

export default App;
