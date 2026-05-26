import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import AppText from '../components/common/AppText';
import ColorTypes from '../enumsCategories/ColorTypes';
import HeaderStackReturnPage from '../routes/HeaderStackReturnPage';
import { productsMock } from "../mocks/products";
import ProductSection from "../features/Shop/ProductSection";
import CartPriceSection from "../features/Shop/CartPriceSection";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { returnProducts } from '../features/Shop/utils/CartProducts';

export default function Cart() {
    const [cart, setCart] = useState([]);
    const itens = cart.length
    const subTitle = itens + (itens <= 1 ? " Item" : " Itens")

useFocusEffect(
    useCallback(() => {
        async function loadCart() {
            const products = await returnProducts();
            setCart(products);
        }

        loadCart();
    }, [])
);

    function saveCart(updated) {
        setCart(updated);
        AsyncStorage.setItem("cart", JSON.stringify(updated));
    }

    function aumentarQuantidade(id) {
        saveCart(
            cart.map(item =>
                item.id === id ? { ...item, amount: item.amount + 1 } : item
            )
        );
    }

    function diminuirQuantidade(id) {
        saveCart(
            cart
                .map(item => item.id === id ? { ...item, amount: item.amount - 1 } : item)
                .filter(item => item.amount > 0)
        );
    }

    function removerProduto(id) {
        saveCart(cart.filter(item => item.id !== id));
    }

    return (
        <>
            <HeaderStackReturnPage pageTitle={'Meu Carrinho'} pageSubTitle={subTitle} />
            <View style={styles.page}>
                <View style={styles.content}>
                    <ProductSection
                        produtos={cart}
                        onAumentar={aumentarQuantidade}
                        onDiminuir={diminuirQuantidade}
                        onRemover={removerProduto}
                    />
                </View>
            </View>
            <CartPriceSection products={cart} />
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