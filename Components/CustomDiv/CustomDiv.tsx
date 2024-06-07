import React from 'react';

interface CustomeDivProps {
  children: React.ReactNode;
  style : React.CSSProperties;
}

const CustomDiv: React.FC<CustomeDivProps> = ({ children, style }) => {
  return <div style={style}>{children}</div>;
}

export default CustomDiv;
