import React, { useState, useRef, useCallback, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Animated, Pressable } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import Reanimated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS, Easing } from 'react-native-reanimated';

export default function HomeBanner({ news }) {
    const indexRef = useRef(0);
    const [index, setIndexState] = useState(0);

    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);
    const isAnimating = useRef(false);

    const opacity = useSharedValue(1);
    const translateY = useSharedValue(0);

    const setIndex = useCallback((newIndex) => {
        indexRef.current = newIndex;
        setIndexState(newIndex);
    }, []);

    const goTo = useCallback(
        (newIndex) => {
            if (isAnimating.current) return;
            isAnimating.current = true;

            opacity.value = withTiming(0, { duration: 220, easing: Easing.in(Easing.ease) });
            translateY.value = withTiming(-16, { duration: 220 });

            setTimeout(() => {
                setIndex(newIndex);

                translateY.value = 16;
                opacity.value = withTiming(1, { duration: 320, easing: Easing.out(Easing.ease) });
                translateY.value = withTiming(0, { duration: 320 });

                setTimeout(() => {
                    isAnimating.current = false;
                }, 320);
            }, 230);
        },
        [opacity, translateY, setIndex]
    );

    const nextNews = useCallback(() => {
        const next = (indexRef.current + 1) % news.length;
        goTo(next);
    }, [news.length, goTo]);

    const prevNews = useCallback(() => {
        const prev = (indexRef.current - 1 + news.length) % news.length;
        goTo(prev);
    }, [news.length, goTo]);

    useEffect(() => {
        if (!isPaused) {
            timerRef.current = setInterval(nextNews, 10000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPaused, nextNews]);

    const swipeGesture = Gesture.Pan()
        .activeOffsetX([-20, 20])
        .failOffsetY([-10, 10])
        .onEnd((e) => {
            if (e.translationX < -50) runOnJS(nextNews)();
            else if (e.translationX > 50) runOnJS(prevNews)();
        });

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
    }));

    const current = news[index];

    return (
        <GestureHandlerRootView style={styles.root}>
            <GestureDetector gesture={swipeGesture}>
                <Pressable
                    style={styles.container}
                    onPressIn={() => setIsPaused(true)}
                    onPressOut={() => setIsPaused(false)}
                >
                    <Reanimated.View style={[styles.newsWrapper, animatedStyle]}>
                        <View style={styles.imageSide}>
                            <View style={styles.imageMask}>
                                <Image
                                    source={{ uri: current.imagem }}
                                    style={styles.mainImg}
                                    resizeMode="cover"
                                />
                                <View style={[styles.fadeEdge, styles.fadeLeft]} pointerEvents="none" />
                                <View style={[styles.fadeEdge, styles.fadeRight]} pointerEvents="none" />
                            </View>
                        </View>

                        <View style={styles.textSide}>
                            <AppText style={styles.title}>{current.titulo}</AppText>
                            <AppText numberOfLines={4} style={styles.description}>{current.descricao}</AppText>
                            <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                                <AppText style={styles.btnText}>ver notícia completa</AppText>
                                <AppText style={styles.btnIcon}>›</AppText>
                            </TouchableOpacity>
                        </View>
                    </Reanimated.View>

                    <View style={styles.dots}>
                        {news.map((_, i) => (
                            <TouchableOpacity
                                key={i}
                                onPress={() => goTo(i)}
                                activeOpacity={0.7}
                                style={[styles.dot, i === index && styles.dotActive]}
                            />
                        ))}
                    </View>
                </Pressable>
            </GestureDetector>
        </GestureHandlerRootView>
    );
}


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        overflow: 'hidden',
        backgroundColor: ColorTypes.BACKGROUNDWHITE,
        position: 'relative',
        paddingVertical: 20,
    },

    imageSide: {
        width: '100%',
    },

    imageMask: {
        width: '100%',
        position: 'relative',
    },

    imageMaskGradientLeft: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '15%',
        zIndex: 2,
    },

    imageMaskGradientRight: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: '15%',
        zIndex: 2,
    },

    mainImg: {
        width: '100%',
        height: 350,
        resizeMode: "cover",
    },
    textSide: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '100%',
    },

    title: {
        fontSize: 26,
        fontWeight: '800',
        marginBottom: 15,
        color: ColorTypes.DARK,
        textAlign: 'center',
    },

    description: {
        fontSize: 20,
        lineHeight: 24,
        marginBottom: 25,
        color: ColorTypes.GRAYTEXT,
        textAlign: 'center',
    },

    btn: {
        backgroundColor: ColorTypes.BLUE,
        paddingVertical: 14,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    btnText: {
        color: ColorTypes.WHITE,
        fontWeight: '500',
        fontSize: 14,
    },

    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginTop: 15,
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: ColorTypes.GRAY,
        padding: 0,
    },

    dotActive: {
        backgroundColor: ColorTypes.BLUE,
        width: 24,
        borderRadius: 4,
    },

    progressBarContainer: {
        position: 'absolute',
        top: 10,
        left: 0,
        width: '100%',
        height: 3,
        backgroundColor: ColorTypes.GRAY,
    },

    progressBar: {
        height: '100%',
        backgroundColor: '#00D1FF',
    },
});