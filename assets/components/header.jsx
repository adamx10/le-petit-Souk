import React from 'react'
import { View ,Text,Image } from 'react-native'



export default function Header() {
  return (
   <View>
 <Image 
    source={require('./zalij.png')} 
    style={{ width: 100, height: 100 ,}} 
  />
    <Text style={{color:"white",textAlign:'center' ,fontSize:25,justifyContent:'center',fontFamily: 'Georgia',marginTop:-50, }}>Le petit Souk</Text>
    <Image source={
        require('./logo.png')}
        style={{width:150,height:100 , marginLeft:115}}
        ></Image>
        
            <Image source={
        require('./art-table.png')}
        style={{width:220,height:150 ,marginLeft:71,borderRadius:20,    shadowColor: "#000",

    shadowOpacity: 0.5,
    shadowRadius: 10,

    elevation: 20,}}
        ></Image>
        <Text style={{color:'white' , fontSize:20 ,textAlign:'center' ,padding:20, }}>L’Art de la table marocaine</Text>
        <Text style={{width:220,height:100, textAlign:'center',marginLeft:75 ,backgroundColor:'#D3BA58' ,borderRadius:20 ,shadowColor: "#000",  shadowOpacity: 0.5,shadowRadius: 10,}}>Installez-vous autour d une table marocaine authentique aux parfums de l Atlas. Ici, la richesse de nos traditions se savoure avec générosité à chaque bouchée.</Text>

        

   </View>
  )
}
