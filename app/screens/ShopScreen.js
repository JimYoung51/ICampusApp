import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function ShopScreen() {
  const products = [
    { id: '1', title: '商品 1' },
    { id: '2', title: '商品 2' },
    { id: '3', title: '商品 3' },
    { id: '4', title: '商品 4' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>推荐商品</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  product: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd' },
});
