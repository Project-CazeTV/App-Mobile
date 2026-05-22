import CardGesturePass from "../../components/common/CardGesturePass";
import { StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppText from "../../components/common/AppText";
import ColorTypes from '../../enumsCategories/ColorTypes';

export default function FeaturedAthletes({ athletes }) {
    const medalIcons = {
        gold: "🥇",
        silver: "🥈",
        bronze: "🥉",
    };

    const AthleteCard = ({ object }) => (
        <View style={styles.athleteCard}>
            <Image
                source={object.image}
                style={styles.athletePhoto}
            />
            <LinearGradient style={styles.athleteOverlay}
            colors={[
                'transparent',
                'rgba(0,0,0,0.70)',
                'rgba(0,0,0,0.90)',
            ]}>
                <AppText style={styles.athleteModality}>{object.modality}</AppText>
                <AppText style={styles.athleteName}>{object.name}</AppText>
                <View style={styles.athleteMedals}>
                    {object.medals.map((medal, idx) => (
                        <AppText key={idx} style={styles.medalBadge}>
                            {medalIcons[medal]}
                        </AppText>
                    ))}
                </View>
            </LinearGradient>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleBar} />
                <View>
                    <AppText style={styles.title}>ATLETAS DE DESTAQUE</AppText>
                    <AppText style={styles.subtitle}>Os brasileiros que brilharam em Paris 2024</AppText>
                </View>
            </View>
            <CardGesturePass list={athletes} CardComponent={AthleteCard} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 16,
        marginVertical: 40,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 24,
        alignSelf: 'center',
    },

    titleBar: {
        width: 4,
        height: 36,
        backgroundColor: ColorTypes.BLUE,
        borderRadius: 2,
        flexShrink: 0,
    },

    title: {
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 1.5,
        color: "#111",
        marginBottom: 4,
    },

    subtitle: {
        fontSize: 13,
        color: ColorTypes.GRAYTEXT,
    },

    athleteCard: {
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        aspectRatio: 3 / 4,
        backgroundColor: "#eee",
    },

    athletePhoto: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    athleteOverlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 40,
        paddingHorizontal: 14,
        paddingBottom: 14,
        flexDirection: "column",
        gap: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: {
            width: 0,
            height: 2,
        },
        textShadowRadius: 6,
    },

    athleteModality: {
        fontSize: 10,
        fontWeight: "600",
        color: "rgba(255,255,255,0.65)",
        letterSpacing: 1,
        textTransform: "uppercase",
    },

    athleteName: {
        fontSize: 15,
        fontWeight: "800",
        color: "#fff",
        lineHeight: 18,
    },

    athleteMedals: {
        flexDirection: "row",
        gap: 4,
        marginTop: 2,
    },

    medalBadge: {
        fontSize: 14,
        lineHeight: 14,
    },
});