import { ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomView from '../customComponents/CustomView'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'
import NewsForm from '../components/NewsForm';
import CustomText from '../customComponents/CustomText'
import getNewsStore from '../stores/newsStore'
import getLoginStore from '../stores/loginStore'
import { observer } from 'mobx-react-lite'
import Navigation from './Navigation'
import axios from 'axios'


const HomeNewsScreen : React.FC = observer(() => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const fetchNews = async () => {
        const response = await axios.post("")
    }
  return (
   <ScrollView style={{
    backgroundColor: 'white'
   }}>
        <Navigation />
            <CustomView
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    marginTop: 10,
                    marginRight: 10
                }}
            >
                <CustomView
                        style={{
                            display: 'flex',
                            justifyContent:'center',
                            alignSelf:'center',
                            alignItems: 'center'
                        }}
                        
                    >
                        <CustomText
                            style={{

                            }}
                            fontSize={25}
                            fontWeight='500'
                        >
                            The number of News is {getNewsStore().newsCount.get()}
                        </CustomText>
                    </CustomView>
                <TouchableOpacity onPress={()=>navigation.navigate("AddNewsPopUp")}>
                    
                    <CustomView
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center', 
                            height:50,
                            width: 150,
                            borderRadius: 10,
                            backgroundColor:'#77E4C8',
                            marginTop: 20
                        }}
                    >
                        <CustomText
                            fontSize={20}
                            fontWeight="400"
                            style={{
                                color: 'black'
                            }}
                        >Add News</CustomText>
                    </CustomView>
                </TouchableOpacity>
            </CustomView>
            {getNewsStore().newsList.map((news : string , index : number ) => (
                <NewsForm key={index} text={news} />
            ))}
   </ScrollView>
  )
})

export default HomeNewsScreen