import React, { ReactEventHandler, useState } from 'react'

interface CustomButtonProps
{
    children : React.ReactNode;
    hoverStyle?: React.CSSProperties;
    style: React.CSSProperties;
    onClick?: ReactEventHandler;
    onSubmit?: ReactEventHandler;
    color: string;
}




const CustomButton : React.FC<CustomButtonProps> = ({children , style, hoverStyle , onClick , onSubmit, color}) => {

    const [isHovered , setIsHover] = useState(false);
    const basicStyles : React.CSSProperties = {
        color
    };


    const finalizedStyles = {...basicStyles , ...style , ...(isHovered ? hoverStyle : {})};


    return (
    <button onClick={onClick} style = {finalizedStyles} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        {children}
    </button>
  )
}

export default CustomButton