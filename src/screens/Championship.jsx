import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import AppText from '../components/common/AppText';
import ColorTypes from '../enumsCategories/ColorTypes';
import SectionTitle from '../components/common/SectionTitle'
import TabelaClassificacao from "../features/Championships/TabelaClassificacao";
import ListaDeJogos from "../features/Championships/ListaDeJogos";
import TabelaGrupo from "../features/Championships/TabelaGrupo";
import Artilharia from "../features/Championships/Artilharia";

export default function Championship({ route }) {
    const { campeonato } = route.params;

    if (!campeonato) {
        return (
            <AppText style={styles.vazio}>
                Campeonato não encontrado.
            </AppText>
        );
    }

    const cor = campeonato.cor || "#3b5bdb";

    const jogosPassados = [
        ...(campeonato.jogosPassados || []),
        ...(campeonato.confrontos?.filter(
            (c) => c.placarA !== null && c.placarA !== undefined
        ) || []),
    ];

    const proximosJogos = [
        ...(campeonato.proximosJogos || []),
        ...(campeonato.confrontos?.filter((c) => !c.placarA) || []),
    ];

    return (
        <ScrollView style={styles.pagina}>
            <View
                style={[styles.cabecalho, { borderColor: cor }]}>
                {campeonato.logo && (
                    <Image source={campeonato.logo} style={styles.logoCampeonato} />
                )}
                <View style={styles.infoCabecalho}>
                    <AppText style={styles.nomeCampeonato}>{campeonato.nomeCompleto || campeonato.nome}</AppText>
                    <AppText style={styles.faseAtual}>{campeonato.fase}</AppText>
                    {campeonato.campeao && (
                        <AppText style={styles.badgeCampeao}>
                            🏆 Campeão {campeonato.campeao}
                        </AppText>
                    )}
                </View>
            </View>

            <View style={styles.conteudo}>
                {campeonato.tabela && (
                    <section style={styles.secao}>
                        <SectionTitle title="Tabela" color={cor} number={"00"} inline />
                        <TabelaClassificacao tabela={campeonato.tabela} mostrarLegenda={campeonato.id === "brasileirao-2026"} />
                    </section>
                )}

                {campeonato.grupos && (
                    <section style={styles.secao}>
                        <SectionTitle title="Grupos" color={cor} number={"00"} inline />
                        <View style={styles.gradeGrupos}>
                            {campeonato.grupos.map((grupo, indice) => (
                                <TabelaGrupo key={indice} grupo={grupo} cor={cor} />
                            ))}
                        </View>
                    </section>
                )}

                {proximosJogos.length > 0 && (
                    <section style={styles.secao}>
                        <SectionTitle title="Próximos jogos" color={cor} number={"00"} inline />
                        <ListaDeJogos jogos={proximosJogos} />
                    </section>
                )}

                {jogosPassados.length > 0 && (
                    <section style={styles.secao}>
                        <SectionTitle title="Jogos passados" color={cor} number={"00"} inline />
                        <ListaDeJogos jogos={jogosPassados} />
                    </section>
                )}

                {campeonato.confrontos?.length > 0 && (
                    <section style={styles.secao}>
                        <SectionTitle title="Confrontos" color={cor} number={"00"} inline />
                        <ListaDeJogos jogos={campeonato.confrontos} />
                    </section>
                )}

                {campeonato.artilharia?.length > 0 && (
                    <section style={styles.secao}>
                        <SectionTitle title="Artilharia" color={cor} number={"00"} inline />
                        <Artilharia artilheiros={campeonato.artilharia} />
                    </section>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    pagina: {
        width: '100%',
        paddingBottom: 40,
    },

    cabecalho: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        padding: 20,
        marginTop: 20,
        marginHorizontal: 16,
        borderLeftWidth: 4,
        borderLeftColor: '#3b5bdb',
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.02)',
    },

    logoCampeonato: {
        width: 56,
        height: 56,
        resizeMode: 'contain',
    },

    infoCabecalho: {
        flexDirection: 'column',
        gap: 2,
        flex: 1,
    },

    nomeCampeonato: {
        fontSize: 15,
        fontWeight: '800',
        color: '#000',
    },

    faseAtual: {
        fontSize: 12,
        color: '#888',
    },

    badgeCampeao: {
        fontSize: 12,
        fontWeight: '700',
        color: '#f59f00',
        marginTop: 4,
    },

    conteudo: {
        paddingTop: 24,
        paddingHorizontal: 16,

        width: '91%',
        alignSelf: 'center',
    },

    secao: {
        marginBottom: 40,
    },

    tituloSecao: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
        marginBottom: 20,
    },

    gradeGrupos: {
        flexDirection: 'column',
        gap: 20,
    },

    vazio: {
        textAlign: 'center',
        color: '#aaa',
        paddingVertical: 40,
    },
});