import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Pressable } from 'react-native';
import AppText from '../components/common/AppText';
import HomeNews from '../components/carrousel/HomeBanner';
import NewsList from '../components/common/NewsList';
import { mainNewsMock } from '../mocks/news';
import { noticiasMenoresMock } from '../mocks/news.js';
import ColorTypes from '../enumsCategories/ColorTypes';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <HomeNews news={mainNewsMock} />
      <StatusBar style="auto" />
      <NewsList noticias={noticiasMenoresMock} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
  },
});
