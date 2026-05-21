
import React from 'react'
import { Text,Image ,Pressable, ScrollView } from 'react-native'

import { router} from "expo-router";



export default function Header() {
  
  return (
   <ScrollView>
 <Image 
    source={require('../assets/zalij.png')} 
    style={{ width: 100, height: 100 ,}} 
  />
    <Text style={{color:"white",textAlign:'center' ,fontSize:25,justifyContent:'center',fontFamily: 'Georgia',marginTop:-50, }}>Le petit Souk</Text>
    <Image source={
        require('../assets/logo.png')}
        style={{width:150,height:100 , marginLeft:115}}
        ></Image>
        
            <Image source={
        require('../assets/art-table.png')}
        style={{width:220,height:150 ,marginLeft:71,borderRadius:20,elevation:10,}}
        ></Image>
        <Text style={{color:'white' , fontSize:20 ,textAlign:'center' ,padding:20, }}>L’Art de la table marocaine</Text>
        <Text style={{ color:'white',width:220,height:100,elevation:10 ,textAlign:'center',marginLeft:75 ,backgroundColor:'#D3BA58' ,borderRadius:20 ,shadowColor: "#000",  shadowOpacity: 0.1,shadowRadius: 10,}}>Installez-vous autour d une table marocaine authentique aux parfums de l Atlas. Ici, la richesse de nos traditions se savoure avec générosité à chaque bouchée.</Text>
        
 <Pressable onPress={() => router.push('/menu') }><Text style={{color:'white', backgroundColor:'orange',width:120,borderRadius:20,marginLeft:120,padding:5,margin:10,}}>decouvrir le Menu</Text></Pressable>


   </ScrollView>
  )
}

