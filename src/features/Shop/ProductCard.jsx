import { StyleSheet, View, Image, Pressable } from 'react-native';
import { truncateString } from "./utils/ProductCardUtil";
import AppText from "../../components/common/AppText";
import ColorTypes from '../../enumsCategories/ColorTypes';
import Routes from '../../routes/.';
import { useNavigation } from '@react-navigation/native';

export default function ProductCard({ product, appearButton = true, addToCart, }) {
  const navigation = useNavigation();

  function handleVerProduto() {
    navigation.push(Routes.PRODUCT, { product });
  };

  return (
    <Pressable style={styles.card} onPress={handleVerProduto}>
      <View style={styles.imgContainer} >
        <Image style={styles.cardImage} source={product.img} />
      </View>

      <AppText style={styles.cardTitle}>{truncateString(product.nome, 16)}</AppText>

      <View style={styles.secaoPrecoCores}>
        <AppText style={styles.precoText}>R$ {product.preco.toFixed(2)}</AppText>

        <View style={styles.secaoCores}>
          {product.coresDisponiveis?.map((cor) => (
            <AppText
              key={cor}
              style={{
                display: "inline-block",
                height: "15px",
                width: "15px",
                backgroundColor: cor,
                borderRadius: "50%",
              }}
            ></AppText>
          ))}
        </View>
      </View>
      {appearButton && (
      <Pressable
        style={styles.cardButton}
        onPress={(e) => {
          e.stopPropagation();
          // addToCart({
          //     id: product.id,
          //     name: product.nome,
          //     img: product.img,
          //     price: product.preco,
          //     color: product.coresDisponiveis?.[0],
          // })
        }}
      ><AppText style={styles.cardButtonText}>Adicionar ao carrinho</AppText>
      </Pressable>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 240,
    flexDirection: "column",
    gap: 5,
    marginBottom: 12,
  },

  imgContainer: {
    width: "100%",
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    overflow: "hidden",
  },

  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    resizeMode: "cover",
  },

  cardTitle: {
    margin: 0,
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
  },

  cardDescription: {
    margin: 0,
    color: ColorTypes.GRAYTEXT,
    fontSize: 12,
  },

  secaoPrecoCores: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  precoText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
  },

  secaoCores: {
    flexDirection: "row",
    gap: 5,
  },

  cardButton: {
    backgroundColor: ColorTypes.BLUE,
    padding: 10,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  cardButtonText: {
    color: ColorTypes.WHITE,
    fontSize: 10,
    fontWeight: "600",
  },
});