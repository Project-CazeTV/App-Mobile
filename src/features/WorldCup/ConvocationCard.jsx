import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import { VideoView, useVideoPlayer } from 'expo-video';

export default function ConvocationCard({ title, subtitle, flex = true }) {
    const player = useVideoPlayer(
        require("../../assets/videos/convocacao.mp4"),
        (player) => {
            player.loop = false;
            player.play();
        });

    return (
        <View>
            <View style={[styles.header, { flexDirection: flex ? 'row' : 'column' }]}>
                {title && <AppText style={styles.sectionTitle}>{title}</AppText>}
                <View style={styles.line} />
                {subtitle && <AppText style={styles.sectionSubtitle}>{subtitle}</AppText>}
            </View>
            <VideoView
                style={styles.video}
                player={player}
                allowsFullscreen
                allowsPictureInPicture
                nativeControls
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        marginBottom: 20,
    },

    sectionTitle: {
        fontSize: 30,
        fontWeight: "800",
        color: "#111",
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: "rgba(0,0,0,0.15)",
    },

    sectionSubtitle: {
        fontSize: 15,
        width: "80%",
        position: "relative",
        bottom: 20,
        color: "#666",
        textAlign: "center",
        alignSelf: "center",
    },

    video: {
        width: "80%",
        borderRadius: 20,
        alignSelf: "center",
        borderWidth: 3,
        borderColor: ColorTypes.BLUE,
        overflow: "hidden",
    },
});