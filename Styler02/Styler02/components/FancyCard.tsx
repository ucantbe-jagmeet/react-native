import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
          <View style={[ styles.card, styles.cardElevated]}>
                <Image 
                    source={{
                      uri: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw0fHxkb2dzfGVufDB8fHx8MTc4MDQ5MTEwNXww&ixlib=rb-4.1.0&w=1400&h=900&fit=max&q=80'
                    }}
                    style={styles.image}
                />
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Victor G</Text>
              <Text style={styles.cardLabel}> Dogs image</Text>
              <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae at, mollitia velit enim sapiente fugit accusantium laboriosam! Totam, hic quis. Modi debitis maiores suscipit provident sapiente distinctio. Natus saepe, quaerat obcaecati laudantium doloribus et autem magni ab soluta sunt!</Text>
              <Text style={styles.cardFooter}>VImage from Random Image</Text>
            </View>
    </View>
  )
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
        borderRadius: 12,
        margin: 8,
    },
    cardElevated: {
        backgroundColor: '#fff',
    },
    image: {
        height : 180,
        borderRadius: 8
    },
    cardBody: {
        backgroundColor: '#fff', 
        marginHorizontal : 8, 
        padding : 8,
        borderRadius :8
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        
    },
    cardLabel: {
        fontSize : 14,
        marginBottom : 6,
    },
    cardDescription: {
        fontSize : 12,
        marginBottom : 12,
        flexShrink : 1,
    },
    cardFooter: {},
})