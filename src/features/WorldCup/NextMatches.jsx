import { useState } from "react";
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import AntDesign from '@expo/vector-icons/AntDesign';

const CARD_WIDTH = 220;
const SWIPE_THRESHOLD = 50;

export default function NextMatches({
    groups,
    title,
    subtitle,
    description,
    pendente = false
}) {
    const [currentDateIndex, setCurrentDateIndex] = useState(0);

    const allMatches = groups.flatMap((g) => g.jogos || []);

    if (allMatches.length === 0) {
        return <AppText style={styles.empty}>Sem jogos disponíveis</AppText>;
    }

    const sortedMatches = [...allMatches].sort((a, b) => {
        const [dA, mA] = a.data.split("/");
        const [dB, mB] = b.data.split("/");
        return new Date(2026, mA - 1, dA) - new Date(2026, mB - 1, dB);
    });

    const matchesByDate = sortedMatches.reduce((acc, jogo) => {
        if (!acc[jogo.data]) acc[jogo.data] = [];
        acc[jogo.data].push(jogo);
        return acc;
    }, {});

    const datas = Object.keys(matchesByDate);
    const dataAtual = datas[currentDateIndex];
    const jogosDoDia = matchesByDate[dataAtual];

    const goTo = (index) => {
        if (index < 0 || index > datas.length - 1) return;
        setCurrentDateIndex(index);
    };

    const swipeGesture = Gesture.Pan()
        .runOnJS(true)
        .onEnd((event) => {
            if (event.translationX < -SWIPE_THRESHOLD) goTo(currentDateIndex + 1);
            if (event.translationX > SWIPE_THRESHOLD) goTo(currentDateIndex - 1);
        });

    const MatchCard = ({ jogo }) => (
        <View style={styles.matchCard}>
            <View style={styles.teamSide}>
                {jogo.flagA ? (
                    <Image
                        source={jogo.flagA}
                        style={[styles.flag, pendente && styles.flagPendente]}
                    />
                ) : (
                    <View
                        style={[styles.flagPlaceholder, pendente && styles.flagPendente]} />
                )}
                <AppText
                    style={[styles.teamName, pendente && styles.teamNamePendente]}>
                    {pendente ? "A definir" : jogo.timeA}
                </AppText>
            </View>

            <View style={styles.matchInfo}>
                <AppText style={styles.time}>{jogo.hora} em Brasília</AppText>
                {jogo.placarA !== null ? (
                    <AppText style={styles.score}>
                        {jogo.placarA} x {jogo.placarB}
                    </AppText>
                ) : (
                    <AppText style={styles.vs}>x</AppText>
                )}
                <AppText style={styles.stadium}>{jogo.estadio}</AppText>
                <AppText style={styles.location}>{jogo.local}</AppText>
            </View>

            <View style={[styles.teamSide, styles.teamRight]}>
                {jogo.flagB ? (
                    <Image
                        source={jogo.flagB}
                        style={[styles.flag, pendente && styles.flagPendente]}
                    />
                ) : (
                    <View
                        style={[styles.flagPlaceholder, pendente && styles.flagPendente]} />
                )}
                <AppText
                    style={[styles.teamName, pendente && styles.teamNamePendente]}>
                    {pendente ? "A definir" : jogo.timeB}
                </AppText>
            </View>
        </View>
    );

    return (
        <GestureHandlerRootView>
            <View style={styles.container}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
                <AppText style={styles.description}>{description}</AppText>

                <View style={styles.carouselWrapper}>
                    <Pressable
                        onPress={() => goTo(currentDateIndex - 1)}
                        disabled={currentDateIndex === 0}
                        style={[styles.navBtn, styles.prev]}
                    >
                        <AntDesign name="caret-left" size={24} color="black" />
                    </Pressable>

                    <GestureDetector gesture={swipeGesture}>
                        <View style={styles.dayCard}>
                            <AppText style={styles.date}>{dataAtual}</AppText>
                            {jogosDoDia.map((jogo) => (
                                <MatchCard jogo={jogo} />
                            ))}
                        </View>
                    </GestureDetector>
                    <Pressable
                        onPress={() => goTo(currentDateIndex + 1)}
                        disabled={currentDateIndex === datas.length - 1}
                        style={[styles.navBtn, styles.next]}
                    >
                        <AntDesign name="caret-right" size={24} color="black" />
                    </Pressable>
                </View>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginTop: 20,
        width: '100%',
    },

    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 1,
        marginBottom: 16,
        color: ColorTypes.DARK,
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 13,
        color: ColorTypes.GRAYTEXT,
        marginTop: -10,
        marginBottom: 8,
    },

    description: {
        textAlign: 'left',
        fontSize: 13,
        color: ColorTypes.GRAYTEXT,
        maxWidth: 480,
        alignSelf: 'center',
        marginBottom: 24,
        lineHeight: 13 * 1.6,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderLeftWidth: 3,
        borderLeftColor: ColorTypes.BLUE,
        backgroundColor: 'rgba(59, 91, 219, 0.04)',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },

    dateTabs: {
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 20,
    },

    dateTab: {
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: 'transparent',
        fontSize: 12,
        fontWeight: 600,
    },

    dateTabActive: {
        backgroundColor: ColorTypes.BLUE,
        color: ColorTypes.WHITE,
        borderColor: ColorTypes.BLUE,
    },

    carouselWrapper: {
        position: 'relative',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    date: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 700,
        color: ColorTypes.DARK,
        marginBottom: 16,
    },

    dayCard: {
        width: '100%',
        maxWidth: 560,
        paddingHorizontal: 48,
        alignSelf: 'center',
    },

    navBtn: {
        position: 'absolute',
        top: 40,
        color: ColorTypes.WHITE,
        width: 34,
        height: 34,
        borderRadius: 17,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        color: ColorTypes.DARK,
        marginTop: 40,
    },

    navBtnDisabled: {
        opacity: 0.25,
    },

    prev: {
        left: 0,
    },

    next: {
        right: 0,
    },

    matchCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.06)',
    },

    matchCardLast: {
        borderBottomWidth: 0,
    },

    teamSide: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
    },

    flag: {
        width: 40,
        height: 40,
        borderRadius: 4,
    },

    teamName: {
        fontSize: 11,
        fontWeight: 600,
        color: ColorTypes.DARK,
        textAlign: 'center',
        maxWidth: 80,
    },

    matchInfo: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
    },

    time: {
        fontSize: 10,
        color: ColorTypes.GRAYTEXT,
    },

    score: {
        fontSize: 18,
        fontWeight: 700,
        color: ColorTypes.DARK,
    },

    vs: {
        fontSize: 16,
        fontWeight: 600,
        color: ColorTypes.GRAY,
    },

    stadium: {
        fontSize: 10,
        color: ColorTypes.GRAYTEXT,
        marginTop: 2,
    },

    location: {
        fontSize: 10,
        color: ColorTypes.GRAY,
    },

    empty: {
        textAlign: 'center',
        color: ColorTypes.GRAY,
        paddingVertical: 40,
    },
});