import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import CardGesturePass from '../../components/common/CardGesturePass';

export default function PlayersNational({ players = [], title, subtitle }) {
    const PlayerCard = ({ object }) => (
        <View style={styles.playerCard}>
            <Image
                source={object.imagem}
                style={styles.playerPhoto}
            />
            <View style={styles.playerOverlay}
                colors={[
                    'transparent',
                    'rgba(0,0,0,0.75)',
                    'rgba(0,0,0,0.85)',
                ]}>
                <AppText style={styles.playerPosition}>{object.posicao}</AppText>
                <AppText style={styles.playerName}>{object.nome}</AppText>
                <AppText style={styles.playerCountry}>{object.pais} · {object.clube}</AppText>
            </View>
        </View>
    );

    return (
        <View style={styles.section}>
            {(title || subtitle) && (
                <View style={styles.header}>
                    {title && (
                        <View style={styles.titleRow}>
                            <View style={styles.titleBar}/>
                            <AppText style={styles.title}>{title}</AppText>
                        </View>
                    )}

                    {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                </View>
            )}
            <CardGesturePass list={players} CardComponent={PlayerCard} />
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        width: "100%",
        marginTop: 50,
        minWidth: 0,
        gap: 20,
    },

    header: {
        alignItems: "center",
        gap: 4,
    },

    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    titleBar: {
        width: 4,
        height: 20,
        backgroundColor: ColorTypes.BLUE,
        borderRadius: 2,
        flexShrink: 0,
    },

    title: {
        fontSize: 22,
        fontWeight: 800,
        color: "#111",
        textTransform: "uppercase",
        letterSpacing: 0.64,
    },

    subtitle: {
        fontSize: 16,
        color: "#111",
        opacity: 0.5,
        paddingLeft: 14,
    },

    playerCard: {
    width: 220,
    alignSelf: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
    overflow: "hidden",
  },

  playerPhoto: {
    width: "100%",
    aspectRatio: 3 / 4,
    resizeMode: "cover",
    backgroundColor: "#eef2f8",
  },

  playerOverlay: {
    position: "relative",
    flexDirection: "column",
    gap: 4,
    paddingTop: 16,
    paddingHorizontal: 18,
    paddingBottom: 18,
    backgroundColor: "#fff",
    borderTopWidth: 4,
    borderTopColor: "#002c8f",
  },

  playerPosition: {
    position: "absolute",
    right: 14,
    bottom: "100%",
    marginBottom: 10,
    zIndex: 3,
    fontSize: 14,
    fontWeight: 800,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    color: "#fff",
    backgroundColor: "#002c8f",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },

  playerName: {
    fontSize: 14,
    fontWeight: 900,
    color: "#111",
    lineHeight: 16,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  playerCountry: {
    fontSize: 11.5,
    color: "#111",
    opacity: 0.48,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
});