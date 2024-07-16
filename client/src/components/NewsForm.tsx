import React, { useState , useEffect } from 'react'
import CustomView from '../customComponents/CustomView'
import CustomText from '../customComponents/CustomText';
import {NewsFormProps} from '../types/NewsFormProps';
import axios from "axios"
import getLoginStore from '../stores/loginStore';
import getNewsStore from '../stores/newsStore';
import { observer } from 'mobx-react-lite';


const NewsForm : React.FC<NewsFormProps> = observer(({text}) => {
  const [newData , setNewData] = useState([]);
  const username = getLoginStore().username.get();
  
  // const fetchNewsData = async () => {
  //   try {
  //     const response = await axios.get("http://192.168.100.126:3000/api/news");
  //     setNewData(response.data);
  //   } catch (error) {
  //     console.error( " Error while fetching the news data", error);
  //   }
  // }
  // useEffect(() => {
  //   fetchNewsData();
  // } , [])
//   const handleFormData = async () => {
//     try {
//         const requestData = {
//             username,
//             News: "Sample news content", // Replace with actual news content
//         };
//         console.log("Sending request data:", requestData);
//         const response = await axios.post("http://192.168.100.126:3000/api/addNews", requestData);

//         const data = response.data;
//         if (data.message === "News added successfully") {
//             console.log("You are in the if statement");
//             fetchNewsData(); // Refresh news data
//         } else {
//             console.log("Unexpected response from the server");
//         }
//     } catch (error) {
//         console.error("Error while handling the Form Data.");
//     }
// };
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

// import { View, Text, Button } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import CustomView from '../customComponents/CustomView';
// import CustomText from '../customComponents/CustomText';
// import axios from "axios";
// import getLoginStore from '../stores/loginStore';
// import { observer } from 'mobx-react-lite';

// interface News {
//     news_Wrote_by: string;
//     date_Of_News: string;
//     News: string;
// }

// const NewsForm: React.FC = observer(() => {
//     const [newsData, setNewsData] = useState<News[]>([]);
//     const username = getLoginStore().username.get();

//     const fetchNewsData = async () => {
//         try {
//             const response = await axios.get<News[]>("http://192.168.100.126:3000/api/news");
//             setNewsData(response.data);
//         } catch (error) {
//             console.error("Error while fetching the news data:", error);
//         }
//     };

//     useEffect(() => {
//         fetchNewsData();
//     }, []);

//     const handleFormData = async () => {
//         try {
//             const requestData = {
//                 username,
//                 News: "Sample news content", // Replace with actual news content
//             };
//             console.log("Sending request data:", requestData);
//             const response = await axios.post("http://192.168.100.126:3000/api/addNews", requestData);

//             const data = response.data;
//             if (data.message === "News added successfully") {
//                 console.log("You are in the if statement");
//                 fetchNewsData(); // Refresh news data
//             } else {
//                 console.log("Unexpected response from the server");
//             }
//         } catch (error) {
//             console.error("Error while handling the Form Data.");
//         }
//     };

//     return (
//         <CustomView
//             style={{
//                 marginTop: 30,
//                 marginLeft: 5,
//                 marginRight: 5,
//                 display: "flex",
//                 borderColor: '#77E4C8',
//                 borderWidth: 2,
//                 borderRadius: 10,
//                 borderBottomLeftRadius: 20,
//                 borderTopRightRadius: 20,
//                 padding: 20,
//             }}
//         >
//             <CustomView style={{
//                 display: 'flex',
//                 justifyContent: 'flex-start',
//                 alignItems: 'flex-start',
//                 marginBottom: 20
//             }}>
//                 <CustomText style={{

//                 }}
//                     fontWeight='bold'
//                     fontSize={10}
//                 >
//                     Written by: {username}
//                 </CustomText>
//             </CustomView>
//             <Button title="Add News" onPress={handleFormData} />
//             {newsData.map((news, index) => (
//                 <CustomView key={index} style={{ marginTop: 10 }}>
//                     <CustomText style={{}} fontSize={16} fontWeight='bold'>
//                         {news.news_Wrote_by}
//                     </CustomText>
//                     <CustomText style={{ }} fontWeight="bold"fontSize={14}>
//                         {news.News}
//                     </CustomText>
//                     <CustomText fontSize={12} fontWeight='bold' style={{color:"gray"}}>
//                         {news.date_Of_News}
//                     </CustomText>
//                 </CustomView>
//             ))}
//         </CustomView>
//     );
// });

// export default NewsForm;
