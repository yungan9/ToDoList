import React, { useEffect } from "react";
import { useState, useRef } from "react";
import PropTypes from "prop-types";

function Input({ list, setList }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {
    const addlist = list.concat({
      id: list.length,
      text,
    });
    setList(addlist);

    inputRef.current.focus();
    setText("");
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

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
        className="h-10 w-1/5 ml-4 rounded-lg bg-orange-800/20"
        onClick={onClickAddButton}
      >
        Add
      </button>
    </div>
  );
}

Input.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
  setList: PropTypes.func.isRequired,
};

export default Input;
