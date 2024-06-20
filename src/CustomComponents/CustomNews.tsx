import React from 'react'
import CustomDiv from './CustomDiv'
import themeStore from 'src/Stores/ThemeManagement'
import getLikeStore from 'src/Stores/LikeStore'
import LikeButton from './LikeButton'

const CustomNews = () => 
{
  const heartEmpty = require("../Assets/Images/heartempty.png");
  const heartFilled = require("../Assets/Images/heartfilled.png");
  const likeStore = getLikeStore();
  
  return (
    <CustomDiv
        style={{
            border: "5px solid #FEFAF6",
            boxSizing: "border-box",
            borderRadius: "10px",
            overflow: "hidden"

        }}

        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        width="100%"
        height="20%"
    >
      
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere possimus animi quam quasi laboriosam, nam error. Nemo maxime corporis laborum repellendus, consectetur, possimus quam nesciunt quidem alias totam ut.
      <LikeButton />
      
    </CustomDiv>
  )
}

export default CustomNews