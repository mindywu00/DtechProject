import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { AppLoading } from 'expo';
import { useFonts, NunitoSans_300Light, NunitoSans_400Regular, NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';
import { useNavigation } from '@react-navigation/native';
import { transform } from '@babel/core';

export default function OnboardingHealth() {
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
        <Text style={styles.headertext}>Diagnosis</Text>
        <TouchableOpacity style={styles.arrowright} onPress={() =>
          navigation.navigate('OnboardingFeedback')}>
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
    backgroundColor: '#C4C4C4',
  },
  arrowright: {
    position: 'absolute',
    width: 15,
    height: 6,
    left: 100,
    top: 300,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#828282',
    transform: [{ rotate: '90deg' }],
  },
});