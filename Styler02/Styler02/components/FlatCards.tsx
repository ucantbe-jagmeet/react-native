import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[ styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[ styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[ styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
    headingText : {
        fontSize: 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,
        color: '#fff'
    },
    container: {
        flex: 1, 
        flexDirection: 'row',
    },
    card: {
        width: 100, 
        height : 100,
        borderRadius :12,
        margin: 8,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardOne: {
        backgroundColor :'#EF5354',
    },
    cardTwo: {
        backgroundColor :'#50DBB4',
    },
    cardThree: {
        backgroundColor :'#5DA3FA',
    },
})
export default FlatCards