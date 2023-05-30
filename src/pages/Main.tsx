import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import Search from "../components/Search/Search";

function Main() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex w-full sm:h-[50px] lg:h-[150px] h-[50px] bg-white justify-center">
        <Link to={"/"} className="self-center">
          <img
            src={Logo}
            className="sm:h-[20px] lg:h-[50px] h-[20px]"
            alt="POTG"
          />
        </Link>
      </div>
      <div className="flex justify-center">
        <Search />
      </div>
    </div>
  );
}

export default Main;
