import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function PublishScreen() {
  const [content, setContent] = useState('');

  const handlePublish = () => {
    if (content.trim()) {
      Alert.alert('发布成功', `内容：${content}`);
      setContent('');
    } else {
      Alert.alert('错误', '请输入内容');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>发布内容</Text>
      <TextInput
        style={styles.input}
        placeholder="请输入内容..."
        value={content}
        onChangeText={setContent}
      />
      <Button title="发布" onPress={handlePublish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { height: 100, borderColor: '#ddd', borderWidth: 1, padding: 8, marginBottom: 10, textAlignVertical: 'top' },
});
