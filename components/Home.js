import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elementopia</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Levels')}
      >
        <Text style={styles.buttonText}>Levels</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sandbox')}
      >
        <Text style={styles.buttonText}>Sandbox Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Encyclopedia')}
      >
        <Text style={styles.buttonText}>Element Encyclopedia</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Achievements')}
      >
        <Text style={styles.buttonText}>Achievements</Text>
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
  button: {
    backgroundColor: '#1E90FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});