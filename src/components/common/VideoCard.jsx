import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import AppText from '../common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import { useState } from 'react';
//import { VideoView, useVideoPlayer } from 'expo-video';
import { WebView } from "react-native-webview";

export default function VideoCard({ videoId, title, category }) {
    // const player = useVideoPlayer(require(`https://www.youtube.com/embed/${videoId}?playsinline=1&autoplay=0`));
    const [playing, setPlaying] = useState(false);
    return (
        <View style={styles.videoCard}>
            <View style={styles.thumbnail}>
                {playing ? (
                    <WebView
                        style={styles.video}
                        javaScriptEnabled
                        domStorageEnabled
                        source={{
                            uri: `https://www.youtube.com/embed/${videoId}?playsinline=1&autoplay=1`,
                        }}
                    />
                ) : (
                    <TouchableOpacity style={styles.thumbnail} onPress={() => setPlaying(true)}>
                        <Image
                            source={{ uri: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` }}
                            style={styles.thumbnailImg}
                        />
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.info}>
                <AppText style={styles.category}>{category}</AppText>
                <AppText style={styles.title}>{title}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    videoCard: {
        borderRadius: 15,
        overflow: "hidden",
    },

    thumbnail: {
        position: "relative",
        width: "100%",
        aspectRatio: 16 / 9,
        overflow: "hidden",
        backgroundColor: "#000",
        borderRadius: 15,
    },

    thumbnailImg: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
    },

    video: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover'
    },


    info: {
        paddingTop: 12,
        paddingHorizontal: 4,
        paddingBottom: 8,
        gap: 6,
    },

    category: {
        fontSize: 11,
        fontWeight: 700,
        color: "#f5a700",
        letterSpacing: 1,
        textTransform: "uppercase",
    },

    title: {
        fontSize: 14,
        fontWeight: 600,
        color: ColorTypes.DARK,
        lineHeight: 20,
    },
});