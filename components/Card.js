import React from 'react'
import { View,Text } from 'react-native'

function Card(props) {
    const {cardStyle,textStyle,contentStyle} = style
    return (
        <View style={cardStyle}>
            <Text style={textStyle}>
            Lorem ipsum
            </Text>
            <Text style={contentStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
        </View>
    )
}
const style= {
    cardStyle:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"lightblue",
        minHeight:1000,
        width:430,

        justifyContent:"center",
      
        color:"black",
        marginTop:20,
        textAlign:"center",
        fontWeight:900


    },
    textStyle:{
        display:"flex",

        fontSize:30,

justifyContent:"center",
alignItem:"center",
textAlign:"center"
   
    
        
    },
    contentStyle:{
        display:"flex",
        justifyContent:"center",
        fontSize:20,
        textAlign:"center"
    }
}


export default Card
