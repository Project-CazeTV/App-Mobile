import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routes/StackNavigator';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Image} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  const [showLoadingScreen, setLoadingScreen] = useState(true);
  useEffect(() => {
    const endLoadingScreen = setTimeout(async () => {
      setLoadingScreen(false);
      await SplashScreen.hideAsync();
    }, 3500);
    return () => {
      clearTimeout(endLoadingScreen);
    };
  }, []);

  if (!showLoadingScreen) {
    return (
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.loadingContainer}>
      <Image style={styles.logo} source={require('./src/assets/images/logos/caze.png')}/>
      <Image style={styles.loadingBar} source={require('./src/assets/videos/loadingBar.gif')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008AFF',
  },
  logo: {
    position: 'absolute',
    marginTop: -100,
    width: 120,
    height: 120,
  },
  loadingBar: {
    position: 'absolute',
    marginBottom: -100,
    width: 200,
  },
});