import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ColorTypes from '../enumsCategories/ColorTypes';
import HeroBanner from '../features/History/HeroBanner';

export default function History() {
  return (
    <View style={styles.container}>
      <HeroBanner />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
    alignItems: 'center',

  },
});
