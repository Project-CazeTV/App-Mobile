import { StyleSheet, View, Image, Pressable } from 'react-native';
import { truncateString } from "../../utils/ProductCardUtil";
import AppText from "../../components/common/AppText";
import ColorTypes from '../../enumsCategories/ColorTypes';
import Routes from '../../routes/.';

export default function ProductCard({ id, nome, img, preco, cores, addToCart, }) {
    const navigate = useNavigate();

    function handleVerProduto() {
        navigation.navigate(Routes.HOME)
    };

    return (
        <Pressable style={styles.card} onPress={handleVerProduto}>
            <View style={styles.imgContainer} >
                <Image style={styles.cardImage} source={img} />
            </View>

            <AppText style={styles.cardTitle}>{truncateString(nome, 16)}</AppText>

            <View style={styles.secaoPrecoCores}>
                <AppText style={styles.precoText}>R$ {preco.toFixed(2)}</AppText>

                <View style={styles.secaoCores}>
                    {cores?.map((cor) => (
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

            <Pressable
                style={styles.cardButton}
                onPress={(e) => {
                    e.stopPropagation();
                    addToCart({
                        id,
                        name: nome,
                        img,
                        price: preco,
                        color: cores?.[0],
                    })
                }}
            ><AppText style={styles.cardButtonText}>Adicionar ao carrinho</AppText>
            </Pressable>
        </Pressable>
    );
}

const styles = StyleSheet.create({
 card: {
    width: cardWidth,
    height: cardHeight,
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
    fontSize: titleSize,
    fontWeight: "700",
    color: "#111",
  },

  cardDescription: {
    margin: 0,
    color: ColorTypes.GRAYTEXT,
    fontSize: 13,
  },

  secaoPrecoCores: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  precoText: {
    fontSize: titleSize,
    fontWeight: "700",
    color: "#111",
  },

  secaoCores: {
    flexDirection: "row",
    gap: 5,
  },

  cardButton: {
    backgroundColor: ColorTypes.BLUE,
    padding: buttonPadding,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  cardButtonText: {
    color: ColorTypes.WHITE,
    fontSize: buttonFontSize,
    fontWeight: "600",
  },
});