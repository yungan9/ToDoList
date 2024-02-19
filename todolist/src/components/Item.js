import React from "react";

function Item() {
  return (
    <div
      className="flex items-center m-5 p-2
    border-solid border-2 rounded-lg border-neutral-400"
    >
      <input type="checkbox" className="  ml-2" />
      <div className="ml-4	">어라</div>
      <button className="">수정</button>
      <button className="ml-3">X</button>
    </div>
  );
}

export default Item;
