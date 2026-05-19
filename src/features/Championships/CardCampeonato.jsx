import { StyleSheet, View, Image, Pressable } from 'react-native';
import Routes from '../../routes/.';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';

export default function CardCampeonato({ navigation, campeonato }) {
    return (
        <Pressable onPress={() => navigation.navigate(Routes.CHAMPIONSHIP, { campeonato })}
            style={[styles.cabecalho, { borderColor: campeonato.cor }]}>
            {campeonato.logo && (
                <Image source={campeonato.logo} style={styles.logoCampeonato} />
            )}
            <View style={styles.infoCabecalho}>
                <AppText style={styles.nomeCampeonato}>{campeonato.nomeCompleto || campeonato.nome}</AppText>
                <AppText style={styles.faseAtual}>{campeonato.fase}</AppText>
                {campeonato.campeao && (
                    <AppText style={styles.badgeCampeao}>
                        🏆 Campeão {campeonato.campeao}
                    </AppText>
                )}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 20,
    marginTop: 20,
    marginHorizontal: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#3b5bdb',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },

  logoCampeonato: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
  },

  infoCabecalho: {
    flexDirection: 'column',
    gap: 2,
    flex: 1,
  },

  nomeCampeonato: {
    fontSize: 15,
    fontWeight: '800',
    color: '#000',
  },

  faseAtual: {
    fontSize: 12,
    color: '#888',
  },

  badgeCampeao: {
    fontSize: 12,
    fontWeight: '700',
    color: '#f59f00',
    marginTop: 4,
  },
});