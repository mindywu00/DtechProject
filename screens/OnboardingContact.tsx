import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { AppLoading } from 'expo';
import { useFonts, NunitoSans_300Light, NunitoSans_400Regular, NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

export default function OnboardingContact() {
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
        <Text style={styles.headertext}>YOUR CONTACT</Text>
        <Text style={styles.successtext}>Please add your contact information to receive important updates and alerts.</Text>
        <TextInput style={styles.text1} placeholder="Full Name"></TextInput>
        <TextInput style={styles.text2} placeholder="Username"></TextInput>
        <Text style={styles.successtext2}>Please select your preferred contact method.</Text>
        <View style={{top: 270, width:250, height: 75, left:70, opacity: .45}}>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="E-mail"
              status={ checked === 'E-mail' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('E-mail')}
            />
            <Text style={{paddingTop: 10}}>E-mail</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="Phone Number"
              status={ checked === 'Phone Number' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('PhoneNumber')}
            />
            <Text style={{paddingTop: 10}}>Phone Number</Text>
          </View>
        </View>
        <Text style={styles.headertext2}>EMERGENCY CONTACTS</Text>
        <Text style={styles.successtext3}>Add emergency contacts to send alerts to. You can manage contacts & alerts from your profile.</Text>
        <View style={{top: 390, width:250, height: 75, left:70, opacity: .45}}>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="Add now"
              status={ checked === 'Add now' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('Add now')}
            />
            <Text style={{paddingTop: 10}}>Add now</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="Save for later"
              status={ checked === 'Save for later' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('Save for later')}
            />
            <Text style={{paddingTop: 10}}>Save for later</Text>
          </View>
        </View>
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
    color: '#4F4F4F',
    backgroundColor: '#f2f2f2',
    paddingTop: 30
  },
  headertext2: {
    position: 'absolute',
    width: 243,
    height: 87.75,
    left: 70,
    top: 370,
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
    top: 130,
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
    top: 170,
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
    top: 60,
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
    top: 210,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 22.5,
    textAlign: 'center',
    color: '#4F4F4F',
    marginTop: 10,
  },
  successtext3: {
    position: 'absolute',
    width: 243,
    height: 87.75,
    left: 75,
    top: 385,
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
