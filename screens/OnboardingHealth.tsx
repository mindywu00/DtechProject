import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { AppLoading } from 'expo';
import { useFonts, NunitoSans_300Light, NunitoSans_400Regular, NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';
import { useNavigation } from '@react-navigation/native';
import { transform } from '@babel/core';
import RNPickerSelect from 'react-native-picker-select';
import { RadioButton } from 'react-native-paper';


function onSelectedItemsChange(){
    return;
  };

var items = [{name: "Type I Diabetes"}, {name: "Type II Diabetes"}]

export default function OnboardingHealth() {
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
        <Text style={styles.headertext}>DIAGNOSIS</Text>
        <Text style={styles.successtext}>Please select your medical diagnosis.</Text>

        <View style={{top: 110, width:250, left:70}}>
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Type I Diabetes', value: 'Type I Diabetes' },
                { label: 'Type II Diabetes', value: 'Type II Diabetes' },
            ]}
        />
        </View>

        <Text style={styles.headertext2}>MEDICATION</Text>
        <Text style={styles.successtext2}>Are you currently taking any perscription medication?</Text>
        <View style={{top: 240, width:250, height: 75, left:70, opacity: .45}}>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="Yes"
              status={ checked === 'Yes' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('Yes')}
            />
            <Text style={{paddingTop: 10}}>Yes</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="No"
              status={ checked === 'No' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('No')}
            />
            <Text style={{paddingTop: 10}}>No</Text>
          </View>

        <Text style={styles.successtext3}>Please input your medication.</Text>
        <TextInput style={{left:35, top: 90, borderBottomWidth: 1, width: 200}} placeholder="Medication Name"></TextInput>
        </View>

        <TouchableOpacity style={styles.arrowright} onPress={() =>
          navigation.navigate('OnboardingFeedback')}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowleft} onPress={() =>
          navigation.navigate('OnboardingContact')}>
        </TouchableOpacity>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  headertext: {
    position: 'absolute',
    width: 400,
    height: 300,
    left: 0,
    top: 0,
    paddingTop: 30,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16.5,
    lineHeight: 22.5,
    textAlign: 'center',
    color: '#4F4F4F',
    backgroundColor: '#f2f2f2'
  },
  headertext2: {
    position: 'absolute',
    width: 243,
    height: 87.75,
    left: 70,
    top: 185,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16.5,
    lineHeight: 22.5,
    textAlign: 'center',
    color: '#4F4F4F',
  },
  successtext: {
    position: 'absolute',
    width: 243,
    height: 87.75,
    left: 75,
    top: 70,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 22.5,
    textAlign: 'center',
    color: '#4F4F4F',
    marginTop: 10,
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
  successtext3: {
    position: 'absolute',
    width: 243,
    height: 87.75,
    left: 40,
    top: 120,
    fontFamily: 'NunitoSans_300Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 22.5,
    textAlign: 'left',
    color: '#4F4F4F',
    marginTop: 10,
  },
});
