import React from "react"


const Button = ({onClick, btnStyle, children}) => {
    return (
        <button style={{
            padding:"15px",
            border: "20px",
            borderRadius: "50px 50px",
            backgroundColor:"chartreuse" 
        }} onClick={onClick}>
            {children}

        </button>
    );
}

export default Button;
