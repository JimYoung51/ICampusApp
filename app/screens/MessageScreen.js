import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function MessageScreen() {
  const messages = [
    { id: '1', sender: '用户 A', content: '你好！' },
    { id: '2', sender: '用户 B', content: '你发布的内容真不错！' },
    { id: '3', sender: '用户 C', content: '请问如何购买商品？' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>消息列表</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.sender}>{item.sender}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  message: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  sender: { fontWeight: 'bold', marginBottom: 5 },
});
