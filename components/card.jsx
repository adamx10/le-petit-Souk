
import React from 'react'
import { View, Text,Image } from 'react-native'
import Menue from '../data/data';

export default function card() {
  return (
   <View style={{color:'white', backgroundColor:'#D3BA58' , justifyContent:"center",alignItems:"center", flex:1 , borderWidth:2 , marginTop:20 , marginLeft:20,marginRight:20 , borderRadius:20 , elevation:20,height:200}}>
    <Image source={require("../assets/logo.png")} style={{width:100 , height: 100, marginTop:-90,}}></Image>
    <Text style={{color:'green'}}>Tajine de viande</Text>
   </View>
  )
}
