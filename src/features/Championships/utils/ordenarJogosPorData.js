export default function ordenarJogosPorData(jogos) {

  return [...jogos].sort((jogoA, jogoB) => {

    const [diaA, mesA, anoA = "2026"] =
      jogoA.data.split("/");

    const [diaB, mesB, anoB = "2026"] =
      jogoB.data.split("/");

    return (
      new Date(anoA, mesA - 1, diaA) -
      new Date(anoB, mesB - 1, diaB)
    );
  });
}