import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.Toptitle}>SIGN UP</Text>
        <View style={styles.header}></View>

        <Text style={styles.title}>APP NANE + LOGO</Text>
        <Text style={styles.fullName}>Full Name</Text>
        <Text style={styles.username}>Username</Text>
        <Text style={styles.password}>Password</Text>
        <Text style={styles.verifyPassword}>Verify Password</Text>
        <Text style={styles.date}>Date of Birth</Text>

        <Text style={styles.signUp}>SIGN UP</Text>
        <View style={styles.roundedBox}> </View>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/signin.tsx" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Toptitle: {
        position: 'absolute',
        width: '76px',
        height: '23px',
        left: '169px',
        top: '50px',

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 20,
        lineHeight: 23,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        textTransform: 'uppercase',
        /* Gray 2 */
        color: '#4F4F4F',  
    },
    header: {
        position: 'absolute',
        width: '324px',
        height: '117px',
        left: '45px',
        top: '159px',   
        background: '#C4C4C4',
    },
    title:{
        position: 'absolute',
        width: '201px',
        height: '30px',
        left: '106px',
        top: '206px',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 22,
        lineHeight: 30,
        /* identical to box height */
        textAlign: 'center',
        /* Gray 2 */
        color: '#4F4F4F',
    },
    fullName:{
        position: 'absolute',
        width: '82px',
        height: '25px',
        left: '67px',
        top: '341px',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 25,
        /* identical to box height */
        /* Gray 2 */
        color: '#4F4F4F',
    },
    username:{
        position: 'absolute',
        width: '83px',
        height: '25px',
        left: '67px',
        top: '402px',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 25,
        /* identical to box height */
        display:'flex',
        alignItems:'center',
        /* Gray 2 */
        color: '#4F4F4F',

    },
    password:{
        position: 'absolute',
        width: '81px',
        height: '25px',
        left: '67px',
        top: '463px',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 25,
        /* identical to box height */
        display:'flex',
        alignItems:'center',
        /* Gray 2 */
        color: '#4F4F4F',
    },
    verifyPassword:{
        position: 'absolute',
        width: '134px',
        height: '25px',
        left: '67px',
        top: '524px',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 25,
        /* identical to box height */
        display:'flex',
        alignItems:'center',
        /* Gray 2 */
        color: '#4F4F4F',
    },
    date:{
        position: 'absolute',
        width: '106px',
        height: '25px',
        left: '67px',
        top: '585x',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 25,
        /* identical to box height */
        /* Gray 2 */
        color: '#4F4F4F',
    },
    signUp:{
        position: 'absolute',
        width: '68px',
        height: '21px',
        left: '173px',
        top: '671px',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 18,
        lineHeight: 21,
        /* identical to box height */
        textAlign: 'center',
        textTransform: 'uppercase',
        /* Gray 2 */
        color: '#4F4F4F',
    },
    roundedBox:{
        position: 'absolute',
        width: '280px',
        height: '55px',
        left: '67px',
        top: '654px',   
        background: '#C4C4C4',
        shadowOffset:{width: 2, height:4},
        shadowColor:'rgba(0, 0, 0, 0.15)',
        borderRadius: 30,
    },

    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
