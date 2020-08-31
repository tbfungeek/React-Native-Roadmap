import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contracts from './screens/Contacts'

export default function App() {
  return (
    <Contracts style={styles.container}>
      <StatusBar style={styles.statusbar}/>
    </Contracts>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
