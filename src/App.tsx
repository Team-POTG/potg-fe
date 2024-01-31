import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Summoner from "./pages/summoner/Summoner";
import Header from "./Header";
import Search from "./components/common/Search/Search";
import { css } from "@emotion/css";
import { responsive } from "./styles/screen";

const styles = {
  body: css`
    display: flex;
    flex-direction: column;
    gap: 32px;
    user-select: none;
  `,

  content: css`
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 32px;
  `,

  page: css`
    max-width: 1024px;
    ${responsive({ width: ["80%", "80%", "85%"] })}
  `,
};

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.content}>
        <Search />
        <div className={styles.page}>
          {/* <div className="sm:w-4/5 lg:w-5/6 w-5/6 max-w-5xl"> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:riotId" element={<Summoner />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
