import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ColorTypes from '../enumsCategories/ColorTypes';

export default function History() {
  return (
    <View style={styles.container}>
      <Text>History Screen!</Text>
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
