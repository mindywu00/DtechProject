import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Title</Text>
      <View style={styles.header}>

      </View>
      <TextInput style={styles.text1}></TextInput>
      <TextInput style={styles.text2}></TextInput>
      <TextInput style={styles.text3}></TextInput>
      <TextInput style={styles.text4}></TextInput>
      <TouchableOpacity style={styles.login}></TouchableOpacity>
      <TouchableOpacity style={styles.signup}></TouchableOpacity>
      <EditScreenInfo path="/screens/Welcome.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    
  },
  text1: {
    
  },
  text2: {
    
  },
  text3: {
    
  },
  text4: {
    
  },
  login: {
    
  },
  signup: {
    
  },
});
