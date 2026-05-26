import { ScrollView, View, Image, Pressable, StyleSheet } from "react-native";
import ColorTypes from "../../enumsCategories/ColorTypes";
import AppText from "../../components/common/AppText";
import { truncateString } from './utils/ProductCardUtil';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function ProductCard({ produto, onAumentar, onDiminuir, onRemover }) {
    return (
        <View style={styles.card}>
            <Image source={produto.img} style={styles.img} />

            <View style={styles.info}>
                <AppText style={styles.name} numberOfLines={1}>{truncateString(produto.nome, 22)}</AppText>
                <AppText style={styles.unitPrice}>R$ {produto.preco.toFixed(2)}</AppText>

                <View style={styles.qtyRow}>
                    <Pressable style={styles.btnMinus} onPress={() => onDiminuir(produto.id)}><AppText style={styles.btnRemoveText}>-</AppText></Pressable>
                    <AppText style={styles.qtyVal}>{produto.amount}</AppText>
                    <Pressable style={styles.btnPlus} onPress={() => onAumentar(produto.id)}><AppText style={styles.btnRemoveText}>+</AppText></Pressable>
                </View>
            </View>

            <View style={styles.right}>
                <Pressable style={styles.btnRemove} onPress={() => onRemover(produto.id)}>
                    <FontAwesome5 name="trash" size={14} color={ColorTypes.WHITE} />
                </Pressable>
                <AppText style={styles.total}>
                    R$ {(produto.amount * produto.preco).toFixed(2)}
                </AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        backgroundColor: ColorTypes.BACKGROUNDWHITE,
        borderWidth: 0.5,
        borderColor: ColorTypes.GRAY,
        borderRadius: 10,
        padding: 12,
    },

    img: {
        width: 64,
        height: 64,
        borderRadius: 6,
        backgroundColor: ColorTypes.GRAY,
        flexShrink: 0,
    },

    info: {
        flex: 1,
        minWidth: 0,
        gap: 3,
    },

    name: {
        color: ColorTypes.DARK,
        fontSize: 14,
        fontWeight: "500",
    },

    unitPrice: {
        color: ColorTypes.GRAYTEXT,
        opacity: 0.8,
        fontSize: 12,
        marginBottom: 8,
    },

    qtyRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    btnMinus: {
        width: 28,
        height: 28,
        borderRadius: 5,
        backgroundColor: ColorTypes.GRAY,
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },

    btnPlus: {
        width: 28,
        height: 28,
        borderRadius: 5,
        backgroundColor: ColorTypes.BLUE,
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },

    btnText: {
        color: ColorTypes.WHITE,
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 18,
    },

    qtyVal: {
        color: ColorTypes.DARK,
        fontSize: 14,
        fontWeight: "600",
        minWidth: 18,
        textAlign: "center",
    },

    right: {
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 10,
        flexShrink: 0,
    },

    total: {
        color: ColorTypes.TEXT,
        fontSize: 15,
        fontWeight: "700",
    },

    btnRemove: {
        width: 30,
        height: 30,
        backgroundColor: ColorTypes.BLUE,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },

    btnRemoveText: {
        color: ColorTypes.WHITE,
        fontSize: 16,
        fontWeight: 600,
    },
});