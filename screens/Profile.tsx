import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { AppLoading } from 'expo';
import { useFonts, NunitoSans_300Light, NunitoSans_400Regular, NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

export default function Profile() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    NunitoSans_300Light,
    NunitoSans_400Regular,
    NunitoSans_900Black,
  });
  const [checked, setChecked] = React.useState('first')
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <Text style={styles.headertext}>PROFILE</Text>
        <TouchableOpacity style={styles.circle}></TouchableOpacity>
        <Text style={styles.name}>Susan Johnson</Text>
        <Text style={styles.username}>@susanj</Text>
        <View style={{top: 330, width:300, height: 174, left:30}}>
            <Text style={styles.text1}>Medication Reminders</Text>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="Medication Name 1"
              status={ checked === 'Medication Name 1' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('Medication Name 1')}
            />
            <Text style={{paddingTop: 10}}>Medication Name</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="Medication Name 2"
              status={ checked === 'Medication Name 2' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('Medication Name 2')}
            />
            <Text style={{paddingTop: 10}}>Medication Name</Text>
          </View>
          <View style={{flexDirection: "column"}}>
            <TouchableOpacity style={styles.add}></TouchableOpacity>
            <Text style={styles.text2}>Add medication reminder</Text>
          </View>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  headertext: {
    position: 'absolute',
    width: 400,
    height: 500,
    left: 0,
    top: 0,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16.5,
    lineHeight: 22.5,
    textAlign: 'center',
    color: '#7BA9A9',
    backgroundColor: '#f2f2f2',
    paddingTop: 30
  },
  name: {
    position: 'absolute',
    width: 149,
    height: 30,
    left: 127,
    top: 255,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 30,
    color: '#4F4F4F',
  },
  username: {
    position: 'absolute',
    width: 61,
    height: 22,
    left: 160,
    top: 289,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 22,
    color: '#4F4F4F',
    display: "flex",
    alignItems: "center",
    textAlign: "center"
  },
  circle: {
    position: 'absolute',
    width: 120,
    height: 120,
    left: 130,
    top: 100,
    borderRadius: 100,
    backgroundColor: '#C4C4C4',
  },
  text1: {
    position: 'absolute',
    width: 182,
    height: 25,
    left: 30,
    top: 521,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 25,
    color: '#4F4F4F',
    display: "flex",
    alignItems: "center"
  },
  text2: {
    position: 'absolute',
    width: 181,
    height: 22,
    left: 67,
    top: 672,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 22,
    color: '#4F4F4F',
  },
  add: {
    position: 'absolute',
    width: 25,
    height: 25,
    left: 30,
    top: 670,
    borderRadius: 100,
    color: '#EA7E4B'
  },
});
