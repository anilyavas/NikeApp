import { FlatList, Pressable, Image, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

export const ProductScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  return (
    <FlatList
      numColumns={2}
      data={products}
      renderItem={({ item }) => (
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            // update selected products
            dispatch(productsSlice.actions.setSelectedProduct(item.id));

            navigation.navigate('Product Details');
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        </Pressable>
      )}
    />
  );
};
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
