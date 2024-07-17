import React, { useState , useEffect } from 'react'
import CustomView from '../customComponents/CustomView'
import CustomText from '../customComponents/CustomText';
import {NewsFormProps} from '../types/NewsFormProps';
import axios from "axios"
import getLoginStore from '../stores/loginStore';
import getNewsStore from '../stores/newsStore';
import { observer } from 'mobx-react-lite';

const NewsForm : React.FC<NewsFormProps> = observer(({text}) => {

// const newsInformations = async() : Promise<void> => {
//   try
//   {
//     const response = await axios.post("http://192.168.10.49:3000/api/addNews" , {
//       email: getLoginStore().email.get(),
//       news_Content: getNewsStore().news.get()
//     });
//     // const data = response.data;
    
//   } catch ( error ) {
//     console.error("Failed Fetching Username" , error);
//   }
// }
// useEffect(() =>{
//   newsInformations();
// },[])
  return (
    <CustomView
    style={{
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5,
        display: "flex",
        borderColor: '#77E4C8',
        borderWidth: 2,
        borderRadius:10,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    }}>
      
      <CustomView style ={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 20
        }}>
          
        <CustomText style ={{}} 
        fontWeight='bold'
        fontSize={10}
        >
          Written by : {getLoginStore().username.get()}
        </CustomText>
      </CustomView>
      <CustomText
      style={{

      }}
        fontSize={20}
        fontWeight='400'
      >
          {text}
      </CustomText>
    </CustomView>
  )
})

export default NewsForm