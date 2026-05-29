import { StyleSheet, View, Pressable } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';

import LogoTime from "../Championships/LogoTime";
import { logosTime } from "../../mocks/logosTime";

export default function CardPartida({ jogo, pendente }) {

  const temPlacar = jogo.placarA !== null && jogo.placarA !== undefined;

  const urlLogoTimeA = jogo.flagA || jogo.escudoA || logosTime[jogo.timeA];
  const urlLogoTimeB = jogo.flagB || jogo.escudoB || logosTime[jogo.timeB];

  return (
    <View style={styles.cardPartida}>

      <View style={styles.ladoTime}>
        <LogoTime
          url={urlLogoTimeA}
          nomeTime={jogo.timeA}
          pendente={pendente}
        />
        <AppText style={[styles.nomeTime, pendente ? styles.nomeTimePendente : ""]}>
          {pendente ? "A definir" : jogo.timeA}
        </AppText>
      </View>

      <View style={styles.infoPartida}>
        {jogo.hora && (
          <AppText style={styles.horario}>{jogo.hora} em Brasília</AppText>
        )}
        {jogo.fase && (
          <AppText style={styles.fasePartida}>{jogo.fase}</AppText>
        )}
        {temPlacar ? (
          <AppText style={styles.placar}>
            {jogo.placarA} x {jogo.placarB}
          </AppText>
        ) : (
          <AppText style={styles.versus}>x</AppText>
        )}
        {jogo.estadio && (
          <AppText style={styles.estadio}>{jogo.estadio}</AppText>
        )}
        {jogo.local && (
          <AppText style={styles.localJogo}>{jogo.local}</AppText>
        )}
      </View>

      <View style={[styles.ladoTime, styles.ladoDireito]}>
        <LogoTime
          url={urlLogoTimeB}
          nomeTime={jogo.timeB}
          pendente={pendente}
        />
        <AppText style={[styles.nomeTime, pendente ? styles.nomeTimePendente : ""]}>
          {pendente ? "A definir" : jogo.timeB}
        </AppText>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  cardPartida: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.06)',
  },

  cardPartidaUltimo: {
    borderBottomWidth: 0,
  },

 ladoTime: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
 
  ladoDireito: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },

nomeTime: {
    fontSize: 11,
    fontWeight: 600,
    color: ColorTypes.DARK,
    textAlign: 'center',
    maxWidth: 90,
  },

  nomeTimePendente: {
    color: '#bbb',
    fontStyle: 'italic',
  },

infoPartida: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
  },
 
  horario: {
    fontSize: 10,
    color: '#888',
    // white-space: nowrap → numberOfLines={1} como prop no <Text>
  },

 fasePartida: {
    fontSize: 9,
    color: '#bbb',
    maxWidth: 189,
    textAlign: 'center',
  },
 
  placar: {
    fontSize: 18,
    fontWeight: 800,
    color: ColorTypes.DARK,
  },

versus: {
    fontSize: 16,
    fontWeight: 600,
    color: '#bbb',
  },
 
  estadio: {
    fontSize: 10,
    color: '#7c7c7c',
    marginTop: 2,
    textAlign: 'center',
  },

  localJogo: {
    fontSize: 10,
    color: '#aaa',
    textAlign: 'center',
  },
});