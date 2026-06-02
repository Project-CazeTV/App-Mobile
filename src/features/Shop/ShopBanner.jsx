import { useEffect, useState } from "react";
import { StyleSheet, View, Image } from 'react-native';
import AppText from "../../components/common/AppText";
import ColorTypes from '../../enumsCategories/ColorTypes';
import { Dimensions } from "react-native";
import Banner1 from "../../assets/images/banners/banner1.png";
import Banner2 from "../../assets/images/banners/banner2.png";
import Banner3 from "../../assets/images/banners/banner3.png";

export default function ShopHeader() {
    const banners = [Banner1, Banner2, Banner3];
    const [bannerAtual, setBannerAtual] = useState(0);
    const screenWidth = Dimensions.get("window").width;

    useEffect(() => {
        const interval = setInterval(() => {
            setBannerAtual((prev) =>
                prev === banners.length - 1 ? 0 : prev + 1
            );
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.header}>
            <View style={styles.carouselContainer}>
                <View
                    style={[styles.carouselTrack, {
                        transform: [{ translateX: -bannerAtual * 320 }],
                    }]}
                >
                    {banners.map((banner, index) => (
                        <Image
                            key={index}
                            source={banner}
                            style={styles.banner}
                        />
                    ))}
                </View>
            </View>
            <View style={styles.viewAdShop}>
                {banners.map((_, index) => (
                    <View
                    key={index}
                        style={
                            index === bannerAtual
                                ? styles.active
                                : styles.dot
                        }
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: 320,
        height: 160,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 30,
        alignItems: "center",
        gap: 20,
    },

    carouselContainer: {
        width: "100%",
        overflow: "hidden",
        borderRadius: 12,
    },

    carouselTrack: {
        flexDirection: "row",
    },

    banner: {
        width: 320,
        height: 160,
        aspectRatio: 16 / 9,
        resizeMode: "cover",
        flexShrink: 0,
    },

    viewAdShop: {
        flexDirection: "row",
        gap: 8,
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 100,
        backgroundColor: ColorTypes.GRAYTEXT,
    },

    active: {
        width: 24,
        height: 8,
        borderRadius: 100,
        backgroundColor: ColorTypes.BLUE,
    },
});