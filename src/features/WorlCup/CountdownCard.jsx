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
                <AppText style={styles.DetailBackground2}>2026</AppText>
            </View>
            <View style={styles.content}>
                <View style={styles.headerLogos}>
                    <Image source={logoFifa} style={styles.logoFifa} />
                    <View style={styles.divider} />
                    <Image source={logoCbf} style={styles.logoCbf} />
                </View>

                <AppText style={styles.titleText}>COPA DO MUNDO É NA CAZÉ TV.</AppText>

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
        zIndex: 2,
    },

    DetailBackground: {
        position: 'absolute',
        fontFamily: FontTypes.COPA,
        color: ColorTypes.GRAY,
        opacity: 0.1,
        zIndex: 1,
        fontSize: 180,
        top: -50,
        left: 20,
    },

    DetailBackground2: {
        position: 'absolute',
        fontFamily: FontTypes.COPA,
        color: ColorTypes.GRAY,
        opacity: 0.1,
        fontSize: 180,
        zIndex: 1,
        top: 50,
        left: -190,
        zIndex: 1,
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
        gap: '20px',
        marginBottom: '25px',
    },

    logoFifa: {
        height: '60px',
        width: '60px',
        resizeMode: 'contain',
    },

    logoCbf: {
        height: '60px',
        width: '60px',
        resizeMode: 'contain',
    },

    divider: {
        width: '1px',
        height: '50px',
        backgroundColor: ColorTypes.GRAY,
        opacity: 0.3,
    },

    titleText: {
        fontSize: '1.1rem',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        marginBottom: '50px',
        lineHeight: '1.2',
        color: ColorTypes.WHITE,
    },

    countdownGrid: {
        flexDirection: 'row',
        gap: '15px',
        boxSizing: 'border-box',
    },

    timeBlock: {
        alignItems: 'center',
        gap: 20,
    },

    value: {
        fontSize: '2rem',
        fontWeight: 900,
        lineHeight: 1,
        color: ColorTypes.WHITE,
    },

    label: {
        fontSize: '0.8rem',
        fontWeight: 400,
        textTransform: 'capitalize',
        opacity: 0.7,
        color: ColorTypes.WHITE,
    },
});