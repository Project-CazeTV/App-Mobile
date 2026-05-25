import { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ColorTypes from '../enumsCategories/ColorTypes';
import ProductTypes from '../enumsCategories/ProductTypes';
import SearchBar from '../features/Shop/SearchBar';
import SectionTitle from '../components/common/SectionTitle';
import ProductCard from '../features/Shop/ProductCard';
import { productsMock } from '../mocks/products';

export default function SearchProducts() {
    const [pesquisa, setPesquisa] = useState("");

    const ultimosProdutos = productsMock.slice((productsMock.length - 5), productsMock.length);
    const roupasProdutos = productsMock.filter((product) => product.categoria === ProductTypes.CLOTH)
    const acessoriosProdutos = productsMock.filter((product) => product.categoria === ProductTypes.ACESSORY)
    const tecnologicosProdutos = productsMock.filter((product) => product.categoria === ProductTypes.TECH)
    const outrosProdutos = productsMock.filter((product) => product.categoria !== ProductTypes.CLOTH && product.categoria !== ProductTypes.ACESSORY && product.categoria !== ProductTypes.TECH)

    return (
        <ScrollView style={styles.container}>
            <SectionTitle title={'Pesquisar Produtos'} simple />
            <SearchBar
                placeHolder={"Procurar produto"}
                value={pesquisa}
                onChange={(e) =>
                    setPesquisa(e.target.value)
                }
            />
            <SectionTitle title={pesquisa} color={ColorTypes.GREEN}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorTypes.WHITE,
        padding: 20,
        gap: 20,
    },
});