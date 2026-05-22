import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OlympicCategories from '../enumsCategories/Olympics';
import ColorTypes from '../enumsCategories/ColorTypes';

import MedalTable from "../../features/Olimpiadas/components/MedalTable/MedalTable";
import NewsList from "../../components/Common/NewsList/NewsList";
import styles from "./OlympicsPage.module.css";
import { useState } from "react";
import FeaturedAthletes from "../../features/Olimpiadas/components/FeaturedAthletes/FeaturedAthletes.jsx";
import OlympicsStats from "../../features/Olimpiadas/components/OlympicsStats/OlympicsStats.jsx";

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