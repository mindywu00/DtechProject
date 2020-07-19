import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import {AppLoading} from 'expo';
import { useFonts, NunitoSans_300Light, NunitoSans_400Regular, NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';

export default function LoginScreen() {
  let [fontsLoaded] = useFonts({
    NunitoSans_300Light,
    NunitoSans_400Regular,
    NunitoSans_900Black,
  });

if (!fontsLoaded) {
  return<AppLoading />;
}
else{
  return(
      <View>
        <Text style={styles.headertext}>APP NAME + LOGO</Text>

        <TextInput style={styles.text1}>Full Name</TextInput>
        <TextInput style={styles.text2}>Username</TextInput>
        <TextInput style={styles.text3}>Password</TextInput>
        <TextInput style={styles.text4}>Verify Password</TextInput>
        <TextInput style={styles.text5}>Date of Birth</TextInput>

        <TouchableOpacity style={styles.login}>
            <Text style={styles.text}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
  )}
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
      backgroundColor: '#C4C4C4',
    },
    text1: {
      position: 'absolute',
      width: 200,
      height: 18.75,
      left: 90,
      borderBottomWidth: 1,
      borderBottomColor: '#4F4F4F',
      top: 160,
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
      top: 200,
      fontFamily: 'NunitoSans_300Light',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 13.5,
      lineHeight: 18.75,
      color: '#4F4F4F',
    },
    text3: {
      position: 'absolute',
      width: 200,
      height: 18.75,
      left: 90,
      borderBottomWidth: .75,
      borderBottomColor: '#4F4F4F',
      top: 240,
      fontFamily: 'NunitoSans_300Light',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 13.5,
      lineHeight: 18.75,
      color: '#4F4F4F',
    },
    text4: {
      position: 'absolute',
      width: 200,
      height: 18.75,
      left: 90,
      borderBottomWidth: .75,
      borderBottomColor: '#4F4F4F',
      top: 280,
      fontFamily: 'NunitoSans_300Light',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 13.5,
      lineHeight: 18.75,
      color: '#4F4F4F',
    },
    text5: {
      position: 'absolute',
      width: 200,
      height: 18.75,
      left: 90,
      borderBottomWidth: .75,
      borderBottomColor: '#4F4F4F',
      top: 320,
      fontFamily: 'NunitoSans_300Light',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 13.5,
      lineHeight: 18.75,
      color: '#4F4F4F',
    },
    login: {
      position: 'absolute',
      width: 210,
      height: 41.25,
      left: 80,
      top: 365,
      backgroundColor: '#C4C4C4',
      shadowOffset: {width: 0, height: 1.5},
      shadowRadius: 4,
      color: '#000000',
      alignItems: 'center',
      shadowOpacity: .15,
      borderRadius: 22.5,
    },
    text: {
      marginTop: 10,
      fontFamily: 'NunitoSans_300Light',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 13.5,
    },
    signup: {
      position: 'absolute',
      width: 96,
      height: 41.25,
      left: 0,
      top: 450,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 22.5,
      borderBottomRightRadius: 22.5,
      alignItems: 'center',
      backgroundColor: '#C4C4C4',
    },
  });
