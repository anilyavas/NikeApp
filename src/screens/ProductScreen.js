import { FlatList, View, Image, Text, StyleSheet } from 'react-native';
import products from '../data/products';

export function ProductScreen() {
  return (
    <FlatList
      numColumns={2}
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemContainer: {
    width: '50%',
    padding: 1,
  },
});
