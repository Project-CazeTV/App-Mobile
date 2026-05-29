import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import Routes from '../../routes/.'
import AppText from '../common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import FontTypes from '../../enumsCategories/FontTypes';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function NewsList({ noticias = [], title, subtitle }) {

    if (!noticias.length) {
        return <AppText style={styles.empty}>Nenhuma notícia disponível.</AppText>;
    }

    const navigation = useNavigation();
    const actualRoute = useRoute()
    function onVerMais(noticia) {
        navigation.push(Routes.NEWS_DETAIL, {noticia});
    }

    return (
        <View style={styles.listContainer}>
            {title && <AppText style={styles.sectionTitle}>{title}</AppText>}
            {subtitle && <AppText style={styles.sectionSubtitle}>{subtitle}</AppText>}

            {noticias.map((noticia) => (
                <View key={noticia.id} style={styles.newsCard}>
                    <AppText style={[styles.tag, { backgroundColor: noticia.tagColor }]}>
                        {noticia.categoria}
                    </AppText>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={noticia.imagem}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.content}>
                        <AppText style={styles.newsTitle}>{noticia.titulo}</AppText>
                        {noticia.descricao && (
                            <AppText numberOfLines={2} style={styles.newsDescription}>{noticia.descricao}</AppText>
                        )}
                        <View style={styles.footer}>
                            <Pressable
                                style={styles.verMais}
                                onPress={() => onVerMais?.(noticia)}
                            ><AppText>
                                Ver mais <Entypo name="arrow-with-circle-right" size={16} style={{ opacity: 0.8 }} color={ColorTypes.DARK} />
                            </AppText>
                            </Pressable>
                            <AppText style={styles.tempo}>
                                <FontAwesome5 name="clock" size={15} /> {noticia.tempo}
                            </AppText>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'column',
        gap: 25,
        padding: 40,
        width: '100%',
    },

    sectionTitle: {
        fontWeight: 700,
        fontSize: 24,
    },

    sectionSubtitle: {
        fontSize: 15,
        marginBottom: 20,
        color: ColorTypes.GRAYTEXT,
    },

    newsCard: {
        flexDirection: 'column',
        gap: 15,
        width: '100%',
    },

    imageWrapper: {
        width: 220,
    },

    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        resizeMode: 'cover',
        borderRadius: 4,
    },

    tag: {
        alignSelf: 'flex-start',
        paddingVertical: 4,
        paddingHorizontal: 12,
        fontSize: 12,
        fontWeight: 900,
        color: '#fff',
        textTransform: 'uppercase',
        marginBottom: 8,
    },

    newsTitle: {
        fontSize: 16,
        fontWeight: 900,
        lineHeight: 21,
        marginBottom: 10,
    },

    newsDescription: {
        fontSize: 13,
        color: ColorTypes.GRAYTEXT,
        lineHeight: 20,
        marginTop: 6,
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    verMais: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        opacity: 0.8,
        fontSize: 13,
        fontWeight: 600,
        fontFamily: FontTypes.SORA,
        color: ColorTypes.DARK,
    },

    tempo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        opacity: 0.6,
        fontSize: 15,
        color: ColorTypes.GRAYTEXT,
    },
});