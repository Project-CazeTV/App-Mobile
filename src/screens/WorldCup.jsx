import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppText from '../components/common/AppText';
import ColorTypes from '../enumsCategories/ColorTypes';
import FontTypes from '../enumsCategories/FontTypes';
import SectionTitle from '../components/common/SectionTitle';
import WorldCupCategories from '../enumsCategories/WorldCup';
import CountdownCard from '../features/WorldCup/CountdownCard';
import ConvocationCard from '../features/WorldCup/ConvocationCard'
import CopaSede from '../features/WorldCup/CopaSede';
import FeaturedPlayers from '../features/WorldCup/FeaturedPlayers';
import NationalPlayers from '../features/WorldCup/NationalPlayers';
import CountriesGroup from '../features/WorldCup/CountriesGroup';
import NextMatches from '../features/WorldCup/NextMatches';
import NewsList from '../components/common/NewsList';
import { sedes } from '../mocks/sedesWorldCup2026';
import { players, convocadosBrasil } from '../mocks/players';
import { newsWorldCup } from '../mocks/newsWorldCup';
import { groups } from '../mocks/groups';
import { octaves, quarters, semis, final } from '../mocks/roundsWorldCup';

export default function WorldCup({ route }) {
  const { category } = route.params;

  return (
    <ScrollView style={styles.container}>
      <CountdownCard />
      {category === WorldCupCategories.INFORMATIONS && (<>
        <CopaSede sedes={sedes} />
        <FeaturedPlayers players={players} />
        <View className={styles.convocadosSection}>
          <ConvocationCard
            title="Convocação"
            subtitle="Veja como foi a convocação dos jogadores para a Copa do Mundo 2026."
            flex={false}
          />
          <NationalPlayers players={convocadosBrasil} title="Convocados" subtitle="Copa do Mundo 2026" />
        </View>
      </>)}

      {category === WorldCupCategories.GROUPS && (<>
        <AppText style={styles.titleSection}>Grupos</AppText>
        <CountriesGroup groups={groups} />
        <NextMatches
          groups={groups}
          title="FASE DE GRUPOS"
          subtitle="48 jogos · 12 grupos · 32 seleções"
          description="Na fase de grupos, as 48 seleções são divididas em 12 grupos de 4 times. Cada time joga 3 partidas e os 2 melhores de cada grupo avançam para as oitavas de final."
          pendente={false}
        />
      </>)}

      {category === WorldCupCategories.QUALIFIERS && (<>
        <AppText style={styles.titleSection}>Eliminatórias</AppText>
        <NextMatches
          groups={octaves}
          title="OITAVAS DE FINAL"
          subtitle="16 jogos · 32 seleções classificadas"
          description="Os 24 melhores da fase de grupos mais os 8 melhores terceiros colocados se enfrentam em jogos eliminatórios. Quem perde está fora da Copa."
          pendente={true}
        />
        <View style={{ height: 100 }}></View>
        <NextMatches
          groups={quarters}
          title="QUARTAS DE FINAL"
          subtitle="8 jogos · 16 seleções"
          description="Os 8 vencedores das oitavas se enfrentam em jogos eliminatórios. Apenas os 4 melhores avançam para as semifinais."
          pendente={true}
        />
      </>)}

      {category === WorldCupCategories.FINALS && (<>
        <AppText style={styles.titleSection}>Finais</AppText>
        <NextMatches
          groups={semis}
          title="SEMIFINAL"
          subtitle="2 jogos · 4 seleções"
          description="As quatro seleções que restaram disputam as duas vagas na grande final. Um passo para a eternidade."
          pendente={true}
        />
        <View style={{ height: 100 }}></View>
        <NextMatches
          groups={final}
          title="FINAL"
          subtitle="1 jogo · 2 seleções · 1 campeão"
          description="O jogo mais esperado do planeta. As duas seleções que sobreviveram a todo o torneio se enfrentam pelo título de campeão do mundo."
          pendente={true}
        />
      </>)}

      <NewsList
        title="O que ta rolando por aí?"
        subtitle={"Acompanhe os principais acontecimentos do futebol nacional e internacional."}
        noticias={newsWorldCup}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
  },
  titleSection: {
    paddingHorizontal: 20,
    marginTop: 20,
    fontFamily: FontTypes.COPA,
    fontSize: 50,
    fontWeight: '900',
    color: ColorTypes.YELLOW,
    letterSpacing: 3,
    textAlign: 'center',
  }
});
