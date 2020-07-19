import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
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
      <View>
        <TouchableOpacity style={styles.circle}></TouchableOpacity>
        <Text style={styles.successtext}>You've successfully submitted your symptoms for today!</Text>
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
  }
});
