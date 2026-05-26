import { StyleSheet, ScrollView, View } from 'react-native';
import ColorTypes from '../../enumsCategories/ColorTypes';
import AppText from "../../components/common/AppText";

export default function TagCartLength({ cartLength }) {
    return (
        (cartLength > 0 && (
                    <View style={styles.container}>
            <View style={styles.triangle}>
                <AppText style={styles.tagText}>
                    {cartLength}
                </AppText>
            </View>
        </View>
        ))
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        right: 0,
    },

    triangle: {
        width: 0,
        height: 0,
        borderTopWidth: 60,
        borderRightWidth: 150,
        borderTopColor: "transparent",
        borderRightColor: ColorTypes.BLUE,
        justifyContent: "center",
        alignItems: "center",
    },

    tagText: {
        position: "absolute",
        top: -30,
        left: 100,
        color: ColorTypes.WHITE,
        fontSize: 16,
        fontWeight: "700",
    },
});