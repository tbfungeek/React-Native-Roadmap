import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contracts from './screens/Contacts'
import Profile from './screens/Profile'

export default function App() {
  return (
    <Profile style={styles.container}>
      <StatusBar style={styles.statusbar}/>
    </Profile>
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
