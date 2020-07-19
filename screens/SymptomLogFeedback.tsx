import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { AppLoading } from 'expo';
import { useFonts, NunitoSans_300Light, NunitoSans_400Regular, NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';
import { useNavigation } from '@react-navigation/native';

export default function SymptomLogFeedback() {
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
      <View style={styles.container}>
        <TouchableOpacity style={styles.circle}></TouchableOpacity>
        <Text style={styles.successtext}>You've successfully submitted your symptoms for today!</Text>
        <TouchableOpacity style={styles.profile} onPress={() =>
          navigation.navigate('Profile')}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: '#bcd9d7'
  },
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
  text: {
    marginTop: 10,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13.5,
  },
  profile: {
    position: 'absolute',
    width: 210,
    height: 41.25,
    left: 90,
    top: 500,
    backgroundColor: '#7BA9A9',
    color: '#7BA9A9',
    shadowOffset: {width: 0, height: 1.5},
    shadowRadius: 4,
    alignItems: 'center',
    shadowOpacity: .15,
    borderRadius: 22.5,
  },
});
