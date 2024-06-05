import React from "react";

const Button = ({ onClick, buttonStyle, children }) => {
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
