import { StyleSheet, View, TextInput } from 'react-native';
import AppText from "../../components/common/AppText";
import ColorTypes from '../../enumsCategories/ColorTypes';
import { productsMock } from "../../mocks/products";
import ProductCard from "./ProductCard";

export default function RelatedProducts({ categoria, id, addToCart }) {
    const related = productsMock.filter(p => p.categoria == categoria && p.id !== id).slice(0, 6);

    if (related.length === 0) return null;

    return (
        <View style={styles.section}>
            <AppText style={styles.sectionLabel}>Produtos relacionados</AppText>
            <View style={styles.grid}>
                {related.map(produto => (
                    <ProductCard
                        key={produto.id}
                        product={produto}
                        // addToCart={addToCart}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
 section: {
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: ColorTypes.WHITE,
  },

  sectionLabel: {
    color: ColorTypes.GRAYTEXT,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 14,
  },

  grid: {
    width: '90%',
    maxWidth: 1200,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
});