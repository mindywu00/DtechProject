import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingContact from '../screens/OnboardingContact';
import OnboardingHealth from '../screens/OnboardingHealth';
import OnboardingFeedback from '../screens/OnboardingFeedback';
import { BottomTabParamList, WelcomeParamList, LoginParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Welcome"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Welcome"
        component={WelcomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const WelcomeStack = createStackNavigator<WelcomeParamList>();
function WelcomeNavigator() {
  return (
    <WelcomeStack.Navigator>
      <WelcomeStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerTitle: 'Log In' }}
      />
      <WelcomeStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerTitle: 'Sign Up' }}
      />
      <WelcomeStack.Screen
        name="OnboardingContact"
        component={OnboardingContact}
        options={{ headerTitle: 'Contact' }}
      />
      <WelcomeStack.Screen
        name="OnboardingHealth"
        component={OnboardingHealth}
        options={{ headerTitle: 'Health' }}
      />
      <WelcomeStack.Screen
        name="OnboardingFeedback"
        component={OnboardingFeedback}
        options={{ headerTitle: 'Account Created' }}
      />
    </WelcomeStack.Navigator>
  );
}
