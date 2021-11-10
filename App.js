import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { enableScreens } from 'react-native-screens';

enableScreens();
const App = () =>{
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}
export default App;