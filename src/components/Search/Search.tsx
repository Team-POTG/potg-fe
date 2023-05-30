import React, { useState } from "react";
import Input from "./Input";
import Search_Button from "../../images/search_button.png";
import { SummaryTemplate } from "./Summary";

function Search() {
  const [searchFocus, setSearchFocus] = useState("");
  const [focus, setfocus] = useState(false);

  return (
    <div
      className={`flex flex-col sm:w-4/5 lg:w-5/6 w-5/6 gap-1 max-w-5xl ${searchFocus} sm:rounded-[20px] md:rounded-[35px] lg:rounded-[35px] rounded-[20px] overflow-hidden bg-white`}
    >
      <div
        className="flex items-center gap-1 w-full"
        onFocus={() => {
          setSearchFocus("shadow-search_focus");
          setfocus(true);
        }}
        onBlur={() => {
          setSearchFocus("");
          setfocus(false);
        }}
      >
        {/* <Translate /> */}
        <Input />
        <img
          className="cursor-pointer sm:hidden lg:flex hidden mr-5"
          src={Search_Button}
          alt="search"
          loading="lazy"
        />
      </div>
      {focus ? <SummaryTemplate /> : <></>}
    </div>
  );
}

export default Search;
