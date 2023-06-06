import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Button, TextInput, FlatList } from 'react-native';

import { useSamples } from '@/features/sample';
import { secureStore } from '@/lib/expo-secure-store';

import type { RootStackParamList } from '../../navigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const TestScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'About'>>();

  const samplesQuery = useSamples();

  const [testValue, setTestValue] = useState('');

  const onPress = () => {
    navigation.navigate('About');
  };

  const getTestValue = async () => {
    const value = await secureStore.get('test');
    setTestValue(value ?? '');
  };

  return (
    <View style={styles.container}>
      <Text>TestScreen</Text>
      <Button title="About画面に遷移する" onPress={onPress} />
      <TextInput
        onChangeText={(text) => {
          secureStore.save('test', text);
        }}
        placeholder="test"
      />
      <Text>test: {testValue}</Text>
      <Button title="testを取得する" onPress={getTestValue} />
      <FlatList
        data={samplesQuery.data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
