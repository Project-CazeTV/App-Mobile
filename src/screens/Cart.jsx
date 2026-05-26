import { StyleSheet, View, ScrollView, Image } from 'react-native';
import AppText from '../components/common/AppText';
import ColorTypes from '../enumsCategories/ColorTypes';
import HeaderStackReturnPage from '../routes/HeaderStackReturnPage';
import { productsMock } from "../mocks/products";
import ProductSection from "../features/Shop/ProductSection";
import CartPriceSection from "../features/Shop/CartPriceSection";

export default function Cart() {
    const cart = productsMock
    const itens = cart.length
    const subTitle = itens + (itens<=1 ? " Item" : " Itens")
    return (
        <>
            <HeaderStackReturnPage pageTitle={'Meu Carrinho'} pageSubTitle={subTitle} />
            <View style={styles.page}>
                <View style={styles.content}>
                    <ProductSection
                        produtos={cart}
                        onAumentar={'aumentarQuantidade'}
                        onDiminuir={'diminuirQuantidade'}
                        onRemover={'removerProduto'}
                    />
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
        paddingHorizontal: 16,
        flex: 1,
    },
});