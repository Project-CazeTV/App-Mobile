import ordenarJogosPorData from "./ordenarJogosPorData";

export default function agruparJogosPorData(jogos) {
  if (jogos.length === 0) return {};

  const temRodada = jogos.every((j) => j.rodada !== undefined && j.rodada !== null);
  const temFase   = jogos.every((j) => j.fase);

  if (temRodada) {
    const agrupado = jogos.reduce((acc, jogo) => {
      const chave = `Rodada ${jogo.rodada}`;
      if (!acc[chave]) acc[chave] = [];
      acc[chave].push(jogo);
      return acc;
    }, {});

    return Object.fromEntries(
      Object.entries(agrupado).sort(
        ([a], [b]) =>
          parseInt(a.replace("Rodada ", "")) -
          parseInt(b.replace("Rodada ", ""))
      )
    );
  }

  if (temFase) {
    return jogos.reduce((acc, jogo) => {
      if (!acc[jogo.fase]) acc[jogo.fase] = [];
      acc[jogo.fase].push(jogo);
      return acc;
    }, {});
  }

  return ordenarJogosPorData(jogos).reduce((acc, jogo) => {
    if (!acc[jogo.data]) acc[jogo.data] = [];
    acc[jogo.data].push(jogo);
    return acc;
  }, {});
}