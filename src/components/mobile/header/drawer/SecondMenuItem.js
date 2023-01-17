import React from "react";

const SecondMenuItem = (props) => {

  return (
    <div className="text-black flex items-center p-5 text-md">
      <a href={props.src}>{props.text}</a>
    </div>
  );
};

export default SecondMenuItem;
