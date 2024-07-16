import { View, Text , ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { CustomTextProps } from '../types/CustomTextType'

const CustomText : React.FC<CustomTextProps> = ({children , style , fontSize , fontWeight}) => {
  const basicStyles : TextStyle = {
    fontWeight,
    fontSize
  };
  const finalizedStyles : TextStyle = {
    ...basicStyles,
    ...style as object
  };

    return (
      <Text style={finalizedStyles}>{children}</Text>
  )
}

export default CustomText