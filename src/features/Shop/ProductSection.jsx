import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppText from "../../components/common/AppText";
import ColorTypes from '../../enumsCategories/ColorTypes';
import CartProductCard from "./CartProductCard";

export default function ProductSection({ produtos, onAumentar, onDiminuir, onRemover }) {
    if (produtos.length === 0) {
        return (
            <View style={styles.empty}>
                <AppText style={styles.emptyIcon}><Ionicons name="cart-outline" size={40} color="black" /></AppText>
                <AppText style={styles.emptyText}>Seu carrinho está vazio</AppText>
            </View>
        );
    }

    return (
        <View style={styles.section}>
            <AppText style={styles.sectionLabel}>Produtos</AppText>
            <ScrollView style={styles.list}
                contentContainerStyle={styles.listContent}>
                {produtos.map(produto => (
                    <CartProductCard
                        key={produto.id}
                        produto={produto}
                        onAumentar={onAumentar}
                        onDiminuir={onDiminuir}
                        onRemover={onRemover}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        width: "100%",
        flex: 1,
    },

    sectionLabel: {
        color: ColorTypes.GRAYTEXT,
        fontSize: 11,
        fontWeight: "bold",
        letterSpacing: 1.2,
        textTransform: "uppercase",
        paddingBottom: 10,
    },

    list: {
        flexGrow: 0,
    },

    listContent: {
        gap: 10,
        paddingBottom: 20,
    },

    empty: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 60,
        gap: 12,
        flex: 1,
    },

    emptyIcon: {
        opacity: 0.3,
    },

    emptyText: {
        color: ColorTypes.GRAYTEXT,
        fontSize: 15,
    },
});