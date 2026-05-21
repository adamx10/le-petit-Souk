
import Menu  from "../components/menu";
import { ScrollView, View } from 'react-native';

import Card from "../components/card"

export default function menu() {
  return (
  
   <ScrollView style={{backgroundColor:'#DFC560',flex:1}}>
    
    <Menu />
    
    <View><Card /></View>
</ScrollView>
  
  )
}
