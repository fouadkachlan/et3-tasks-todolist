import React from "react"


const Button = ({onClick, btnStyle, children}) => {
    return (
        <button style={btnStyle} onClick={onClick}>
            {children}

        </button>
    );
}

export default Button;