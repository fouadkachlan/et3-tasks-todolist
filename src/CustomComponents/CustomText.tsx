import React, { CSSProperties, ReactEventHandler, ReactNode } from 'react'

interface CustomTextProps
{
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: ReactEventHandler;
    fontWeight: string;
    fontSize: string;
}

const CustomText : React.FC<CustomTextProps> = ({children , style , fontWeight , fontSize, onClick }) =>
{
  const basicStyles : CSSProperties = {
    fontWeight,
    fontSize
  };
  const finalizedStyles = {...basicStyles , ...style};
  return <p onClick={onClick} style={finalizedStyles}>{children}</p>
}

export default CustomText