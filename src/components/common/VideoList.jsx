import VideoCard from './VideoCard';
import { StyleSheet, Text, View } from 'react-native';
import AppText from '../common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';

export default function VideoList({ videos, title }) {
    return (
        <View style={styles.section}>
            {title && (
                <View style={styles.header}>
                    <AppText style={styles.title}>{title}</AppText>
                    <View style={styles.line} />
                </View>
            )}
            <View style={styles.grid}>
                {videos.map((video, index) => (
                    <VideoCard
                        key={index}
                        videoId={video.id}
                        title={video.title}
                        category={video.category}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 25,
    width: "90%",
    alignSelf: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
    marginBottom: 28,
  },

  title: {
    fontSize: 20.6,
    fontWeight: "800",
    color: ColorTypes.DARK,
    letterSpacing: -0.3,
    flexShrink: 0,
    maxWidth: "70%",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  grid: {
    gap: 24,
  },
});