import React from 'react';
import { observer } from "mobx-react";
import CustomTab from './CustomComponents/CustomTab';
import CustomDiv from './CustomComponents/CustomDiv';
import getThemeStore from './Stores/ThemeStore';
import "./App.css"

import CustomNews from './CustomComponents/CustomNews';
const App = observer(() => {
  
  return (
    <CustomDiv
      style={{}}
      className={getThemeStore().theme.get()}
      display="block"
      alignItems="center"
      justifyContent="center"
      padding="0px"
      height="1000px"
      width="100%"
    > 
      <CustomTab />
      <CustomDiv
        display='flex'
        justifyContent='center'
        alignItems='center'
        padding="1px"
        width='100%'
        height='10%'
        style={{
          fontSize:"15pt",
          fontWeight:"bold"
        }}
       >
        News Paper Reader
      </CustomDiv>
      <CustomNews />
    </CustomDiv>
  );
});

export default App;
