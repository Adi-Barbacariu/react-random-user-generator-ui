import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <p className="header__title">RANDOM USER GENERATOR</p>
      <button onClick={props.handleClick} className="header__btn">
        GENERATE USER
      </button>
      {props.children}
    </div>
  );
}
