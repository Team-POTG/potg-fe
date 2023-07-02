import React from "react";
import { useRecoilState } from "recoil";
import { searchInputState } from "../../../recoil/SearchInput";
import { useNavigate } from "react-router-dom";

function Input() {
  const [inputValue, setInputValue] = useRecoilState(searchInputState);
  const navigate = useNavigate();

  return (
    <input
      className="w-full outline-none sm:p-3 md:p-4 md:px-5 lg:p-5 lg:px-7 p-3 text-xs sm:text-xs md:text-base lg:text-lg lg:pr-2"
      autoFocus
      type="text"
      placeholder="소환사 명을 입력해주세요"
      onChange={(value) => {
        setInputValue(value.target.value);
      }}
      onKeyDown={(key) => {
        if (key.key === "Enter") navigate(`/${inputValue}`);
      }}
    />
  );
}

export default Input;
