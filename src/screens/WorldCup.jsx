import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppText from '../components/common/AppText';
import ColorTypes from '../enumsCategories/ColorTypes';
import FontTypes from '../enumsCategories/FontTypes';
import WorldCupCategories from '../enumsCategories/WorldCup';
import CountdownCard from '../features/WorlCup/CountdownCard';
import CopaSede from '../features/WorlCup/CopaSede';
import FeaturedPlayers from '../features/WorlCup/FeaturedPlayers';
import NewsList from '../components/common/NewsList';
import { sedes } from '../mocks/sedesWorldCup2026';
import { players } from '../mocks/players';
import { newsWorldCup } from '../mocks/newsWorldCup';

// import NextMatches from '../../features/WorldCup/components/NextMatches/NextMatches';

// import { groups } from '../../mocks/groups';
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
});
