import React, { CSSProperties, ReactEventHandler } from 'react';

interface CustomeDivProps {
  children: React.ReactNode;
  style : React.CSSProperties;
  width: string;
  onClick?: ReactEventHandler;
  height: string;
  padding?: string;
  flexDirection?: string;
  display: "flex" | "block" | "grid",
  alignItems: "center" | "flex-start" | "flex-end",
  justifyContent: "center" | "flex-start" | "flex-end" | "space-between"
}
const CustomDiv: React.FC<CustomeDivProps> = ({ children, style , width , height , display , alignItems , justifyContent, onClick  }) => {
  const basicStyles : CSSProperties = {
    width,
    height,
    display,
    alignItems,
    justifyContent
  };
  const finalizedStyles = {...basicStyles , ...style};
  
  return <div onClick={onClick} style={finalizedStyles}>{children}</div>;
}

export default CustomDiv;