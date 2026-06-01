import { StyleSheet, View, ScrollView } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';

export default function TabelaGrupo({ grupo, cor = "#F5C518" }) {
  return (
    <View style={styles.cardGrupo}>
      <View style={[styles.cabecalho, { borderColor: cor }]}>
        <AppText style={styles.label}>GRUPO</AppText>
        <AppText style={[styles.letraGrupo, { color: cor }]}>
          {grupo.grupo}
        </AppText>
      </View>

      <View style={styles.corpo}>
        <View style={styles.headerLinha}>
          <AppText style={styles.headerPos}>#</AppText>
          <AppText style={styles.headerTime}>Time</AppText>
          <AppText style={styles.headerStat}>P</AppText>
          <AppText style={styles.headerStat}>J</AppText>
          <AppText style={styles.headerStat}>V</AppText>
          <AppText style={styles.headerStat}>E</AppText>
          <AppText style={styles.headerStat}>D</AppText>
          <AppText style={styles.headerStat}>SG</AppText>
        </View>

        {grupo.tabela.map((linha) => {
          const classificado = linha.pos <= 2;
          return (
            <View
              key={linha.pos}
              style={[styles.linha, classificado ? styles.linhaClassificada : ""]}>
              {classificado && (
                <View
                  style={[styles.indicador, { backgroundColor: cor }]}/>
              )}

              <AppText style={styles.pos}>{linha.pos}</AppText>

              <View style={styles.time}>
                <AppText style={styles.pais}>{linha.pais}</AppText>
                <AppText numberOfLines={1} ellipsizeMode="tail" style={styles.nomeTime}>{linha.time}</AppText>
              </View>

              <AppText style={[styles.stat, styles.pontos]}>
                {linha.pts}
              </AppText>
              <AppText style={styles.stat}>{linha.j}</AppText>
              <AppText style={styles.stat}>{linha.v}</AppText>
              <AppText style={styles.stat}>{linha.e}</AppText>
              <AppText style={styles.stat}>{linha.d}</AppText>
              <AppText style={[styles.stat,
                linha.sg > 0 ? styles.saldoPos : linha.sg < 0 ? styles.saldoNeg : ""
              ]}>
                {linha.sg > 0 ? `+${linha.sg}` : linha.sg}
              </AppText>
            </View>
          );
        })}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  cardGrupo: {
    borderRadius: 12,
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
    overflow: 'hidden',
  },

  cabecalho: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
    paddingTop: 14,
    paddingBottom: 10,
    paddingHorizontal: 16,
    borderLeftWidth: 3,
  },

  label: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 0.16 * 10,
    color: '#aaa',
  },
  
  letraGrupo: {
    fontSize: 18,
    fontWeight: 800,
    letterSpacing: -0.02 * 18,
  },
 
  corpo: {
    paddingBottom: 8,
  },

  headerLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    gap: 4,
  },
 
  headerPos: {
    width: 24,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 0.8,
    color: '#bbb',
    textAlign: 'center',
  },
 
  headerTime: {
    flex: 1,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 0.08 * 10,
    color: '#bbb',
    textAlign: 'left',
  },
 
  headerStat: {
    width: 20,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 0.8,
    color: '#bbb',
    textAlign: 'center',
  },

  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingLeft: 10,
    paddingRight: 10,
    gap: 4,
    position: 'relative',
  },

  indicador: {
    position: 'absolute',
    left: 0,
    top: 6,
    bottom: 6,
    width: 3,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },

  linhaClassificada: {
    backgroundColor: 'rgba(0,0,0,0.015)',
  },

pos: {
    width: 24,
    fontSize: 12,
    fontWeight: 600,
    color: '#999',
    textAlign: 'center',
  },
 
  time: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    minWidth: 0,
  },
 
  pais: {
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 0.08 * 9,
    color: '#ccc',
    width: 22,
  },

nomeTime: {
    flex: 1,
    fontSize: 12,
    fontWeight: 600,
    color: ColorTypes.DARK,
  },
 
  stat: {
    width: 20,
    fontSize: 12,
    color: ColorTypes.DARK,
    textAlign: 'center',
  },

  pontos: {
    fontWeight: 800,
    color: ColorTypes.DARK,
  },
 
  saldoPos: {
    color: '#2f9e44',
    fontWeight: 700,
  },
 
  saldoNeg: {
    color: '#e03131',
    fontWeight: 700,
  },
});

