import React from 'react'

export interface CustomFormProps
{
    children: React.ReactNode;
    style: React.CSSProperties;
    onSubmit: React.ReactEventHandler;
}

const CustomForm : React.FC<CustomFormProps> = ({children , style , onSubmit}) => {
  return (
    <form style={style} onSubmit={onSubmit}>{children}</form>
  )
}

export default CustomForm