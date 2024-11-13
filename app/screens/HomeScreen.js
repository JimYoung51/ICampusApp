import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AV from '../leancloudConfig';

export default function HomeScreen() {
  const [hotItems, setHotItems] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);

  useEffect(() => {
    fetchHotItems();
    fetchHistoryItems();
  }, []);

  const fetchHotItems = async () => {
    try {
      const query = new AV.Query('HotItems');
      query.limit(4);
      const results = await query.find();
      setHotItems(results.map(item => item.toJSON()));
    } catch (error) {
      console.error("Error fetching hot items:", error);
    }
  };

  const fetchHistoryItems = async () => {
    try {
      const query = new AV.Query('HistoryItems');
      query.limit(4);
      const results = await query.find();
      setHistoryItems(results.map(item => item.toJSON()));
    } catch (error) {
      console.error("Error fetching history items:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chatbubble-outline" size={24} color="black" />
        <Text style={styles.logoText}>iCampus</Text>
        <TextInput placeholder="搜索" style={styles.searchBar} />
        <Ionicons name="scan-outline" size={24} color="black" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>近期最热</Text>
        <View style={styles.row}>
          {hotItems.map((item, index) => (
            <Text key={index}>{item.title}</Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>历史最热</Text>
        <View style={styles.row}>
          {historyItems.map((item, index) => (
            <Text key={index}>{item.title}</Text>
          ))}
        </View>
      </View>

      <View style={styles.modules}>
        <View style={styles.module}>
          <Ionicons name="fast-food-outline" size={24} color="black" />
          <Text>美食</Text>
        </View>
        <View style={styles.module}>
          <Ionicons name="book-outline" size={24} color="black" />
          <Text>学习</Text>
        </View>
        <View style={styles.module}>
          <Ionicons name="flag-outline" size={24} color="black" />
          <Text>活动</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#f1f1f1' },
  logoText: { marginLeft: 10, fontSize: 16 },
  searchBar: { flex: 1, marginHorizontal: 10, padding: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 },
  section: { padding: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
  modules: { flexDirection: 'row', justifyContent: 'space-around', padding: 10 },
  module: { alignItems: 'center' },
});
