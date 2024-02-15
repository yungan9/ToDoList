import React from "react";
import { useState, useRef } from "react";

function Input() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {
    inputRef.current.focus();
    setText("");
  };

  return (
    <div
      className="flex items-center justify-between
    border-solid border-2 rounded-lg m-3 p-1"
    >
      <input
        className="h-10 w-4/5 outline-none"
        type="text"
        name="todo"
        placeholder="enter"
        value={text}
        onChange={onChangeInput}
        ref={inputRef}
      />
      <button
        type="submit"
        className="h-10 w-1/5 ml-4 rounded-lg bg-rose-200"
        onClick={onClickAddButton}
      >
        Add
      </button>
    </div>
  );
}

export default Input;
