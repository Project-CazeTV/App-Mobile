import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import ColorTypes from '../enumsCategories/ColorTypes';
import Routes from '../routes/.';
import ShopBanner from '../features/Shop/ShopBanner';

export default function Shop({ route }) {
const { category } = route.params;

  return (
    <ScrollView style={styles.container}>  
      <ShopBanner />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
  },
});