import React, { ReactEventHandler } from 'react'

interface CustomButtonProps
{
    children : React.ReactNode;
    style: React.CSSProperties;
    onClick: ReactEventHandler;
    color: string;
}




const CustomButton : React.FC<CustomButtonProps> = ({children , style , onClick, color}) => {

    const basicStyles : React.CSSProperties = {
        color
    };
    const finalizedStyles = {...basicStyles , ...style};
    return (
    <button onClick={onClick} style = {finalizedStyles}>
        {children}
    </button>
  )
}

export default CustomButton
