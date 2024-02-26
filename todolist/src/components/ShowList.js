import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function ShowList(props) {
  const { list, setList } = props;

  return (
    <div> 
      <ul>
        {list &&
          list.map((item) => {
            if(item.deleted) return null;

            return(
            <Item 
            key={item.id} 
            item={item} 
            list={list} 
            setList={setList} />);
})}
      </ul>
    </div>
  );
}

ShowList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setList: PropTypes.func.isRequired,
};

export default ShowList;
