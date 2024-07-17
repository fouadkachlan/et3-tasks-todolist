import {TouchableOpacity, Alert ,  } from 'react-native'
import getNewsStore from '../stores/newsStore'
import { observer } from 'mobx-react-lite';
import CustomView from '../customComponents/CustomView';
import CustomInput from '../customComponents/CustomInput';
import CustomText from '../customComponents/CustomText';
import CustomButton from '../customComponents/CustomButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import axios from "axios";
import getLoginStore from '../stores/loginStore';
import { useEffect } from 'react';



const AddNewsPopUp : React.FC = observer(() => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handleSubmit = async () => {
        if (getNewsStore().news.get()) {
            getNewsStore().addNews(getNewsStore().news.get());
            Alert.alert('Success', 'News added successfully');
            navigation.goBack();
            newsInformations();
        } else {
            Alert.alert('Error' , 'Please Enter the news');
        }        
    }

    const newsInformations = async() : Promise<void> => {
        try
        {
          const response = await axios.post("http://192.168.1.106:3000/api/addNews" , {
            email: getLoginStore().email.get(),
            news_Content: getNewsStore().news.get()
          });
          // const data = response.data;
          
        } catch ( error ) {
          console.error("Failed Fetching Username" , error);
        }
      }
    //   useEffect(() =>{
    //     newsInformations();
    //   },[])
    
   return (
        <CustomView
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                height: '100%'
            }}
        >
            <CustomView style={{
                marginBottom: 50,
                marginLeft: 50,
                marginRight: 50
            }}>
                <CustomInput 
                    style={{ width: 350 , borderColor: '#77E4C8'}}
                    height={200}
                    margin={30}
                    marginRight={30}
                    borderRadius={10}
                    borderWidth={5}
                    padding={10}
                    value={getNewsStore().news.get()}
                    onChangeText={(news : string) => getNewsStore().setNews(news)}
                    placeholder="Enter your news" 
                    keyboardType="default"  
                    secureTextEntry={false}
                />
            </CustomView>
            <CustomView 
          style={{
            paddingBottom:0,
            marginLeft:5
          }}
        >
            <CustomButton onPress={handleSubmit}
                style={{ 
                        backgroundColor: '#77E4C8',
                        marginBottom: 300 ,
                        borderRadius: 30,
                        width: 300
                    }}
                height={60}
                width={400}
                
            >
                <CustomView 
                    style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                >
                    <CustomText
                        style={{color: 'black' , marginTop:15, marginLeft:115}}
                        fontSize={20}
                        fontWeight='300'
                    >Submit</CustomText>
                </CustomView>
            </CustomButton>
          </CustomView>
         </CustomView>
   )
})

export default AddNewsPopUp
