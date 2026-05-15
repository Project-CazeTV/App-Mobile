import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import HomeNews from '../components/carrousel/HomeBanner';
import { mainNewsMock } from '../mocks/news';
import ColorTypes from '../enumsCategories/ColorTypes';
import AppText from '../components/common/AppText';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <HomeNews news={mainNewsMock}/>
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
