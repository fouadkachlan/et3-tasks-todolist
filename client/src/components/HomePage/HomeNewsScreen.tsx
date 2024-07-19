import { ScrollView, TouchableOpacity } from 'react-native'
import  React , {useEffect}  from 'react'
import CustomView from '../../customComponents/CustomView'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../types/navigation'
import NewsForm from './NewsForm/NewsForm';
import CustomText from '../../customComponents/CustomText'
import getNewsStore from '../../stores/newsStore'
import { observer } from 'mobx-react-lite'
import Navigation from '../Navigation/Navigation'
import axios from 'axios'
import { NewsItem } from '../../types/NewsItem'


const HomeNewsScreen : React.FC = observer(() => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();


    const newsInformations = async() : Promise<void> => {
        const IP_ADDRESS : string = "192.168.1.106"
        try
        {
          const response = await axios.post<NewsItem[]>(`http://${IP_ADDRESS}:3000/api/news`);
          getNewsStore().setNewsList(response.data);          
        } catch ( error ) {
          console.error("Failed Fetching Username" , error);
        }
      }
      useEffect(() =>{
        newsInformations();
      },[])

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
            {getNewsStore().newsList.map((newsItem : NewsItem , index : number ) => (
                <NewsForm key={index} newsItem={newsItem} />
            ))}
   </ScrollView>
  )
})

export default HomeNewsScreen