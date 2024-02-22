import React from "react";
import PropTypes from "prop-types";

function Item({ item, list, setList }) {

//   const onClickDelete =()=>{}
//     const  addlist = list.map((item)) =>({
//       ...item,
//       deleted: item.id === todo
//     })
// };

  return (
    <li>
      <div
        className="flex items-center m-5 p-2 bg-white
        rounded-lg shadow-md"
      >
        <input type="checkbox" 
        className="ml-2 " />
        <span className="grow ml-4	">{item.text}</span>
        <div className="flex flex-row-reverse"> 
        <button className="p-1 ">⊗</button>
        
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
