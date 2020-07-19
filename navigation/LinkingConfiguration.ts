import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Welcome: {
            screens: {
              WelcomeScreen: 'one',
              LoginScreem: 'two',
              OnboardingContact: 'three',
              OnboardingHealth: 'four',
              OnboardingFeedbacl: 'five',
            },
          },
          Login: {
            screens: {
              LoginScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
