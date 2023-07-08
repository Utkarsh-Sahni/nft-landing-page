import React from "react";
import'./button.css'


export default function Button(props) {
  const { btnType, btnText, btnOnClick, customClasses } = props;
  

  return (
    <div
      className={`btn ${
        btnType === "Primary" ? "btn-primary" : "btn-secondary"
      } ${customClasses}`}
      onClick={btnOnClick}
    >
      {btnText}
    </div>
  );
}
