import React from 'react';

interface CustomSpanProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const CustomSpan: React.FC<CustomSpanProps> = ({ children, style }) => {
  return <span style={style}>{children}</span>;
}

export default CustomSpan;
