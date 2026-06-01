import { StyleSheet, Text, View } from 'react-native';
import AppText from '../../components/common/AppText';
import ImagemHero from '../../assets/images/banners/caze-tv-historia.jpg'
import ColorTypes from '../../enumsCategories/ColorTypes';
import SectionTitle from '../../components/common/SectionTitle';
import { capitulos } from '../../mocks/history';

export default function HistoryContent() {
const cores = [ColorTypes.ORANGE, ColorTypes.RED, ColorTypes.GREEN, ColorTypes.BLUE, ColorTypes.YELLOW];

    return (
        <View style={styles.section}>
            {capitulos.map((cap, i) => (
                <View key={cap.numero} style={styles.capitulo}>
                    <SectionTitle
                        title={cap.titulo}
                        color={cores[i % cores.length]}
                        number={cap.numero}
                    />

                    <View style={styles.conteudo}>
                        {cap.texto.trim().split('\n\n').map((paragrafo, pIdx) => (
                            <AppText key={pIdx} style={styles.paragrafo}>
                                {paragrafo.trim()}
                            </AppText>
                        ))}
                    </View>
                </View>
            ))}</View>
    );
}

const styles = StyleSheet.create({
    section: {
        maxWidth: 780,
        margin: 'auto',
        paddingBottom: 80,
        paddingTop: 48,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
    },

    capitulo: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        paddingBottom: 80,
    },

    conteudo: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },

    paragrafo: {
        fontSize: 16,
        lineHeight: 28,
        color: ColorTypes.DARK,
        margin: 0,
        fontWeight: 400,
        opacity: 0.7,
    },
});