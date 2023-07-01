import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Summoners from "./pages/summoners/Summoners";
import Header from "./Header";

function App() {
  return (
    <div className="flex flex-col gap-8 select-none">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:summonerName" element={<Summoners />} />
      </Routes>
    </div>
  );
}

export default App;
