import { View, Text, StyleProp, ViewStyle } from 'react-native'
import { CustomViewProps } from '../types/CustomViewType'




const CustomView : React.FC<CustomViewProps> = ({children , style}) => {
  const basicStyles : ViewStyle = {
    margin : 0
  }
  const finalizedStyles : ViewStyle = {
    ...basicStyles ,
     ...style as object
    };
    return (
    <View style={finalizedStyles}>
      {children}
    </View>
  )
}

export default CustomView