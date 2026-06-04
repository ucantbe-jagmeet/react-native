/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

function App() {

  return (
    <SafeAreaProvider>
      <View>
        <Text>
          Hello world
        </Text>
      </View>
    </SafeAreaProvider>
  );
}


export default App;
