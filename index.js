/**
 * @format
 */

import {AppRegistry, View,Text, ScrollView} from 'react-native';
import React from "react";
import Card from "./components/Card"
import CardContent from "./components/CardContent"



const App = ()=>{
    return(
    <ScrollView>
 <Card />
 <Card/>
 <Card/>
    </ScrollView>
      

  
    )
}

AppRegistry.registerComponent("qwer", () => App);
