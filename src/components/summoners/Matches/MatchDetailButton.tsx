import React from "react";

function Detail(props: { isWin: boolean | undefined }) {
  return (
    <div
      className={`flex text-xs mb-2 mt-1 mx-2 justify-center p-1 rounded-md ${
        props.isWin ? "bg-blue-300" : "bg-red-300"
      }`}
    >
      자세히
    </div>
  );
}

export default Detail;
