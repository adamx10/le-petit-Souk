
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Menue from '../data/data'



export default function Menu() {

  return (
    <ScrollView> 
      <Image 
        source={require('../assets/zalij.png')} 
        style={{ width: 100, height: 100 }} 
      />
      <Image 
        source={require('../assets/logo.png')}
        style={{width:150, height:100, marginLeft:115, marginTop:-60}} 
      />
      <Text style={{color:'white',fontSize:20,borderWidth:1,borderRadius:20,textAlign:'center' }}>
        Bienvenue à Le petit Souk
      </Text>
      <View>
        {Menue.map((Menu) => (
        <Text key={Menu.id}>{Menu.name}{Menu.description}{Menu.prix}</Text>
        
     )) }
     </View>

























      
      
    </ScrollView>

  )
}
