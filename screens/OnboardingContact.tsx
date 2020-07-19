import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { AppLoading } from 'expo';
import { useFonts, NunitoSans_300Light, NunitoSans_400Regular, NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';
import { useNavigation } from '@react-navigation/native';
import { transform } from '@babel/core';

export default function OnboardingContact() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    NunitoSans_300Light,
    NunitoSans_400Regular,
    NunitoSans_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <Text style={styles.headertext}>YOUR CONTACT</Text>
        <Text style={styles.successtext}>Please add your contact information to receive important updates and alerts.</Text>
        <TextInput style={styles.text1} placeholder="Full Name"></TextInput>
        <TextInput style={styles.text2} placeholder="Username"></TextInput>
        <Text style={styles.successtext2}>Please select your preferred contact method.</Text>
        <Text style={styles.headertext2}>EMERGENCY CONTACTS</Text>
        <TouchableOpacity style={styles.arrowright} onPress={() =>
          navigation.navigate('OnboardingHealth')}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowleft} onPress={() =>
          navigation.navigate('LoginScreen')}>
        </TouchableOpacity>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  headertext: {
    position: 'absolute',
    width: 243,
    height: 87.75,
    left: 70,
    top: 50,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16.5,
    lineHeight: 22.5,
    textAlign: 'center',
    color: '#4F4F4F',
  },
  headertext2: {
    position: 'absolute',
    width: 243,
    height: 87.75,
    left: 70,
    top: 300,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16.5,
    lineHeight: 22.5,
    textAlign: 'center',
    color: '#4F4F4F',
  },
  arrowright: {
    position: 'absolute',
    width: 15,
    height: 15,
    left: 310,
    top: 510,
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#828282',
    transform: [{ rotate: '45deg' }],
  },
  arrowleft: {
    position: 'absolute',
    width: 15,
    height: 15,
    left: 50,
    top: 510,
    borderBottomWidth: 1.5,
    borderLeftWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#828282',
    transform: [{ rotate: '45deg' }],
  },
  text1: {
    position: 'absolute',
    width: 200,
    height: 18.75,
    left: 90,
    borderBottomWidth: 1,
    borderBottomColor: '#4F4F4F',
    top: 145,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13.5,
    lineHeight: 18.75,
    color: '#4F4F4F',
  },
  text2: {
    position: 'absolute',
    width: 200,
    height: 18.75,
    left: 90,
    borderBottomWidth: .75,
    borderBottomColor: '#4F4F4F',
    top: 180,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13.5,
    lineHeight: 18.75,
    color: '#4F4F4F',
  },
  successtext: {
    position: 'absolute',
    width: 243,
    height: 87.75,
    left: 75,
    top: 80,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 22.5,
    textAlign: 'center',
    color: '#4F4F4F',
    marginTop: 10,
  },
  successtext2: {
    position: 'absolute',
    width: 243,
    height: 87.75,
    left: 75,
    top: 200,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 22.5,
    textAlign: 'center',
    color: '#4F4F4F',
    marginTop: 10,
  },
});
