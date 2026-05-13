import { useState } from "react";
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import AntDesign from '@expo/vector-icons/AntDesign';

const CARD_WIDTH = 220;
const SWIPE_THRESHOLD = 50;

export default function CardGesturePass({list, CardComponent}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goTo = (index) => {
        if (index < 0 || index > list.length - 1) return;
        setCurrentIndex(index);
    };

    const swipeGesture = Gesture.Pan()
        .runOnJS(true)
        .onEnd((event) => {
            if (event.translationX < -SWIPE_THRESHOLD) goTo(currentIndex + 1);
            if (event.translationX > SWIPE_THRESHOLD) goTo(currentIndex - 1);
        });

    return (
        <GestureHandlerRootView>
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
                            <CardComponent object={list[currentIndex]}/>
                        </View>
                    </GestureDetector>

                    <Pressable
                        onPress={() => goTo(currentIndex + 1)}
                        disabled={currentIndex === list.length - 1}
                        style={[styles.navBtn, styles.next]}
                    >
                        <AntDesign name="caret-right" size={24} color="black" />
                    </Pressable>
                </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    carouselWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 30,
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