import React, { CSSProperties, ReactNode } from 'react'

interface CustomTextProps
{
    children: React.ReactNode;
    style?: React.CSSProperties;
    fontWeight: string;
    fontSize: string;
}

const CustomText : React.FC<CustomTextProps> = ({children , style , fontWeight , fontSize }) =>
{
  const basicStyles : CSSProperties = {
    fontWeight,
    fontSize
  };
  const finalizedStyles = {...basicStyles , ...style};
  return <p style={finalizedStyles}>{children}</p>
}

export default CustomText
