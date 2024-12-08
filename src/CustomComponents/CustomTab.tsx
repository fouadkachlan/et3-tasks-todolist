import React from 'react'
import CustomDiv from './CustomDiv'
import getThemeStore from '../Stores/ThemeStore'
const CustomTab = () => {

  return (
    <CustomDiv
    style={{backgroundColor:"#0EA5E9"}}
    justifyContent='center'
    alignItems='center'
    display='flex'
    padding=''
    width='100%'
    height='100px'
    >
        <CustomDiv
        onClick={()=>getThemeStore().setTheme("light")}
        style={{
            color: "#FFFFFF",
            cursor: "pointer",            
        }}
        justifyContent='center'
        alignItems='center'
        display='flex'
        padding=''
        width='100%'
        height='100px'
        >
            Light Theme
        </CustomDiv>
        <CustomDiv 
        onClick={()=>getThemeStore().setTheme("dark")}
        style={{
            color: "black",
            cursor: "pointer"
        }}
        justifyContent='center'
        alignItems='center'
        display='flex'
        padding=''
        width='100%'
        height='100px'
        >
            Dark Theme
        </CustomDiv>
    </CustomDiv>
  )
}

export default CustomTab