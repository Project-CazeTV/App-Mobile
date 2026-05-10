import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OlympicCategories from '../enumsCategories/Olympics';
import ColorTypes from '../enumsCategories/ColorTypes';

export default function Olympic({ route }) {
const { category } = route.params;
  return (
    <View style={styles.container}>
      <Text>{category === OlympicCategories.SUMMER ? 'Verão' : 'Inverno'} Olympic!</Text>
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
