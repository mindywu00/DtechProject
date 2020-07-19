import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { AppLoading } from 'expo';
import { useFonts, NunitoSans_300Light, NunitoSans_400Regular, NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';
import { useNavigation } from '@react-navigation/native';

export default function SymptomLogAdditional() {
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
        <TouchableOpacity style={styles.done} onPress={() =>
          navigation.navigate('SymptomInfo')}>
            <Text style={styles.text}>DONE</Text>
        </TouchableOpacity>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    width: 120,
    height: 120,
    left: 140,
    top: 80,
    borderRadius: 100,
    backgroundColor: '#C4C4C4',
  },
  done: {
    position: 'absolute',
    width: 210,
    height: 41.25,
    left: 80,
    top: 500,
    backgroundColor: '#7BA9A9',
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
});