import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, ScrollView, View, Pressable } from 'react-native';
import ColorTypes from '../enumsCategories/ColorTypes';
import AppText from '../components//common/AppText';
import ProductTypes from '../enumsCategories/ProductTypes';
import { ShopFilters } from '../enumsCategories/ShopFilters';
import SearchBar from '../features/Shop/SearchBar';
import SectionTitle from '../components/common/SectionTitle';
import ProductCard from '../features/Shop/ProductCard';
import FilterSection from '../features/Shop/FilterSection';
import ProgressBar from '../features/Shop/ProgressBar';
import { productsMock } from '../mocks/products';
import TagCartLength from '../features/Shop/TagCartLength';
import { returnProductsLength } from '../features/Shop/utils/CartProducts';

export default function SearchProducts() {
    const [cartLength, setCartLength] = useState(0);
    const [filtroAtivo, setFiltroAtivo] = useState("Todos");
    const [maxProductsLoaded, setMaxProductsLoaded] = useState(6);
    const [pesquisa, setPesquisa] = useState("");

  useFocusEffect(
    useCallback(() => {
      async function loadCartLength() {
        const productsLength = await returnProductsLength();
        setCartLength(productsLength);
      }
      loadCartLength()
    }, [])
  );

    const ultimosProdutos = productsMock.slice((productsMock.length - 5), productsMock.length);
    const roupasProdutos = productsMock.filter((product) => product.categoria === ProductTypes.CLOTH)
    const acessoriosProdutos = productsMock.filter((product) => product.categoria === ProductTypes.ACESSORY)
    const tecnologicosProdutos = productsMock.filter((product) => product.categoria === ProductTypes.TECH)
    const outrosProdutos = productsMock.filter((product) => product.categoria !== ProductTypes.CLOTH && product.categoria !== ProductTypes.ACESSORY && product.categoria !== ProductTypes.TECH)

    const loadMoreProducts = () => {
        setMaxProductsLoaded((prev) => prev + 4);
    };

    const produtosFiltrados = [...productsMock]
        .sort((a, b) => {
            if (filtroAtivo === "Maior para menor preço") {
                return b.preco - a.preco;
            }
            if (filtroAtivo === "Menor para maior preço") {
                return a.preco - b.preco;
            }
            return 0;
        })
        .filter((produto) => {
            const nomeMatch = produto.nome
                .toLowerCase()
                .includes(pesquisa.toLowerCase());
            if (!nomeMatch) {
                return false;
            }
            if (filtroAtivo === "Acima de R$100") {
                return produto.preco > 100;
            }
            if (filtroAtivo === "Abaixo de R$100") {
                return produto.preco < 100;
            }
            if (filtroAtivo === "Em promoção") {
                return produto.preco < 80;
            }
            return true;
        });

    const productsLoaded = (maxLoaded, products) => {
        return maxLoaded > products.length
            ? products.length
            : maxLoaded;
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <SectionTitle title={'Pesquisar Produtos'} simple />
                <SearchBar
                    placeHolder={"Procurar produto"}
                    value={pesquisa}
                    onChange={(e) =>
                        setPesquisa(e.target.value)
                    }
                />
                <FilterSection
                    titulo={"Filtro de preços"}
                    filtros={ShopFilters}
                    filtroAtivo={filtroAtivo}
                    setFiltroAtivo={setFiltroAtivo}
                />
                <View style={styles.productsArea}>
                    {produtosFiltrados
                        .slice(0, maxProductsLoaded)
                        .map((produto) => (
                            <ProductCard
                                product={produto}
                            />
                        ))}
                </View>
                <View style={styles.sectionButtonPlusProducts}>
                    <AppText style={styles.amountProducts}>
                        <AppText>
                            {productsLoaded(maxProductsLoaded, produtosFiltrados)} de{" "}
                            {produtosFiltrados.length}
                        </AppText>{" "}
                        produtos
                    </AppText>

                    <ProgressBar
                        current={productsLoaded(
                            maxProductsLoaded,
                            produtosFiltrados
                        )}
                        total={produtosFiltrados.length}
                    />

                    {maxProductsLoaded < produtosFiltrados.length && (
                        <Pressable
                            onPress={loadMoreProducts}
                            style={styles.viewMoreButton}
                        ><AppText>Ver mais</AppText>
                        </Pressable>
                    )}
                </View>
            </ScrollView>
            <TagCartLength cartLength={cartLength} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorTypes.WHITE,
        padding: 20,
        gap: 20,
    },

    productsArea: {
        width: "90%",
        maxWidth: 1200,
        marginTop: 30,
        marginBottom: 10,
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 12,
    },

    sectionButtonPlusProducts: {
        alignItems: 'center',
    },

    viewMoreButton: {
        width: "90%",
        maxWidth: 600,
        marginBottom: 30,
        backgroundColor: ColorTypes.BACKGROUNDWHITE,
        borderWidth: 1,
        borderColor: ColorTypes.GRAY,
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    amountProducts: {
        marginBottom: 10,
    },
});