import React from "react";

function Item() {
  return (
    <div
      className="flex items-center m-5 p-2
    border-solid border-2 rounded-lg border-neutral-400"
    >
      <input type="checkbox" className=" checked:bg-blue-500 ml-2" />
      <div className="ml-4	">어라</div>
      <button>수정</button>
      <button>X</button>
    </div>
  );
}

export default Item;
