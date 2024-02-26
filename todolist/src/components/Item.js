import React from "react";
import PropTypes, { object } from "prop-types";

function Item({ item, list, setList }) {
  const onChangeCheckbox = () => {
    const complete = list.map((object) =>({
      ...object,
      checked: object.id === item.id ? !object.checked : object.checked,
    }));

    setList(complete);
  };

  const onClickDelete =()=>{
    const  deletelist = list.map((object) =>({
      ...object,
      deleted: object.id === item.id ? true : object.deleted,
    }));

    setList(deletelist);
  };

  return (
    <li>
      <div
        className="flex items-center m-5 p-2 bg-white
        rounded-lg shadow-md"
      >
        <input 
        type="checkbox" 
        className=" ml-2 "
        checked = {item.checked}
        onChange={onChangeCheckbox} />

        <span 
        className={`grow ml-4 check ${item.checked ? 'check-checked' : ''}`}
        >
          {item.text}</span>
        <div className="flex flex-row-reverse"> 
        <button className="p-1"
        onClick={onClickDelete}>⊗</button>
        
        </div>
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
