import { StatusBar } from 'expo-status-bar';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, ScrollView, View } from 'react-native';
import ColorTypes from '../enumsCategories/ColorTypes';
import ProductTypes from '../enumsCategories/ProductTypes';
import Routes from '../routes/.';
import ShopBanner from '../features/Shop/ShopBanner';
import SectionTitle from '../components/common/SectionTitle';
import ProductCard from '../features/Shop/ProductCard';
import ProductsCarousel from '../features/Shop/ProductsCarousel';
import { productsMock } from '../mocks/products';
import TagCartLength from '../features/Shop/TagCartLength';
import { returnProductsLength } from '../features/Shop/utils/CartProducts';

export default function Shop({ route }) {
  const [cartLength, setCartLength] = useState(0);
  const ultimosProdutos = productsMock.slice((productsMock.length - 5), productsMock.length);
  const roupasProdutos = productsMock.filter((product) => product.categoria === ProductTypes.CLOTH)
  const acessoriosProdutos = productsMock.filter((product) => product.categoria === ProductTypes.ACESSORY)
  const tecnologicosProdutos = productsMock.filter((product) => product.categoria === ProductTypes.TECH)
  const outrosProdutos = productsMock.filter((product) => product.categoria !== ProductTypes.CLOTH && product.categoria !== ProductTypes.ACESSORY && product.categoria !== ProductTypes.TECH)

  useFocusEffect(
    useCallback(() => {
      async function loadCartLength() {
        const productsLength = await returnProductsLength();
        setCartLength(productsLength);
      }
      loadCartLength()
    }, [])
  );

  return (
    <>
      <ScrollView style={styles.container}>
        <ShopBanner />
        <StatusBar style="auto" />
        <SectionTitle title={'Últimos Lançamentos'} simple />
        <ProductsCarousel products={ultimosProdutos} autoScroll />

        <SectionTitle title={'Roupas'} inline />
        <ProductsCarousel products={roupasProdutos} />

        <SectionTitle title={'Acessórios'} inline />
        <ProductsCarousel products={acessoriosProdutos} />

        <SectionTitle title={'Tecnologicos'} inline />
        <ProductsCarousel products={tecnologicosProdutos} />

        <SectionTitle title={'Outros'} inline />
        <ProductsCarousel products={outrosProdutos} />
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
  },
});