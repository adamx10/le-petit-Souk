import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Menue from "../data/data"
export default function MenuScreen() {
  return (
    <FlatList
      data={Menue}
      keyExtractor={(item) => item.id}
      style={styles.container}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <Text style={styles.prix}>{item.prix}</Text>
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#DFC560', padding: 15 },
  row: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#D3BA58', padding: 10, marginBottom: 10, borderRadius: 10 ,elevation:10},
  image: { width: 60, height: 60, borderRadius: 8 },
  info: { flex: 1, marginLeft: 10 },
  name: { fontSize: 15, fontWeight: 'bold', color: '#3b2f2f' },
  description: { fontSize: 12, color: '#6b7280', marginTop: 2 },
  prix: { fontSize: 14, fontWeight: 'bold', color: '#d48774', backgroundColor: '#cf1313', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 6 },
});