import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Pressable } from 'react-native';
import AppText from '../components/common/AppText';
import HomeNews from '../components/carrousel/HomeBanner';
import VideoList from '../components/common/VideoList';
import ShopBanner from '../features/Shop/ShopBanner';
import NewsList from '../components/common/NewsList';
import Routes from '../routes/.';
import { mainNewsMock } from '../mocks/news';
import { noticiasMenoresMock } from '../mocks/news.js';
import { videosHome } from '../mocks/videos.js'
import ColorTypes from '../enumsCategories/ColorTypes';

export default function Home({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <HomeNews news={mainNewsMock} />
      <StatusBar style="auto" />
      <View style={styles.videosSection}>
        <VideoList videos={videosHome} title="Em Alta na Cazé" />
      </View>
      <View style={styles.homeKitSection}>
        <View>
          <AppText style={styles.homeKitTitle}>Monte seu kit Cazé TV</AppText>
          <AppText style={styles.homeKitDescription}>
            Escolha seus produtos favoritos e acompanhe cada campeonato com estilo,
            praticidade e a energia de quem vive o esporte de verdade.
          </AppText>
          <Pressable onPress={() => navigation.navigate(Routes.SHOPDASHBOARD)} style={styles.homeKitButton}><AppText style={styles.homeKitButtonText}>montar meu kit</AppText></Pressable>
        </View>
        <View style={styles.homeKitBanner}>
          <ShopBanner />
        </View>
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

  homeKitSection: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    flexDirection: "column",
    gap: 32,
    position: "relative",
  },

  homeKitTitle: {
    marginBottom: 16,
    fontSize: 30,
    lineHeight: 32,
    fontWeight: 800,
    color: "#111",
    textAlign: "center",
  },

  homeKitDescription: {
    width: "100%",
    marginBottom: 28,
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 400,
    color: ColorTypes.GRAYTEXT,
    textAlign: "center",
  },

  homeKitButton: {
    width: "60%",
    alignSelf: "center",
    paddingVertical: 14,
    paddingHorizontal: 30,
    backgroundColor: "#edba00",
    alignItems: "center",
    justifyContent: "center",
  },

  homeKitButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 500,
  },

  homeKitBanner: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  
  videosSection: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 20,
  },
});
