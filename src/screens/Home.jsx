import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ColorTypes from '../enumsCategories/ColorTypes';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
