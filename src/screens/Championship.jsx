import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ColorTypes from '../enumsCategories/ColorTypes';
import AppText from '../components/common/AppText';

// import ListaDeJogos from "../../features/Championships/components/ListaDeJogos/ListaDeJogos";
// import TabelaGrupo from "../../features/Championships/components/TabelaGrupo/TabelaGrupo";
// import TabelaClassificacao from "../../features/Championships/components/TabelaClassificacao/TabelaClassificacao";
// import SectionTitle from "../../components/Common/SectionTitle/SectionTitle";
// import MainHeader from "../../components/Layout/MainHeader/MainHeader";

export default function Championship({ campeonato }) {

    if (!campeonato) {
        return (
            <AppText className={styles.vazio}>
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
        <div className={styles.pagina}>
            <div
                className={styles.cabecalho}
                style={{ borderColor: cor }}>
                {campeonato.logo && (
                    <img src={campeonato.logo} alt={campeonato.nome} className={styles.logoCampeonato} />
                )}
                <div className={styles.infoCabecalho}>
                    <h2 className={styles.nomeCampeonato}>{campeonato.nomeCompleto || campeonato.nome}</h2>
                    <span className={styles.faseAtual}>{campeonato.fase}</span>
                    {campeonato.campeao && (
                        <span className={styles.badgeCampeao}>
                            🏆 Campeão {campeonato.campeao}
                        </span>
                    )}
                </div>
            </div>

            {/* <div className={styles.conteudo}>
                {campeonato.tabela && (
                    <section className={styles.secao}>
                        <SectionTitle title="Tabela" color={cor} number={"00"} inline />
                        <TabelaClassificacao tabela={campeonato.tabela} mostrarLegenda={campeonato.id === "brasileirao-2026"}/>
                    </section>
                )}

                {campeonato.grupos && (
                    <section className={styles.secao}>
                        <SectionTitle title="Grupos" color={cor} number={"00"} inline />
                        <div className={styles.gradeGrupos}>
                            {campeonato.grupos.map((grupo, indice) => (
                                <TabelaGrupo key={indice} grupo={grupo} cor={cor} />
                            ))}
                        </div>
                    </section>
                )}

                {proximosJogos.length > 0 && (
                    <section className={styles.secao}>
                        <SectionTitle title="Próximos jogos" color={cor} number={"00"} inline />
                        <ListaDeJogos jogos={proximosJogos} />
                    </section>
                )}

                {jogosPassados.length > 0 && (
                    <section className={styles.secao}>
                        <SectionTitle title="Jogos passados" color={cor} number={"00"} inline />
                        <ListaDeJogos jogos={jogosPassados} />
                    </section>
                )}

                {campeonato.confrontos?.length > 0 && (
                    <section className={styles.secao}>
                        <SectionTitle title="Confrontos" color={cor} number={"00"} inline />
                        <ListaDeJogos jogos={campeonato.confrontos} />
                    </section>
                )}
            </div> */}
        </div>
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