import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';

import Config from 'react-native-config';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>{Config.API_URL}</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
});

export default App;
