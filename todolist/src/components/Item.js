import React from "react";
import PropTypes from "prop-types";

function Item({ item, list, setList }) {
  return (
    <li>
      <div
        className="flex items-center m-5 p-2
    border-solid border-2 rounded-lg border-neutral-400"
      >
        <input type="checkbox" className="  ml-2" />
        <span className="ml-4	">{item.text}</span>
        <button className="">수정</button>
        <button className="ml-3">X</button>
      </div>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
  }),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setList: PropTypes.func.isRequired,
};

export default Item;
