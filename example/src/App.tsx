/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import DbInspector from 'react-native-db-inspector';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const storeData = async () => {
    try {
      for (let i = 0; i < 100; i++) {
        await AsyncStorage.setItem('row' + i, 'value' + i);
      }
    } catch (e) {
      // saving errorß
    }
  };

  React.useEffect(() => {
    storeData();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => DbInspector.show()}
        style={{
          padding: 16,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: isDarkMode ? 'white' : 'black',
        }}
      >
        <Text>Show DB Inspector</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
