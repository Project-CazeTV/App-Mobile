import { StyleSheet, View, Pressable } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState, useEffect } from "react";
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import CardPartida from "./CardPartida";
import agruparJogosPorData from "../Championships/utils/agruparJogosPorData";
import ordenarJogosPorData from "../Championships/utils/ordenarJogosPorData";

const CARD_WIDTH = 220;
const SWIPE_THRESHOLD = 50;

export default function ListaDeJogos({ jogos, pendente, }) {
    const [indiceDateAtual, setIndiceDateAtual] = useState(0);

    useEffect(() => { setIndiceDateAtual(0); }, [jogos]);

    if (!jogos || jogos.length === 0) {
        return <AppText style={styles.vazio}>Sem jogos disponíveis</AppText>;
    }

    const jogosPorData = agruparJogosPorData(jogos);
    const datas = Object.keys(jogosPorData);

    if (datas.length === 0) {
        return (
            <AppText style={styles.vazio}>
                Sem jogos disponíveis
            </AppText>
        );
    }

    const indiceSeguro = Math.min(indiceDateAtual, datas.length - 1);
    const dataAtual = datas[indiceSeguro];
    const jogosDeHoje = jogosPorData[dataAtual] || [];

    const goTo = (index) => {
        if (index < 0 || index > datas.length - 1) return;
        setIndiceDateAtual(index);
    };

    const swipeGesture = Gesture.Pan()
        .runOnJS(true)
        .onEnd((event) => {
            if (event.translationX < -SWIPE_THRESHOLD) goTo(indiceDateAtual + 1);
            if (event.translationX > SWIPE_THRESHOLD) goTo(indiceDateAtual - 1);
        });

    return (
        <GestureHandlerRootView>
            <View style={[styles.carouselMobile, styles.apenasMobile]}>

                <Pressable
                    onPress={() => goTo(indiceDateAtual - 1)}
                    disabled={indiceDateAtual === 0}
                    style={[styles.botaoNavegar, styles.botaoAnterior]}
                >
                    <AntDesign name="caret-left" size={24} color="black" />
                </Pressable>

                <GestureDetector gesture={swipeGesture}>
                    <View style={styles.diaCard}>
                        <AppText style={styles.dataLabel}>
                            {dataAtual}
                        </AppText>

                        {jogosDeHoje.map((jogo, indice) => (
                            <CardPartida
                                key={indice}
                                jogo={jogo}
                                pendente={pendente}
                            />
                        ))}
                    </View>
                </GestureDetector>

                <Pressable
                    onPress={() => goTo(indiceDateAtual + 1)}
                    disabled={indiceDateAtual === datas.length - 1}
                    style={[styles.botaoNavegar, styles.botaoProximo]}
                >
                    <AntDesign name="caret-right" size={24} color="black" />
                </Pressable>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    tabsDatas: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        justifyContent: 'center',
        marginBottom: 20,
    },

    tabData: {
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: 'transparent',
    },

    tabDataText: {
        fontSize: 12,
        fontWeight: 600,
        color: ColorTypes.DARK,
    },

    tabDataAtiva: {
        backgroundColor: ColorTypes.BLUE,
        borderColor: ColorTypes.BLUE,
    },

    tabDataAtivaText: {
        color: '#fff',
    },

    carouselMobile: {
        position: 'relative',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    dataLabel: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 700,
        color: ColorTypes.DARK,
        marginBottom: 16,
    },

    diaCard: {
        width: '100%',
        maxWidth: 560,
        paddingHorizontal: 48,
        alignSelf: 'center',
    },

    botaoNavegar: {
        position: 'absolute',
        top: 40,
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: ColorTypes.BACKGROUNDWHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },

    botaoAnterior: {
        left: 0,
    },

    botaoProximo: {
        right: 0,
    },
});