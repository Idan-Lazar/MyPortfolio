import React from "react";
import "./ListItem.css";
const ListItem = (props) => {
  const { item } = props;
  return (
    <div className="item">
      <img alt="" className="icon" height="22" width="22" src={item.icon} />
      <div className="text-contact">{item.title}</div>
    </div>
  );
};

export default ListItem;
