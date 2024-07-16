import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CustomText from './CustomText';


const MyCheckBox = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox 
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <CustomText
          style={{marginTop: 4}}
          fontWeight='400'
          fontSize={16}
        >
          Keep me Signed in
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',

  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  
});

export default MyCheckBox;