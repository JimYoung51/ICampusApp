import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function ProfileScreen() {
  const handleEditProfile = () => {
    Alert.alert('编辑资料', '可以在这里编辑你的个人信息');
  };

  const handleLogout = () => {
    Alert.alert('登出', '你已成功登出');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>个人资料</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>用户名：</Text>
        <Text style={styles.value}>用户123</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>邮箱：</Text>
        <Text style={styles.value}>user123@example.com</Text>
      </View>
      <Button title="编辑资料" onPress={handleEditProfile} />
      <Button title="登出" onPress={handleLogout} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  profileInfo: { flexDirection: 'row', marginBottom: 10 },
  label: { fontWeight: 'bold', width: 80 },
  value: { color: '#555' },
});
