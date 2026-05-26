import { View, StyleSheet } from "react-native";
import ColorTypes from '../../enumsCategories/ColorTypes'

export default function ProgressBar({ current, total }) {

    const progress = (current / total) * 100;

    return (
        <View style={styles.progressContainer}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    progressContainer: {
    width: "65%",
    maxWidth: 400,
    height: 5,
    backgroundColor: ColorTypes.GRAY, // var(--border-color)
    overflow: "hidden",
    marginBottom: 30,
    borderRadius: 50,
},

 progressFill: {
    height: '100%',
    backgroundColor: ColorTypes.BLUE,
    borderRadius: 50,
},
});