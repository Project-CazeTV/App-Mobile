import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import AppText from '../components/common/AppText';
import OlympicCategories from '../enumsCategories/Olympics';
import ColorTypes from '../enumsCategories/ColorTypes';
import OlympicsStats from "../features/Olympic/OlympicStats";
// import MedalTable from "../features/Olimpiadas/components/MedalTable/MedalTable";
// import FeaturedAthletes from "../features/Olimpiadas/components/FeaturedAthletes/FeaturedAthletes.jsx";
import NewsList from "../components/common/NewsList";

import { noticiasOlimpiadasMock, noticiasOlimpiadasMock2026 } from "../mocks/news.js";
import imgOlympicSummer2024 from "../assets/images/banners/jogos_paris_2024.png";
import imgOlympicWinter2026 from "../assets/images/banners/jogos_olimpicos.png";
import { Summer2024, winter2026 } from '../mocks/medalData.js';
import { featuredAthletes, featuredAthletes2026 } from '../mocks/olimpiadas.js';
import { olympicsStats, olympicsStats2026 } from "../mocks/olimpiadas.js";

export default function Olympic({ route }) {
  const { category } = route.params;
  const banner = category === OlympicCategories.SUMMER ? imgOlympicSummer2024 : imgOlympicWinter2026;
  const stats = category === OlympicCategories.SUMMER ? olympicsStats : olympicsStats2026;
  const medalData = category === OlympicCategories.SUMMER ? Summer2024 : winter2026;
  const athletes = category === OlympicCategories.SUMMER ? featuredAthletes : featuredAthletes2026;
  const news = category === OlympicCategories.SUMMER ? noticiasOlimpiadasMock : noticiasOlimpiadasMock2026;

  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.heroSection}>
        <View style={styles.heroBanner}>
          <Image style={styles.bannerImage} source={banner} />
          <AppText style={styles.liveInfo}>
            Salto Artístico Feminino — Grupo A
          </AppText>
        </View>
      </View>
      <OlympicsStats stats={stats} />
      <NewsList title="Notícias das Olimpíadas" noticias={news}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
  },


  heroSection: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },

  heroBanner: {
    width: "100%",
    aspectRatio: 16 / 7,
    overflow: "hidden",
    borderRadius: 16,
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});