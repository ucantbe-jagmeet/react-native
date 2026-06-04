import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const ContactList = () => {
const contacts = [
  {
    uid: 1,
    name: 'Hitesh Choudhary',
    status: 'Just an extraordinary teacher',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&w=1400&h=900&fit=max&q=80',
  },
  {
    uid: 2,
    name: 'Jagmeet',
    status: 'Sky is the limit',
    imageUrl:
      'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.1.0&w=1400&h=900&fit=max&q=80',
  },
  {
    uid: 3,
    name: 'Prince Kumar',
    status: 'Building products and learning daily',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&w=1400&h=900&fit=max&q=80',
  },
  {
    uid: 4,
    name: 'Sachin Sharma',
    status: 'Code. Debug. Repeat.',
    imageUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&w=1400&h=900&fit=max&q=80',
  },
  {
    uid: 5,
    name: 'Ananya Verma',
    status: 'Dream big, work silently',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&w=1400&h=900&fit=max&q=80',
  },
  {
    uid: 6,
    name: 'Rohan Mehta',
    status: 'Always learning something new',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.1.0&w=1400&h=900&fit=max&q=80',
  },
  {
    uid: 7,
    name: 'Priya Singh',
    status: 'Focused on growth',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&w=1400&h=900&fit=max&q=80',
  },
  {
    uid: 8,
    name: 'Amit Rajput',
    status: 'Keep pushing forward',
    imageUrl:
      'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.1.0&w=1400&h=900&fit=max&q=80',
  },
  {
    uid: 9,
    name: 'Neha Kapoor',
    status: 'Creating my own path',
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&w=1400&h=900&fit=max&q=80',
  },
  {
    uid: 10,
    name: 'Karan Malhotra',
    status: 'Frontend developer in progress',
    imageUrl:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.1.0&w=1400&h=900&fit=max&q=80',
  },
];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>

      <ScrollView style={styles.container}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: imageUrl }} style={styles.userImage} />

            <View style={styles.userInfo}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingHorizontal: 12,
    marginTop: 16,
    marginBottom: 10,
  },

  container: {
    paddingHorizontal: 12,
  },

  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f2937',
    padding: 12,
    borderRadius: 14,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },

  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
  },

  userInfo: {
    flex: 1,
  },

  userName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },

  userStatus: {
    fontSize: 14,
    color: '#d1d5db',
  },
});

export default ContactList;
