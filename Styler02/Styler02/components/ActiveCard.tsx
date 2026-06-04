import { View, Text, StyleSheet, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActiveCard = () => {
    function openWebsite(websiteLink : string){
        Linking.openURL(websiteLink)
    }
    return (
      <View>
        <Text style={styles.headingText}>Blog Card</Text>
        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>Whats new in JS 21 - ES 12</Text>
          </View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw5fHxqYXZhc2NyaXB0fGVufDB8fHx8MTc4MDU3MDg5Nnww&ixlib=rb-4.1.0&w=1400&h=900&fit=max&q=80',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={styles.bodyText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              nemo repellendus assumenda vitae sapiente quis nostrum dolor
              accusantium tenetur ducimus provident similique, nisi nesciunt ut
              atque autem consequatur iure culpa laudantium incidunt! Doloribus
              alias natus id quo facere molestias eos cum ratione, itaque
              numquam veritatis neque ex in saepe corporis commodi quae fugiat
              similique inventore nesciunt illo quibusdam minima. Nostrum fugit
              itaque hic sit assumenda cupiditate eveniet minima similique
              aliquid unde, doloremque rerum corrupti iste obcaecati aut culpa
              qui, consectetur eius corporis aspernatur autem? Harum tenetur,
              voluptatum facilis unde perspiciatis esse aspernatur corporis
              voluptatibus natus, eius, minima in. Assumenda, animi!
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() => openWebsite('https://blog.learnjavascript.online')}
            >
              <Text style={styles.readMoreText}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

export const styles = StyleSheet.create({
  headingText: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    color: '#ffffff',
    marginTop: 16,
    marginBottom: 8,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
  },

  card: {
    backgroundColor: '#1f2937',
    borderRadius: 16,
    margin: 12,
    overflow: 'hidden',
  },

  elevatedCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },

  headingContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
    backgroundColor: '#111827',
  },

  headerText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },

  cardImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    backgroundColor: '#374151',
  },

  bodyContainer: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  bodyText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#d1d5db',
  },

  footerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: 'flex-start',
  },

  readMoreText: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
  },
});
export default ActiveCard