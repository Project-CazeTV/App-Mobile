import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Pressable } from 'react-native';
import AppText from '../components/common/AppText';
import HomeNews from '../components/carrousel/HomeBanner';
import VideoList from '../components/common/VideoList';
import NewsList from '../components/common/NewsList';
import { mainNewsMock } from '../mocks/news';
import { noticiasMenoresMock } from '../mocks/news.js';
import { videosHome } from '../mocks/videos.js'
import ColorTypes from '../enumsCategories/ColorTypes';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <HomeNews news={mainNewsMock} />
      <StatusBar style="auto" />
      <View style={styles.videosSection}>
        <VideoList videos={videosHome} title="Em Alta na Cazé" />
      </View>
      <NewsList title="Cazé News" noticias={noticiasMenoresMock} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
  },
  videosSection: {
    width: '90%',
    marginVertical: 20,
    alignSelf: "center",
  },
});
