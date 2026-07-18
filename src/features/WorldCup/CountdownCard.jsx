import { useCountdown } from '../../hooks/useCountdown';
import logoFifa from '../../assets/images/logos/logo-copa.png';
import logoCbf from '../../assets/images/logos/logo-cbf.png';
import { StyleSheet, View, Image } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import FontTypes from '../../enumsCategories/FontTypes';

export default function CountdownCard() {
    const timeLeft = useCountdown();

    return (
        <View style={styles.countdownWrapper}>
            <View style={styles.DetailsBackground}>
                <AppText style={styles.DetailBackground}>2026</AppText>
            </View>
            <View style={styles.content}>
                <View style={styles.headerLogos}>
                    <Image source={logoFifa} style={styles.logoFifa} />
                    <View style={styles.divider} />
                    <Image source={logoCbf} style={styles.logoCbf} />
                </View>

                <AppText style={styles.titleText}>CONTAGEM REGRESSIVA PARA A GRANDE FINAL</AppText>

                <View style={styles.countdownGrid}>
                    {Object.entries(timeLeft).map(([label, value]) => (
                        <View key={label} style={styles.timeBlock}>
                            <AppText style={styles.value}>{value}</AppText>
                            <AppText style={styles.label}>{label}</AppText>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    countdownWrapper: {
        backgroundColor: ColorTypes.LIGHTBLUE,
        zIndex: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    bgDetails: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 1,
        pointerEvents: 'none',
        zIndex: 1,
    },

    DetailsBackground: {
        position: 'absolute',
        overflow: 'hidden',
        width: '100%',
        height: 250,
        alignItems: 'center',
        zIndex: 1,
    },

    DetailBackground: {
        fontFamily: FontTypes.COPA,
        color: ColorTypes.GRAY,
        opacity: 0.1,
        fontSize: 160,
        letterSpacing: 4,
        top: -30,
    },

    content: {
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },

    headerLogos: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginBottom: 25,
    },

    logoFifa: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
    },

    logoCbf: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
    },

    divider: {
        width: 1,
        height: 50,
        backgroundColor: ColorTypes.GRAY,
        opacity: 0.3,
    },

    titleText: {
        fontSize: 17.6,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 50,
        lineHeight: 1.2,
        color: ColorTypes.WHITE,
    },

    countdownGrid: {
        flexDirection: 'row',
        gap: 15,
        boxSizing: 'border-box',
    },

    timeBlock: {
        alignItems: 'center',
        gap: 20,
        width: 60,
    },

    value: {
        fontSize: 32,
        fontWeight: 900,
        lineHeight: 1,
        color: ColorTypes.WHITE,
        textAlign: 'center',
        width: '100%',
    },

    label: {
        fontSize: 12.8,
        fontWeight: 400,
        textTransform: 'capitalize',
        opacity: 0.7,
        color: ColorTypes.WHITE,
    },
});