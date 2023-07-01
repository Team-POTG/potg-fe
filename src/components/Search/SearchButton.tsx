import React from "react";
import Search_Button from "../../images/search_button.png";

function SearchButton() {
  return (
    <button className="cursor-pointer sm:hidden lg:flex hidden mr-5 mt-2">
      <img src={Search_Button} alt="search" />
    </button>
  );
}

export default SearchButton;
