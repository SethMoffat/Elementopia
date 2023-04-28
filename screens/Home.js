import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elementopia</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Levels')}>
        <Text style={styles.menuItem}>Levels</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sandbox')}>
        <Text style={styles.menuItem}>Sandbox</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Encyclopedia')}>
        <Text style={styles.menuItem}>Encyclopedia</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Achievements')}>
        <Text style={styles.menuItem}>Achievements</Text>
      </TouchableOpacity>
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
  menuItem: {
    fontSize: 24,
    marginBottom: 10,
  },
});