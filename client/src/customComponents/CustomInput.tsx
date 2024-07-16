import { View, Text, StyleProp, TextInput, TextStyle } from 'react-native'
import React from 'react'
import { CustomInputProps } from '../types/CustomInputProps'

const CustomInput : React.FC<CustomInputProps>= ({value , height , margin , marginRight , borderRadius , borderWidth , padding , onChangeText , placeholder , style , keyboardType , secureTextEntry }) => {

    const basicStyles : StyleProp<TextStyle>= {
        height,
        margin,
        marginRight,
        borderRadius,
        borderWidth,
        padding,
        ...(style as object)
    }

    const finalizedStyles = {
        ...basicStyles
        ,
        ...style
    }
    
  return (
    <TextInput
        style={finalizedStyles}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
    />

  )
}

export default CustomInput

