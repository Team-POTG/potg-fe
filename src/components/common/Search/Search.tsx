import React, { useState } from "react";
import Input from "./Input";
import SearchButton from "./SearchButton";

function Search() {
  const [inputFocus, setInputFocus] = useState(false);
  const style = {
    size: "sm:w-4/5 lg:w-5/6 w-5/6 max-w-5xl",
    rounded:
      "sm:rounded-[20px] md:rounded-[35px] lg:rounded-[35px] rounded-[20px]",
  };

  return (
    <div
      className={`flex flex-col ${style.size} gap-1 ${
        inputFocus ? "shadow-search_input_focus" : ""
      } ${style.rounded} overflow-hidden bg-white`}
    >
      <div
        className="flex items-center gap-1 w-full"
        onFocus={() => {
          setInputFocus(true);
        }}
        onBlur={() => {
          setInputFocus(false);
        }}
      >
        {/* <Translate /> */}
        <Input />
        <SearchButton />
      </div>
      {inputFocus ? <></> : <></>}
    </div>
  );
}

export default Search;
