import React, { CSSProperties , ReactEventHandler, useState } from 'react'

interface CustomInputProps
{
    style?: React.CSSProperties;
    hoverStyle?: React.CSSProperties;
    borderRadius: string;
    placeholder: string;
    type: string;
    id?: string;
    onChange?: ReactEventHandler;
}


const CustomInput : React.FC<CustomInputProps> = ({style, placeholder , borderRadius, hoverStyle, id , onChange , type}) =>
{
    const [isInputHovered , setIsInputHovered] = useState(false);
    const basicStyles : CSSProperties =
    {
        borderRadius,
    }
    const finalizedStyles = {...basicStyles , ...style, ...(isInputHovered ? hoverStyle : {})};
  return <input id={id} onChange={onChange} placeholder={placeholder}  
  style={finalizedStyles} type={type}
   onMouseEnter={() => setIsInputHovered(true)} onMouseLeave={() => setIsInputHovered(false)}  />
  
}

export default CustomInput


