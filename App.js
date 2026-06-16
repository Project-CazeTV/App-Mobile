import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routes/StackNavigator';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Platform } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import ColorTypes from './src/enumsCategories/ColorTypes';
import FontTypes from './src/enumsCategories/FontTypes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync().catch(() => { });

export default function App() {
  const [fontsLoaded] = useFonts({
    [FontTypes.COPA]: require('./src/assets/fonts/fifa-26.otf'),
    [FontTypes.SORA]: require('./src/assets/fonts/Sora-VariableFont_wght.ttf'),
  });
  const platform = 'ios';
  const icon = platform === 'android' ? "android" : platform === 'ios' ? "apple" : '';

  const [showLoadingScreen, setLoadingScreen] = useState(true);
  useEffect(() => {
    const endLoadingScreen = setTimeout(async () => {
      setLoadingScreen(false);
      await SplashScreen.hideAsync();
    }, 5000);
    return () => {
      clearTimeout(endLoadingScreen);
    };
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  if (!showLoadingScreen) {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }

  return (
    <View style={styles.loadingContainer}>
      <Image style={styles.logo} source={require('./src/assets/images/logos/caze.png')} />
      <Image style={styles.loadingBar} source={require('./src/assets/videos/loadingBar.gif')} />
      {platform != 'web' && <FontAwesome5 style={styles.iconPlatform} name={icon} size={60} color={ColorTypes.GRAY} />}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorTypes.BLUE,
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
  iconPlatform: {
    position: 'absolute',
    marginBottom: -500,
  },
});