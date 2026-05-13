import { useState } from "react";
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import AntDesign from '@expo/vector-icons/AntDesign';

const CARD_WIDTH = 220;
const SWIPE_THRESHOLD = 50;

export default function FeaturedPlayers({ players }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goTo = (index) => {
        if (index < 0 || index > players.length - 1) return;
        setCurrentIndex(index);
    };

    const swipeGesture = Gesture.Pan()
        .runOnJS(true)
        .onEnd((event) => {
            if (event.translationX < -SWIPE_THRESHOLD) goTo(currentIndex + 1);
            if (event.translationX > SWIPE_THRESHOLD) goTo(currentIndex - 1);
        });

    const PlayerCard = ({ player }) => (
        <View style={styles.playerCard}>
            <Image
                source={player.imagem}
                style={styles.playerPhoto}
            />
            <LinearGradient style={styles.playerOverlay}
            colors={[
                'transparent',
                'rgba(0,0,0,0.75)',
                'rgba(0,0,0,0.85)',
            ]}>
                <AppText style={styles.playerPosition}>{player.posicao}</AppText>
                <AppText style={styles.playerName}>{player.nome}</AppText>
                <AppText style={styles.playerCountry}>{player.pais} · {player.clube}</AppText>
            </LinearGradient>
        </View>
    );

    return (
        <GestureHandlerRootView>
            <View style={styles.container}>
                <AppText style={styles.title}>JOGADORES DE DESTAQUE</AppText>
                <AppText style={styles.subtitle}>Os craques que vão fazer história na Copa do Mundo 2026</AppText>

                <View style={styles.carouselWrapper}>
                    <Pressable
                        onPress={() => goTo(currentIndex - 1)}
                        disabled={currentIndex === 0}
                        style={[styles.navBtn, styles.prev]}
                    >
                        <AntDesign name="caret-left" size={24} color="black" />
                    </Pressable>

                    <GestureDetector gesture={swipeGesture}>
                        <View style={styles.carouselCard}>
                            <PlayerCard player={players[currentIndex]} />
                        </View>
                    </GestureDetector>

                    <Pressable
                        onPress={() => goTo(currentIndex + 1)}
                        disabled={currentIndex === players.length - 1}
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
        fontWeight: '700',
        letterSpacing: 1.5,
        marginBottom: 6,
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 13,
        color: ColorTypes.GRAYTEXT,
        marginBottom: 24,
    },

    playerCard: {
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#eee',
        aspectRatio: 3 / 4,
        width: 220,
        height: 293,
    },

    playerPhoto: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    playerOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 14,
        paddingTop: 32,
        paddingBottom: 14,
        gap: 2,
        fontSize: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: {
            width: 0,
            height: 2,
        },
        textShadowRadius: 6,
    },

    playerPosition: {
        fontSize: 10,
        fontWeight: '600',
        color: ColorTypes.GRAY,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },

    playerName: {
        fontSize: 15,
        fontWeight: '800',
        color: ColorTypes.WHITE,
        lineHeight: 18,
    },

    playerCountry: {
        fontSize: 11,
        color: ColorTypes.GRAY,
    },

    carouselWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
    },

    carouselCard: {
        width: 220,
    },

    navBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorTypes.WHITE,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 4,
    },

    // navBtn:disabled: {
    //     opacity: 0.25,
    // },

    prev: {
        position: 'absolute',
        left: 0,
        top: '40%',
    },

    next: {
        position: 'absolute',
        right: 0,
        top: '40%',
    },
});