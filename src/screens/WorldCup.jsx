import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ColorTypes from '../enumsCategories/ColorTypes';

export default function WorldCup() {
  return (
    <View style={styles.container}>
      <Text>World Cup Screen!</Text>
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
