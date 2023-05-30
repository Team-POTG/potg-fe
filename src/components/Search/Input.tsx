import React from "react";

function Input() {
  return (
    <input
      className="w-full outline-none sm:p-3 md:p-4 md:px-5 lg:p-5 lg:px-7 p-3 text-xs sm:text-xs md:text-base lg:text-lg lg:pr-2"
      autoFocus
      type="text"
      placeholder="소환사 명을 입력해주세요"
    />
  );
}

export default Input;
