import React, { ChangeEvent } from 'react';

interface CustomInputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const CustomInput: React.FC<CustomInputProps> = ({ type, name, placeholder, value, onChange, style }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
    />
  );
}

export default CustomInput;
