import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";

function Header() {
  return (
    <Fragment>
      <div className="flex w-full sm:h-[50px] lg:h-[150px] h-[50px] bg-white justify-center">
        <Link to={"/"} className="self-center">
          <img
            src={Logo}
            className="sm:h-[20px] lg:h-[50px] h-[20px]"
            alt="POTG"
          />
        </Link>
      </div>
    </Fragment>
  );
}

export default Header;
