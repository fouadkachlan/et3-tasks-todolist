import React, { CSSProperties } from 'react';

interface CustomeDivProps {
  children: React.ReactNode;
  style : React.CSSProperties;
  width: number | string;
  height: number | string;
  display: "flex",
  alignItems: "center" | "flex-start" | "flex-end",
  justifyContent: "center" | "flex-start" | "flex-end"
}





const CustomDiv: React.FC<CustomeDivProps> = ({ children, style , width , height , display , alignItems , justifyContent  }) => {
  const basicStyles : CSSProperties = {
    width,
    height,
    display,
    alignItems,
    justifyContent
  };
  const finalizedStyles = {...basicStyles , style};
  
  return <div style={finalizedStyles}>{children}</div>;
}

export default CustomDiv;
