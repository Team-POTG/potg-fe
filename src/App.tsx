import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Summoners from "./pages/summoners/Summoners";
import Header from "./Header";
import Search from "./components/common/Search/Search";

function App() {
  return (
    <div className="flex flex-col gap-8 select-none">
      <Header />
      <div className="flex flex-col items-center gap-8">
        <Search />
        <div className="sm:w-4/5 lg:w-5/6 w-5/6 max-w-5xl">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:summonerName" element={<Summoners />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
