import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
// https://qiita.com/nacam403/items/b2be7363d049361ebf49

import { RootNavigator } from './navigation';

export const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <RootNavigator />
      <SafeAreaView />
    </View>
  );
};
