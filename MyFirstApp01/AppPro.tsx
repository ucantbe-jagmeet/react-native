/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Text, View , StyleSheet, useColorScheme } from 'react-native';
import { JSX } from 'react';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello world
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems : 'center',
    justifyContent: 'center'
  },
  whiteText : {
    color: '#FFF'
  },
  darkText : {
    color :'#000'
  }
})

export default App;
