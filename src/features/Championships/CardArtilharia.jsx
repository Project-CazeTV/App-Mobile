import { logosTime } from "../../mocks/logosTime";
import { StyleSheet, View, Image, Pressable } from 'react-native';
import Routes from '../../routes/.';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';

export default function CardArtilharia({ artilheiro, logoTeam, showGoals = false}) {
    return (
        <View style={styles.playerCard}>
            <Image
                source={artilheiro.imagem}
                style={styles.playerPhoto}
            />
            <View style={styles.playerOverlay}>
                <AppText style={styles.playerPosition}>{artilheiro.posicao}</AppText>
                <AppText style={styles.playerName}>{artilheiro.nome}</AppText>
                <AppText style={styles.playerCountry}>{artilheiro.pais} {logoTeam ? <Image style={styles.teamLogo} source={logoTeam}/> : <AppText> · {player.clube}</AppText>}</AppText>
            {showGoals && (
                <AppText style={styles.playerGoals}>{artilheiro.gols}</AppText>
            )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  playerCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    minHeight: 100,
    overflow: "hidden",
  },

  playerPhoto: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    flexShrink: 0,
  },

  playerOverlay: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  playerName: {
    flex: 1,
    fontWeight: 800,
    fontSize: 14,
    color: ColorTypes.DARK,
  },

  teamLogo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  playerGoals: {
    width: 60,
    fontWeight: 800,
    fontSize: 26,
    color: ColorTypes.DARK,
    textAlign: "center",
  },
});