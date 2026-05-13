import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppText from '../components/common/AppText';
import ColorTypes from '../enumsCategories/ColorTypes';
import FontTypes from '../enumsCategories/FontTypes';
import WorldCupCategories from '../enumsCategories/WorldCup';
import CountdownCard from '../features/WorlCup/CountdownCard';
import CopaSede from '../features/WorlCup/CopaSede';
import FeaturedPlayers from '../features/WorlCup/FeaturedPlayers';
import CountriesGroup from '../features/WorlCup/CountriesGroup';
import NewsList from '../components/common/NewsList';
import { sedes } from '../mocks/sedesWorldCup2026';
import { players } from '../mocks/players';
import { newsWorldCup } from '../mocks/newsWorldCup';
import { groups } from '../mocks/groups';

// import NextMatches from '../../features/WorldCup/components/NextMatches/NextMatches';
// import { octaves, quarters, semis, final } from '../../mocks/roundsWorldCup';

export default function WorldCup({ route }) {
  const { category } = route.params;

  const handleVerMais = (noticia) => {
    console.log("Ver mais:", noticia);
  };

  return (
    <ScrollView style={styles.container}>
      <CountdownCard />
      {category === WorldCupCategories.INFORMATIONS && (<>
        <CopaSede sedes={sedes} />
        <FeaturedPlayers players={players} />
      </>)}
      {category === WorldCupCategories.GROUPS && (<>
        <AppText style={styles.titleSection}>Grupos</AppText>
        <CountriesGroup groups={groups} />
      </>)}
      <NewsList
        title="O que ta rolando por aí?"
        subtitle={"Acompanhe os principais acontecimentos do futebol nacional e internacional."}
        noticias={newsWorldCup}
        onVerMais={handleVerMais}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
  },
  titleSection: {
    marginTop: 20,
    fontFamily: FontTypes.COPA,
    fontSize: 50,
    fontWeight: '900',
    color: ColorTypes.YELLOW,
    letterSpacing: 3,
    textAlign: 'center',
  }
});
