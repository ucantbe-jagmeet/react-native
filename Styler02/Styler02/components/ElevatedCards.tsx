import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>
            Tap
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>
            Tap
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>
            Tap
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>
            Tap
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>
            Tap
          </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>
            Tap
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: '#fff',
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 12,
    flex :1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
  },

});

export default ElevatedCards