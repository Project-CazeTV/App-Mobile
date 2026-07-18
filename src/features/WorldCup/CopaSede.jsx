import { StyleSheet, View, Image } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import FontTypes from '../../enumsCategories/FontTypes';

export default function CopaSede(props) {
    return (
        <View style={styles.section}>
            <View style={styles.hero}>
                <View style={styles.heroContent}>
                    <AppText style={styles.heroSub}>FIFA WORLD CUP</AppText>
                    <Image style={styles.tacaCopa} source={{ uri: 'https://cdn.awsli.com.br/2500x2500/2839/2839253/produto/400051248/imagem_2026-04-09_094847267-796gcpomx8.png'}}/>
                    <AppText style={styles.heroAno}>2026</AppText>
                    <AppText style={styles.heroDesc}>3 países · 48 seleções · 104 jogos</AppText>
                </View>
            </View>
            <View style={styles.sedeGrid}>
                {props.sedes.map((s) => (
                    <View key={s.pais} style={styles.sedeCard}>
                        <View style={styles.fotoWrapper}>
                            <Image
                                source={typeof s.foto === 'string' ? { uri: s.foto } : s.foto}
                                style={styles.fotoEstadio}
                            />
                            <View style={styles.fotoOverlay} />
                            <AppText style={styles.estadioLabel}>{s.estadio}</AppText>
                        </View>

                        <View style={styles.sedeInfo}>
                            <Image source={typeof s.bandeira === 'string' ? { uri: s.bandeira } : s.bandeira} style={styles.bandeira} />
                            <View>
                                <AppText style={styles.sedePais}>{s.pais}</AppText>
                                <AppText style={styles.sedeJogos}>{s.jogos} jogos</AppText>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    hero: {
        paddingTop: 40,
        paddingBottom: 40,
    },

    heroContent: {
        zIndex: 2,
        alignItems: 'center',
        gap: 4,
    },

    heroSub: {
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: 3,
        color: ColorTypes.DARK,
    },

    heroAno: {
        fontSize: 100,
        fontFamily: FontTypes.COPA,
        fontWeight: 900,
        color: ColorTypes.YELLOW,
    },

    heroDesc: {
        fontSize: 11,
        fontWeight: 500,
        marginTop: 24,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },

    tacaCopa: {
        position: 'absolute',
        width: 30,
        height: 100,
        resizeMode: 'cover',
        marginLeft: -85,
        marginTop: 35,
        pointerEvents: 'none',
        zIndex: 2,
    },

    sedeGrid: {
        width: '100%',
    },

    sedeCard: {
        flexDirection: 'column',
        overflow: 'hidden',
    },


    fotoWrapper: {
        position: 'relative',
        width: '100%',
        aspectRatio: 16 / 10,
        overflow: 'hidden',
    },

    fotoEstadio: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    fotoOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    estadioLabel: {
        position: 'absolute',
        bottom: 10,
        left: 14,
        fontSize: 11,
        fontWeight: 600,
        color: 'rgba(255,255,255,0.85)',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },

    sedeInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderTopWidth: 5,
        borderTopColor: '#6aff00',
    },

    bandeira: {
        width: 32,
        height: 22,
        resizeMode: 'cover',
    },

    sedePais: {
        fontSize: 13,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },

    sedeJogos: {
        fontSize: 11,
        color: '#888',
        marginTop: 2,
        fontWeight: 500,
    },
});