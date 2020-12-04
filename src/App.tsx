import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <Text style={styles.text}>My Template React-Native</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#493267',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  image: {
    height: 128,
    width: 128,
    marginBottom: 20,
  },
});

export default App;
