import { StyleSheet, View, Pressable } from 'react-native';
import Routes from '../../routes/.';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import { useNavigation } from "@react-navigation/native";
import { removerCart } from './utils/CartProducts';
import { userAuth } from '../../hooks/UserAuth';

export default function CartPriceSection({ products }) {
    const navigation = useNavigation()
    const { user, loading } = userAuth();
    
    const verificarLogin = () => {
        if (!user) {
            alert("Faça login para finalizar sua compra!");
            navigation.navigate(Routes.LOGIN);
        }
    }

    const finalizarCompra = () => {
        verificarLogin();
        alert("Obrigado por comprar na Cazé Store!");
        removerCart();
        navigation.navigate(Routes.DRAWER);
    }

    const FRETE = 15.90;
    const subtotal = products.reduce(
         (acc, p) => acc + p.preco * p.amount, 0
    );
    const total = subtotal + FRETE;

    return (
        <View style={styles.section}>
            <View style={styles.card}>
                <AppText style={styles.title}>Resumo do Pedido</AppText>

                <View style={styles.row}>
                    <AppText style={styles.label}>Subtotal</AppText>
                    <AppText style={styles.value}>R$ {subtotal.toFixed(2)}</AppText>
                </View>

                <View style={styles.row}>
                    <AppText style={styles.label}>Frete</AppText>
                    <AppText style={styles.value}>R$ {FRETE.toFixed(2)}</AppText>
                </View>

                <View style={styles.rowTotal}>
                    <AppText style={styles.totalLabel}>Total</AppText>
                    <AppText style={styles.totalValue}>R$ {total.toFixed(2)}</AppText>
                </View>
                <Pressable
                    style={styles.btnFinalizar}
                    onPress={finalizarCompra}
                >
                    <AppText style={styles.btnFinalizarText}>Finalizar Compra</AppText>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        width: "100%",
    },

    card: {
        backgroundColor: ColorTypes.BACKGROUNDWHITE,
        borderTopWidth: 1,
        borderColor: ColorTypes.GRAY,
        padding: 16,
        paddingBottom: 30,
    },

    title: {
        color: "var(--text-color)",
        fontSize: 15,
        fontWeight: 600,
        marginBottom: 5,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 7,
        borderBottomWidth: 0.5,
        borderBottomColor: ColorTypes.GRAYTEXT,
        opacity: 0.8,
    },

    label: {
        color: ColorTypes.GRAYTEXT,
        opacity: 0.8,
        fontSize: 13,
    },

    value: {
        color: ColorTypes.GRAYTEXT,
        opacity: 0.8,
        fontSize: 13,
        fontWeight: 500,
    },

    rowTotal: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
    },

    totalLabel: {
        color: ColorTypes.DARK,
        fontSize: 15,
        fontWeight: 700,
    },

    totalValue: {
        color: ColorTypes.DARK,
        fontSize: 18,
        fontWeight: 700,
    },

    btnFinalizar: {
        width: "100%",
        padding: 10,
        backgroundColor: ColorTypes.BLUE,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    btnFinalizarText: {
        color: ColorTypes.WHITE,
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: 0.3,
    },
});