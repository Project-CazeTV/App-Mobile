import Entypo from '@expo/vector-icons/Entypo';
import { StyleSheet, ScrolView, View, Image } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';

export default function NewsPage({ route }) {
    const noticia = route.params;

    return (
        <ScrolView style={styles.pageContainer}>
            <AppText style={`${styles.category} ${styles.tag}`} style={{ backgroundColor: tagColor }}>
                {noticia.categoria}
            </AppText>
            <AppText style={styles.date}><Entypo name="arrow-with-circle-right" size={16} /> {noticia.tempo}</AppText>
            <AppText style={styles.title}>{noticia.titulo}</AppText>
            <Image source={noticia.imagem} />
            <AppText style={styles.description}>{noticia.descricao}</AppText>
            <View style={styles.body}>{corpo?.split('\n\n').map((paragrafo, index) => (<p key={index}>{paragrafo}</p>))}</View>
        </ScrolView>
    );
}

const styles = StyleSheet.create({
  pageContainer: {
    maxWidth: 720,
    width: "100%",
    alignSelf: "center",
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 60,
  },

  tag: {
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 3,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: ColorTypes.WHITE,
    marginBottom: 14,
  },

  date: {
    fontSize: 12,
    color: ColorTypes.GRAY,
    marginBottom: 12,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  title: {
    fontSize:  24,
    fontWeight: "800",
    color: ColorTypes.DARK,
    lineHeight: 32,
    marginBottom: 24,
    letterSpacing: -0.3,
  },


  image: {
    width: "100%",
    height: 220,
    borderRadius: 6,
    marginBottom: 24,
  },

  separator: {
    width: 40,
    height: 3,
    backgroundColor: ColorTypes.YELLOW,
    borderRadius: 2,
    marginBottom: 20,
  },

  description: {
    fontSize:  16,
    color: ColorTypes.DARK,
    fontWeight: "700",
    opacity: 0.85,
  },

  body: {
    fontSize: 14,
    color: ColorTypes.DARK,
    fontWeight: "300",
    marginVertical: 30,
    opacity: 0.85,
  },
});