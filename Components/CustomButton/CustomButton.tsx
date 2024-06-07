import React from 'react';

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  style: React.CSSProperties;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, style }) => {
  return (
    <div onClick={onClick} style={style}>
      {children}
    </div>
  );
}

export default CustomButton;
