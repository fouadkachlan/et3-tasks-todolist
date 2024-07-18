import React from 'react'
import CustomView from '../../../customComponents/CustomView'
import CustomText from '../../../customComponents/CustomText';
import {NewsFormProps} from '../../../types/NewsFormProps';
import { observer } from 'mobx-react-lite';

const NewsForm : React.FC<NewsFormProps> = observer(({newsItem}) => {

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
          Written by : {newsItem.news_Wrote_by}
        </CustomText>
        <CustomText style ={{}} 
        fontWeight='bold'
        fontSize={10}
        >Written at {new Date(newsItem.date_Of_News).toDateString()}
        </CustomText>
      </CustomView>
      <CustomText
      style={{

      }}
        fontSize={20}
        fontWeight='400'
      >
          {newsItem.News}
      </CustomText>
    </CustomView>
  )
})

export default NewsForm