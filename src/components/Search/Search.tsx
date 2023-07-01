import React, { createContext, useEffect, useState } from "react";
import Input from "./Input";
import SearchButton from "./SearchButton";
import { useRecoilState } from "recoil";
import { searchInputState } from "../../recoil/SearchInput";

function Search() {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div
      className={`flex flex-col sm:w-4/5 lg:w-5/6 w-5/6 gap-1 max-w-5xl ${
        inputFocus ? "shadow-search_input_focus" : ""
      } sm:rounded-[20px] md:rounded-[35px] lg:rounded-[35px] rounded-[20px] overflow-hidden bg-white`}
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
