import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ColorTypes from '../enumsCategories/ColorTypes';

export default function Shop({ route }) {
const { category } = route.params;
  return (
    <View style={styles.container}>  
      <Text>Shop {category} Screen!</Text>
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
