import { StyleSheet, View, ScrollView, Image } from 'react-native';
import AppText from '../components/common/AppText';
import ColorTypes from '../enumsCategories/ColorTypes';
import HeaderStackReturnPage from '../routes/HeaderStackReturnPage';

// import ProductSection from "../../features/Cart/Components/ProductsSection/ProductSection";
import CartPriceSection from "../features/Shop/CartPriceSection";

export default function Cart() {
    const itens = 10
    const subTitle = itens + (itens<=1 ? " Item" : " Itens")
    return (
        <>
            <HeaderStackReturnPage pageTitle={'Meu Carrinho'} pageSubTitle={subTitle} />
            <View style={styles.page}>
                <View style={styles.content}>
                    {/* <ProductSection
                        produtos={cart}
                        onAumentar={aumentarQuantidade}
                        onDiminuir={diminuirQuantidade}
                        onRemover={removerProduto}
                    /> */}
                    {/* {cart.length > 0 && (
                        <>
                            <View style={styles.divider} />
                            <PriceSection produtos={cart} />
                        </>
                    )} */}
                </View>
            </View>
            <CartPriceSection products={[]} />
        </>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    content: {
        paddingTop: 20,
        paddingBottom: 40,
        paddingHorizontal: 16,
        flex: 1,
    },
});