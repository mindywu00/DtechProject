import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { AppLoading } from 'expo';
import { useFonts, NunitoSans_300Light, NunitoSans_400Regular, NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingFeedback() {
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
        <TouchableOpacity style={styles.circle}></TouchableOpacity>
        <Text style={styles.successtext}>You've successfully created your account!</Text>
        <TouchableOpacity style={styles.login}>
            <Text style={styles.text}>EXPLORE THE APP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signup} onPress={() =>
          navigation.navigate('SymptomLog')}>
            <Text style={styles.text}>START LOGGING SYMPTOMS</Text>
        </TouchableOpacity>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  successtext: {
    position: 'absolute',
    width: 243,
    height: 87.75,
    left: 75,
    top: 200,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16.5,
    lineHeight: 22.5,
    textAlign: 'center',
    color: '#4F4F4F',
    marginTop: 10,
  },
  circle: {
    position: 'absolute',
    width: 120,
    height: 120,
    left: 140,
    top: 80,
    borderRadius: 100,
    backgroundColor: '#C4C4C4',
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
    width: 210,
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
