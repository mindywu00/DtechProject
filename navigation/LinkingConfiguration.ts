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
