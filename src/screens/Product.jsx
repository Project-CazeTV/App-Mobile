import { useState } from "react";
import { StyleSheet, View, Image, Pressable } from 'react-native';
import AppText from '../components/common/AppText';
import ColorTypes from '../enumsCategories/ColorTypes';
import HeaderStackReturnPage from '../routes/HeaderStackReturnPage';

export default function Product({ route }) {
    const { product } = route.params
    const [amount, setAmount] = useState(1);

    const nome = product.nome ?? product.name;
    const preco = product.preco ?? product.price;

    function aumentar() { setAmount(prev => prev + 1); }
    function diminuir() { setAmount(prev => (prev > 1 ? prev - 1 : 1)); }

    return (
        <>
            <HeaderStackReturnPage pageTitle={'Produto'} />
            <View style={styles.page}>
                <View style={styles.content}>
                    <View style={styles.imgWrapper}>
                        <Image source={product.img} style={styles.img} />
                    </View>

                    <View style={styles.info}>
                        <AppText style={styles.name}>{nome}</AppText>

                        <View style={styles.priceRow}>
                            <AppText style={styles.price}>R$ {preco.toFixed(2)}</AppText>
                            <AppText style={styles.pricePer}>/ unidade</AppText>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.qtySection}>
                            <AppText style={styles.qtyLabel}>Quantidade</AppText>
                            <View style={styles.qtyRow}>
                                <Pressable style={styles.btnMinus} onPress={diminuir}>−</Pressable>
                                <AppText style={styles.qtyVal}>{amount}</AppText>
                                <Pressable style={styles.btnPlus} onPress={aumentar}>+</Pressable>
                            </View>
                        </View>

                        <View style={styles.totalRow}>
                            <AppText style={styles.totalLabel}>Total</AppText>
                            <AppText style={styles.totalValue}>
                                R$ {(preco * amount).toFixed(2)}
                            </AppText>
                        </View>

                        <Pressable
                            style={styles.btnCart}
                            // onPress={addToCart}
                        >
                            <AppText style={styles.btnText}>Adicionar ao carrinho</AppText>
                        </Pressable>
                    </View>
                    <View style={styles.dividerFull} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: ColorTypes.WHITE,
    },

    topBar: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: ColorTypes.WHITE,
        zIndex: 10,
    },

    backBtn: {
        width: 36,
        height: 36,
        backgroundColor: "#f5f5f5",
        borderWidth: 1,
        borderColor: "#dcdcdc",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    backBtnPressed: {
        opacity: 0.7,
    },

    topBarTitle: {
        color: ColorTypes.DARK,
        fontSize: 16,
        fontWeight: "500",
    },

    content: {
        flex: 1,
        paddingBottom: 48,
    },

    imgWrapper: {
        width: "100%",
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 30,
    },

    img: {
        width: "100%",
        maxWidth: 300,
        height: 260,
        resizeMode: "contain",
    },

    info: {
        paddingTop: 20,
        paddingHorizontal: 16,
        flexDirection: "column",
    },

    name: {
        color: ColorTypes.DARK,
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 6,
        lineHeight: 26,
    },

    priceRow: {
        flexDirection: "row",
        alignItems: "baseline",
        gap: 6,
        marginBottom: 20,
    },

    price: {
        color: ColorTypes.DARK,
        fontSize: 22,
        fontWeight: "700",
    },

    pricePer: {
        color: "#777",
        fontSize: 13,
    },

    divider: {
        height: 1,
        backgroundColor: "#dcdcdc",
        marginBottom: 20,
    },

    qtySection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
    },

    qtyLabel: {
        color: "#777",
        fontSize: 13,
        fontWeight: "500",
    },

    qtyRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fafafa",
        borderWidth: 1,
        borderColor: "#dcdcdc",
        borderRadius: 12,
        paddingVertical: 6,
        paddingHorizontal: 10,
        gap: 12,
    },

    btnMinus: {
        width: 30,
        height: 30,
        borderRadius: 8,
        backgroundColor: "#222",
        alignItems: "center",
        justifyContent: "center",
    },

    btnPlus: {
        width: 30,
        height: 30,
        borderRadius: 8,
        backgroundColor: "#0047d6",
        alignItems: "center",
        justifyContent: "center",
    },

    btnPressed: {
        transform: [{ scale: 0.92 }],
        opacity: 0.85,
    },

    btnText: {
        color: ColorTypes.WHITE,
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 20,
    },

    qtyVal: {
        color: ColorTypes.DARK,
        fontSize: 16,
        fontWeight: "600",
        minWidth: 24,
        textAlign: "center",
    },

    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fafafa",
        borderWidth: 1,
        borderColor: "#dcdcdc",
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginBottom: 16,
    },

    totalLabel: {
        color: "#777",
        fontSize: 14,
    },

    totalValue: {
        color: ColorTypes.DARK,
        fontSize: 18,
        fontWeight: "700",
    },

    btnCart: {
        width: "100%",
        padding: 16,
        backgroundColor: "#0047d6",
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
    },

    btnCartPressed: {
        opacity: 0.85,
        transform: [{ scale: 0.98 }],
    },

    btnCartAdded: {
        backgroundColor: "#1a6e2e",
    },

    btnCartText: {
        color: ColorTypes.WHITE,
        fontSize: 16,
        fontWeight: "700",
    },

    dividerFull: {
        height: 1,
        backgroundColor: "#dcdcdc",
        marginTop: 28,
    },
});