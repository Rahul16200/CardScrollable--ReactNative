import React from 'react'
import { View } from 'react-native'

function CardContent(props) {
    const {contentStyle} = style
    return (
      <View style={contentStyle}>
      {props.chidren}
      </View>
    )
}

const style={
    cardStyle:{
justifyContent:"center",
color:"black",
fontSize:"40px"
    }
}


export default CardContent
