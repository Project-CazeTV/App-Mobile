import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import AppText from '../components/common/AppText';
import OlympicCategories from '../enumsCategories/Olympics';
import ColorTypes from '../enumsCategories/ColorTypes';
import OlympicsStats from "../features/Olympic/OlympicStats";
import MedalTable from "../features/Olympic/MedalTable";
import FeaturedAthletes from "../features/Olympic/FeaturedAthletes";
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
      <MedalTable edicao={medalData} />
      <FeaturedAthletes athletes={athletes} />
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
//     .container {
//   padding: 0 16px;
//   margin-top: 40px;
//   width: 100%;
//   box-sizing: border-box;
//   margin: 40px 0;
// }

// .header {
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   margin-bottom: 24px;
// }

// .titleBar {
//   display: block;
//   width: 4px;
//   height: 36px;
//   background: #3b6ef8;
//   border-radius: 2px;
//   flex-shrink: 0;
// }

// .title {
//   font-size: 14px;
//   font-weight: 700;
//   letter-spacing: 1.5px;
//   color: var(--text-color);
//   margin: 0 0 4px;
// }

// .subtitle {
//   font-size: 13px;
//   color: #888;
//   margin: 0;
// }
});