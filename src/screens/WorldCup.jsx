import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppText from '../components/common/AppText';
import ColorTypes from '../enumsCategories/ColorTypes';
import FontTypes from '../enumsCategories/FontTypes';
import CountdownCard from '../features/WorlCup/CountdownCard';
import CopaSede from '../features/WorlCup/CopaSede';
import { sedes } from '../mocks/sedesWorldCup2026'
// import NextMatches from '../../features/WorldCup/components/NextMatches/NextMatches';
// import FeaturedPlayers from '../../features/WorldCup/components/FeaturedPlayers/FeaturedPlayers';

// import NewsList from '../../components/Common/NewsList/NewsList';
// import FilterSection from '../../components/Common/FilterSection/FilterSection';

// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useSwipeable } from 'react-swipeable';

// import { players } from '../../mocks/players';
// import { newsWorldCup } from '../../mocks/newsWorldCup';
// import { groups } from '../../mocks/groups';
// import { octaves, quarters, semis, final } from '../../mocks/roundsWorldCup';

export default function WorldCup() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContent}>
        <CountdownCard />
        <CopaSede sedes={sedes}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 pageContainer: {
  backgroundColor: ColorTypes.BACKGROUNDWHITE,
},
});
