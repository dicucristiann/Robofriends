import React from "react";
//removed the inline style and added a [className="scroll"] in {App.css}
const Scroll = (props) => {
  return <div className="scroll">{props.children}</div>;
};

export default Scroll;
