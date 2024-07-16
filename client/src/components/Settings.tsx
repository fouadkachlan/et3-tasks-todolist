import React, { useEffect, useState } from 'react';
import { Switch } from 'react-native';
import CustomView from '../customComponents/CustomView';
import CustomText from '../customComponents/CustomText';
import { MMKV} from 'react-native-mmkv';

//const storage = new MMKV();

const Settings: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);


  // const toggleSwitch = () => {
  //   const newValue = !isEnabled;
  //   setIsEnabled(newValue);
  //   storage.set('themeEnabled', newValue);
  // }


  // useEffect(() => {
  //   const storedTheme = storage.getBoolean('themeEnabled');
  //   if (storedTheme !== undefined)
  //   {
  //     setIsEnabled(storedTheme);
  //   }
  // },[]);
  return (
    <CustomView style={{ backgroundColor: 'white', height: 900 }}>
      <CustomView
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomText
          style={{}}
          fontSize={50}
          fontWeight="bold"
        >
          Settings
        </CustomText>
      </CustomView>
      <CustomView
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection:'row',
          borderWidth: 1,
          paddingBottom: 50,
          margin: 5
        }}
      >
        <CustomText
          style={{ marginTop: 50 }}
          fontSize={20}
          fontWeight="300"
        >
          Change Theme
        </CustomText>
        <CustomView style={{ display: 'flex' ,justifyContent:'flex-end' ,alignItems:'center',width:400, marginTop: 40 }}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            // onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </CustomView>
      </CustomView>
    </CustomView>
  );
};

export default Settings;
