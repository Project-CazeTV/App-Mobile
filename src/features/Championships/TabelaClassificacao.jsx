import { StyleSheet, View, ScrollView } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import corDaZona from "../Championships/utils/zoneColor";

export default function TabelaClassificacao({ tabela, mostrarLegenda = true }) {

    return (
        <ScrollView style={styles.tabelaWrapper}>
            <View style={styles.tabela}>
                <View style={styles.header}>
                    <View style={styles.row}>
                        <AppText style={styles.th}>#</AppText>
                        <AppText style={[styles.th, styles.colunaTime]}>Time</AppText>
                        <AppText style={styles.th}>P</AppText>
                        <AppText style={styles.th}>J</AppText>
                        <AppText style={styles.th}>V</AppText>
                        <AppText style={styles.th}>E</AppText>
                        <AppText style={styles.th}>D</AppText>
                        <AppText style={styles.th}>GP</AppText>
                        <AppText style={styles.th}>GC</AppText>
                        <AppText style={styles.th}>SG</AppText>
                    </View>
                </View>

                <View>
                    {tabela.map((linha) => (
                        <View key={linha.pos} style={styles.row}>

                            <View style={[styles.posicao, styles.td]}>
                                <View
                                    style={[styles.indicadorZona, {
                                        backgroundColor:
                                            corDaZona(linha.zona),
                                    }]}
                                />
                                <AppText>
                                    {linha.pos}
                                </AppText>
                            </View>

                            <AppText style={[styles.td, styles.colunaTime]}>
                                {linha.time}
                            </AppText>

                            <AppText style={[styles.td, styles.pontos]}>
                                {linha.pts}
                            </AppText>

                            <AppText style={styles.td}>{linha.j}</AppText>
                            <AppText style={styles.td}>{linha.v}</AppText>
                            <AppText style={styles.td}>{linha.e}</AppText>
                            <AppText style={styles.td}>{linha.d}</AppText>
                            <AppText style={styles.td}>{linha.gp}</AppText>
                            <AppText style={styles.td}>{linha.gc}</AppText>

                            <AppText
                                style={[styles.td,
                                linha.sg > 0
                                    ? styles.saldoPositivo
                                    : linha.sg < 0
                                        ? styles.saldoNegativo
                                        : ""
                                ]}
                            >
                                {linha.sg > 0
                                    ? `+${linha.sg}`
                                    : linha.sg}
                            </AppText>

                        </View>
                    ))}
                </View>
            </View>

            {mostrarLegenda && (
                <View style={styles.legendaTabela}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <View style={[styles.ponto, { backgroundColor: "#3b5bdb" }]} />
                        <AppText>Libertadores</AppText>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <View style={[styles.ponto, { backgroundColor: "#74b816" }]} />
                        <AppText>Pré-Libertadores</AppText>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <View style={[styles.ponto, { backgroundColor: "#f59f00" }]} />
                        <AppText>Sul-Americana</AppText>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <View style={[styles.ponto, { backgroundColor: "#fa5252" }]} />
                        <AppText>Rebaixamento</AppText>
                    </View>
                </View>
            )}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    tabela: {
        width: '100%',
        minWidth: 480,
    },

    th: {
        minWidth: '7%',
        fontSize: 11,
        fontWeight: 700,
        color: '#888',
        textAlign: 'center',
        paddingVertical: 8,
        paddingHorizontal: 4,
    },

    td: {
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 4,
        color: ColorTypes.DARK,
        minWidth: '7%',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    posicao: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },

    indicadorZona: {
        width: 3,
        height: 18,
        borderRadius: 2,
    },


    colunaTime: {
        textAlign: 'left',
        minWidth: 150,
        color: ColorTypes.DARK,
        fontWeight: 500,
    },

    pontos: {
        fontWeight: 800,
    },

    saldoPositivo: {
        color: '#2f9e44',
        fontWeight: 700,
    },

    saldoNegativo: {
        color: '#e03131',
        fontWeight: 700,
    },

    legendaTabela: {
        marginTop: 20,
        flexDirection: 'row',
        gap: 12,
        flexWrap: 'wrap',
        marginVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 14,
        fontWeight: 300,
        color: '#666',
    },

    ponto: {
        width: 8,
        height: 8,
        borderRadius: 999,
        marginHorizontal: 20,
    },
});