import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import AppText from '../components/common/AppText';
import ColorTypes from '../enumsCategories/ColorTypes';
import HeaderStackReturnPage from '../routes/HeaderStackReturnPage';

export default function News({ route }) {
    const {noticia}  = route.params;

    return (
      <>
      <HeaderStackReturnPage pageTitle={'Notícia'} />
      <ScrollView style={styles.pageContainer}>
            <AppText style={[styles.category, styles.tag, { backgroundColor: noticia.tagColor }]}>
                {noticia.categoria}
            </AppText>
            <AppText style={styles.date}><FontAwesome5 name="clock" size={14}/> {noticia.tempo}</AppText>
            <AppText style={styles.title}>{noticia.titulo}</AppText>
            <Image source={noticia.imagem} style={styles.image}/>
            <View style={[styles.separator, { backgroundColor: noticia.tagColor }]} />
            <AppText style={styles.description}>{noticia.descricao}</AppText>
            <View style={styles.body}>{noticia.corpo?.split('\n\n').map((paragrafo) => (<AppText style={styles.paragraph}>{paragrafo}</AppText>))}</View>
        </ScrollView>
      </>
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
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: ColorTypes.WHITE,
    marginBottom: 14,
  },

  date: {
    fontSize: 14,
    color: ColorTypes.GRAYTEXT,
    marginBottom: 12,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  title: {
    fontSize:  24,
    fontWeight: 800,
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
    width: 60,
    height: 3,
    borderRadius: 2,
    marginBottom: 20,
  },

  description: {
    fontSize:  16,
    color: ColorTypes.DARK,
    fontWeight: 700,
    opacity: 0.85,
  },

  body: {
    fontSize: 14,
    color: ColorTypes.DARK,
    fontWeight: 300,
    marginVertical: 30,
    opacity: 0.85,
  },
  paragraph: {
    marginBottom: 25,
    color: ColorTypes.GRAYTEXT,
  },
});