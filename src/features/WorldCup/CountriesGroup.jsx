import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Image } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import CardGesturePass from '../../components/common/CardGesturePass';

export default function CountriesGroup({ groups }) {
    const GroupCard = ({ object }) => (
        <View style={styles.groupCard}>
            <View style={styles.groupHeader}>
                <AppText style={styles.groupWatermark}>{object.grupo}</AppText>
                <AppText style={styles.groupTitle}>GRUPO {object.grupo}</AppText>
            </View>
            <View style={styles.countriesList}>
                {object.paises.map((pais) => (
                    <View
                        style={[styles.countryRow, pais.nome == 'Brasil' && styles.countryRowBrasil]}
                    >
                        <Image source={pais.imagem} style={[styles.flag, pais.nome == 'Brasil' && styles.flagBrasil]} />
                        <AppText style={[styles.countryName, pais.nome == 'Brasil' && styles.countryNameBrasil]}>{pais.nome.toUpperCase()}</AppText>
                    </View>
                ))}
            </View>
        </View>
    );

    return (
        <View>
            <View style={styles.container}>
                <AppText style={styles.title}>Grupos de Seleções</AppText>
                <AppText style={styles.subtitle}>Seleções separadas em grupos de acordo com a classificação FIFA</AppText>
            </View>
            <CardGesturePass list={groups} CardComponent={GroupCard} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginTop: 20,
        width: '100%',
    },

    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 1.5,
        marginBottom: 6,
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 13,
        color: ColorTypes.GRAYTEXT,
        marginBottom: 24,
    },
    groupCard: {
        backgroundColor: ColorTypes.WHITE,
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: ColorTypes.DARK,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.07,
        shadowRadius: 16,
        elevation: 4,
    },

    groupCardBar: {
        backgroundColor: ColorTypes.BLUE,
        height: 4,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },

    groupHeader: {
        position: 'relative',
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 8,
        overflow: 'hidden',
        borderTopWidth: 5,
        borderColor: ColorTypes.BLUE,
    },

    groupWatermark: {
        position: 'absolute',
        right: -8,
        top: -12,
        fontSize: 80,
        fontWeight: '900',
        color: ColorTypes.GRAY,
        lineHeight: 80,
    },

    groupTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: ColorTypes.BLUE,
        letterSpacing: 1.5,
        zIndex: 1,
    },

    countriesList: {
        flexDirection: 'column',
        paddingBottom: 8,
    },

    countryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.05)',
    },

    // data-country="Brasil" → passe uma prop `isBrasil` e aplique condicionalmente:
    // style={[styles.countryRow, isBrasil && styles.countryRowBrasil]}
    countryRowBrasil: {
        backgroundColor: 'rgba(0, 155, 57, 0.10)',
        borderLeftWidth: 3,
        borderLeftColor: '#009b3a',
    },

    flag: {
        width: 28,
        height: 20,
        borderRadius: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
    },

    flagBrasil: {
        shadowColor: 'rgba(0, 155, 58)',
        shadowOpacity: 0.4,
        shadowRadius: 6,
    },

    countryName: {
        fontSize: 12,
        fontWeight: '700',
        color: ColorTypes.DARK,
        letterSpacing: 0.5,
    },

    countryNameBrasil: {
        color: '#009b3a',
        fontWeight: '800',
    },

    noInfo: {
        alignSelf: 'center',
    },

});