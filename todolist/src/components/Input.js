import React, { useEffect } from "react";
import { useState, useRef } from "react";
import PropTypes from "prop-types";

function Input({ list, setList }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (e) => { //input값 받기
    setText(e.target.value);
  };

  const onClickAddButton = () => { //add버튼 클릭시
    const addlist = list.concat({ //list에 값 추가
      id: list.length,
      text,
      checked: false,
      delete: false,
    });
    setList(addlist);

    inputRef.current.focus(); //input 포커싱
    setText("");
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div
      className="flex items-center justify-between
    border-solid border-2 rounded-full m-3 mt-10 p-1"
    >
      <input
        className="h-10 w-4/5 ml-3 outline-none "
        type="text"
        name="item"
        placeholder="enter your todo"
        value={text}
        onChange={onChangeInput}
        ref={inputRef}
      />
      <button
        type="submit"
        className="h-10 w-1/5 ml-4 rounded-full bg-orange-800/20"
        onClick={onClickAddButton}
      >
        ADD
      </button>
    </div>
  );
}

Input.propTypes = { //props
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
  setList: PropTypes.func.isRequired,
};

export default Input;
