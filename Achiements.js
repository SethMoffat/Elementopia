import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Achievements() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    loadAchievements();
  }, []);

  const loadAchievements = async () => {
    try {
      const savedAchievements = await AsyncStorage.getItem('achievements');
      if (savedAchievements !== null) {
        setAchievements(JSON.parse(savedAchievements));
      }
    } catch (error) {
      console.error('Error loading achievements:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Achievements</Text>
      <FlatList
        data={achievements}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 18,
  },
});
