import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [randomBackground, setRandomBackground] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    setRandomBackground(color);
  };

  return (
    <>
      <StatusBar backgroundColor="#000000" />

      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Press Me</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.colorCode}>{randomBackground}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
  },

  actionButtonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  colorCode: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
});
