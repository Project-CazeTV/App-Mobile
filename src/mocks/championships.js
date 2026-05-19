// ─────────────────────────────────────────────
// CAMPEONATOS.JS
// Dados atualizados até 09/05/2026
// Fonte: CBF, CONMEBOL, Wikipédia, Gazeta Esportiva
// ─────────────────────────────────────────────

// ── STRUCTURE DE CADA CAMPEONATO ──
// id, nome, nomeCompleto, edicao, logo, cor, fase, tabela, jogosPassados, proximosJogos

export const brasileirao = {
  id: "brasileirao-2026",
  nome: "Brasileirão",
  nomeCompleto: "Brasileirão Betano – Série A 2026",
  edicao: "2026",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Campeonato_Brasileiro_S%C3%A9rie_A_logo_%282024%29.svg/1920px-Campeonato_Brasileiro_S%C3%A9rie_A_logo_%282024%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  cor: "#009B3A",
  fase: "Rodada 15 (em andamento)",
  tabela: [
    { pos: 1,  time: "Palmeiras",           pts: 33, j: 14, v: 10, e: 3, d: 1,  gp: 24, gc: 11, sg: 13,  zona: "libertadores" },
    { pos: 2,  time: "Flamengo",            pts: 26, j: 12, v: 8,  e: 2, d: 2,  gp: 24, gc: 10, sg: 14,  zona: "libertadores" },
    { pos: 3,  time: "Fluminense",          pts: 26, j: 13, v: 8,  e: 2, d: 3,  gp: 23, gc: 16, sg: 7,   zona: "libertadores" },
    { pos: 4,  time: "São Paulo",           pts: 23, j: 13, v: 7,  e: 2, d: 4,  gp: 17, gc: 11, sg: 6,   zona: "libertadores" },
    { pos: 5,  time: "Athletico-PR",        pts: 23, j: 14, v: 7,  e: 2, d: 5,  gp: 20, gc: 15, sg: 5,   zona: "pre-libertadores" },
    { pos: 6,  time: "Bahia",               pts: 21, j: 12, v: 6,  e: 3, d: 3,  gp: 17, gc: 14, sg: 3,   zona: "pre-libertadores" },
    { pos: 7,  time: "Coritiba",            pts: 19, j: 14, v: 5,  e: 4, d: 5,  gp: 16, gc: 17, sg: -1,  zona: "sulamericana" },
    { pos: 8,  time: "Vitória",             pts: 18, j: 13, v: 5,  e: 3, d: 5,  gp: 16, gc: 18, sg: -2,  zona: "sulamericana" },
    { pos: 9,  time: "Red Bull Bragantino", pts: 17, j: 13, v: 5,  e: 2, d: 6,  gp: 15, gc: 15, sg: 0,   zona: "sulamericana" },
    { pos: 10, time: "Botafogo",            pts: 17, j: 13, v: 5,  e: 2, d: 6,  gp: 25, gc: 26, sg: -1,  zona: "sulamericana" },
    { pos: 11, time: "Atlético-MG",         pts: 17, j: 14, v: 5,  e: 2, d: 7,  gp: 17, gc: 20, sg: -3,  zona: "sulamericana" },
    { pos: 12, time: "Grêmio",              pts: 17, j: 14, v: 4,  e: 5, d: 5,  gp: 15, gc: 16, sg: -1,  zona: "sulamericana" },
    { pos: 13, time: "Vasco",               pts: 16, j: 13, v: 4,  e: 4, d: 5,  gp: 18, gc: 19, sg: -1,  zona: "neutro" },
    { pos: 14, time: "Cruzeiro",            pts: 16, j: 14, v: 4,  e: 4, d: 6,  gp: 18, gc: 24, sg: -6,  zona: "neutro" },
    { pos: 15, time: "Corinthians",         pts: 15, j: 13, v: 3,  e: 6, d: 4,  gp: 9,  gc: 11, sg: -2,  zona: "neutro" },
    { pos: 16, time: "Santos",              pts: 15, j: 14, v: 3,  e: 6, d: 5,  gp: 19, gc: 22, sg: -3,  zona: "neutro" },
    { pos: 17, time: "Internacional",       pts: 14, j: 13, v: 3,  e: 5, d: 5,  gp: 12, gc: 14, sg: -2,  zona: "rebaixamento" },
    { pos: 18, time: "Remo",                pts: 11, j: 14, v: 2,  e: 5, d: 7,  gp: 15, gc: 24, sg: -9,  zona: "rebaixamento" },
    { pos: 19, time: "Chapecoense",         pts: 9,  j: 14, v: 2,  e: 3, d: 9,  gp: 12, gc: 28, sg: -16, zona: "rebaixamento" },
    { pos: 20, time: "Mirassol",            pts: 8,  j: 13, v: 2,  e: 2, d: 9,  gp: 11, gc: 22, sg: -11, zona: "rebaixamento" },
  ],
  jogosPassados: [
    // ── Rodada 12 — 18-19/04/2026 ──
    { data: "18/04/2026", hora: "18h30", timeA: "Vasco",          timeB: "São Paulo",    placarA: 2, placarB: 1, estadio: "São Januário",              rodada: 12 },
    { data: "18/04/2026", hora: "18h30", timeA: "Chapecoense",    timeB: "Botafogo",     placarA: 1, placarB: 4, estadio: "Arena Condá",               rodada: 12 },
    { data: "18/04/2026", hora: "20h00", timeA: "Vitória",        timeB: "Corinthians",  placarA: 0, placarB: 0, estadio: "Barradão",                  rodada: 12 },
    { data: "18/04/2026", hora: "20h30", timeA: "Cruzeiro",       timeB: "Grêmio",       placarA: 2, placarB: 0, estadio: "Mineirão",                  rodada: 12 },
    { data: "19/04/2026", hora: "11h00", timeA: "Internacional",  timeB: "Mirassol",     placarA: 1, placarB: 2, estadio: "Beira-Rio",                 rodada: 12 },
    { data: "19/04/2026", hora: "16h00", timeA: "Santos",         timeB: "Fluminense",   placarA: 2, placarB: 3, estadio: "Vila Belmiro",              rodada: 12 },
    { data: "19/04/2026", hora: "16h00", timeA: "Coritiba",       timeB: "Atlético-MG",  placarA: 2, placarB: 0, estadio: "Couto Pereira",             rodada: 12 },
    { data: "19/04/2026", hora: "18h30", timeA: "Palmeiras",      timeB: "Athletico-PR", placarA: 1, placarB: 0, estadio: "Allianz Parque",            rodada: 12 },
    { data: "19/04/2026", hora: "18h30", timeA: "Red Bull Bragantino",     timeB: "Remo",         placarA: 4, placarB: 2, estadio: "Cícero de Souza Marques",   rodada: 12 },
    { data: "19/04/2026", hora: "19h30", timeA: "Flamengo",       timeB: "Bahia",        placarA: 2, placarB: 0, estadio: "Maracanã",                  rodada: 12 },

    // ── Rodada 13 — 25-26/04/2026 ──
    { data: "25/04/2026", hora: "18h30", timeA: "Botafogo",       timeB: "Internacional",placarA: 2, placarB: 2, estadio: "Mané Garrincha",            rodada: 13 },
    { data: "25/04/2026", hora: "18h30", timeA: "Bahia",          timeB: "Santos",       placarA: 2, placarB: 2, estadio: "Arena Fonte Nova",          rodada: 13 },
    { data: "25/04/2026", hora: "18h30", timeA: "Remo",           timeB: "Cruzeiro",     placarA: 0, placarB: 1, estadio: "Baenão",                    rodada: 13 },
    { data: "25/04/2026", hora: "21h00", timeA: "São Paulo",      timeB: "Mirassol",     placarA: 1, placarB: 0, estadio: "Brinco de Ouro",            rodada: 13 },
    { data: "26/04/2026", hora: "16h00", timeA: "Corinthians",    timeB: "Vasco",        placarA: 1, placarB: 0, estadio: "Neo Química Arena",         rodada: 13 },
    { data: "26/04/2026", hora: "16h00", timeA: "Grêmio",         timeB: "Coritiba",     placarA: 1, placarB: 0, estadio: "Arena do Grêmio",           rodada: 13 },
    { data: "26/04/2026", hora: "18h30", timeA: "Red Bull Bragantino",     timeB: "Palmeiras",    placarA: 0, placarB: 1, estadio: "Cícero de Souza Marques",   rodada: 13 },
    { data: "26/04/2026", hora: "18h30", timeA: "Athletico-PR",   timeB: "Vitória",      placarA: 3, placarB: 1, estadio: "Arena da Baixada",          rodada: 13 },
    { data: "26/04/2026", hora: "20h30", timeA: "Fluminense",     timeB: "Chapecoense",  placarA: 2, placarB: 1, estadio: "Maracanã",                  rodada: 13 },
    { data: "26/04/2026", hora: "20h30", timeA: "Atlético-MG",    timeB: "Flamengo",     placarA: 0, placarB: 4, estadio: "Arena MRV",                 rodada: 13 },

    // ── Rodada 14 — 02-03/05/2026 ──
    { data: "02/05/2026", hora: "16h00", timeA: "Botafogo",       timeB: "Remo",         placarA: 1, placarB: 2, estadio: "Nilton Santos",             rodada: 14 },
    { data: "02/05/2026", hora: "18h30", timeA: "Palmeiras",      timeB: "Santos",       placarA: 1, placarB: 1, estadio: "Allianz Parque",            rodada: 14 },
    { data: "02/05/2026", hora: "18h30", timeA: "Vitória",        timeB: "Coritiba",     placarA: 4, placarB: 1, estadio: "Barradão",                  rodada: 14 },
    { data: "02/05/2026", hora: "20h30", timeA: "Athletico-PR",   timeB: "Grêmio",       placarA: 0, placarB: 0, estadio: "Arena da Baixada",          rodada: 14 },
    { data: "02/05/2026", hora: "21h00", timeA: "Cruzeiro",       timeB: "Atlético-MG",  placarA: 1, placarB: 3, estadio: "Mineirão",                  rodada: 14 },
    { data: "03/05/2026", hora: "16h00", timeA: "Flamengo",       timeB: "Vasco",        placarA: 2, placarB: 2, estadio: "Maracanã",                  rodada: 14 },
    { data: "03/05/2026", hora: "16h00", timeA: "São Paulo",      timeB: "Bahia",        placarA: 2, placarB: 2, estadio: "Cícero de Souza Marques",   rodada: 14 },
    { data: "03/05/2026", hora: "18h30", timeA: "Internacional",  timeB: "Fluminense",   placarA: 2, placarB: 0, estadio: "Beira-Rio",                 rodada: 14 },
    { data: "03/05/2026", hora: "18h30", timeA: "Chapecoense",    timeB: "Red Bull Bragantino",   placarA: 1, placarB: 2, estadio: "Arena Condá",               rodada: 14 },
    { data: "03/05/2026", hora: "20h30", timeA: "Mirassol",       timeB: "Corinthians",  placarA: 2, placarB: 1, estadio: "Maião",                     rodada: 14 },

    // ── Rodada 15 — jogos já encerrados ──
    { data: "09/05/2026", hora: "16h00", timeA: "Coritiba",       timeB: "Internacional",placarA: 2, placarB: 2, estadio: "Couto Pereira",             rodada: 15 },
  ],
  proximosJogos: [
    // ── Rodada 15 — jogos restantes ──
    { data: "09/05/2026", hora: "18h00", timeA: "Fluminense",     timeB: "Vitória",      estadio: "Maracanã",                  rodada: 15 },
    { data: "09/05/2026", hora: "21h00", timeA: "Bahia",          timeB: "Cruzeiro",     estadio: "Arena Fonte Nova",          rodada: 15 },
    { data: "10/05/2026", hora: "16h00", timeA: "Atlético-MG",    timeB: "Botafogo",     estadio: "Arena MRV",                 rodada: 15 },
    { data: "10/05/2026", hora: "16h00", timeA: "Remo",           timeB: "Palmeiras",    estadio: "Mangueirão",                rodada: 15 },
    { data: "10/05/2026", hora: "18h30", timeA: "Santos",         timeB: "Red Bull Bragantino",   estadio: "Vila Belmiro",              rodada: 15 },
    { data: "10/05/2026", hora: "18h30", timeA: "Corinthians",    timeB: "São Paulo",    estadio: "Neo Química Arena",         rodada: 15 },
    { data: "10/05/2026", hora: "18h30", timeA: "Mirassol",       timeB: "Chapecoense",  estadio: "Maião",                     rodada: 15 },
    { data: "10/05/2026", hora: "19h30", timeA: "Grêmio",         timeB: "Flamengo",     estadio: "Arena do Grêmio",           rodada: 15 },
    { data: "10/05/2026", hora: "20h30", timeA: "Vasco",          timeB: "Athletico-PR", estadio: "São Januário",              rodada: 15 },
  ]
};

export const copaDoBrasil = {
  id: "copa-do-brasil-2026",
  nome: "Copa do Brasil",
  nomeCompleto: "Copa Betano do Brasil 2026",
  edicao: "2026",
  logo: "https://upload.wikimedia.org/wikipedia/pt/9/96/CopaDoBrasil.png",
  cor: "#FFD700",
  fase: "Quinta fase (oitavas de final)",
  tabela: null, // Copa do Brasil não tem tabela de classificação, é mata-mata
  confrontos: [
    // Jogo de ida — quinta fase
    { data: "22/04/2026", hora: "21h30", timeA: "Flamengo",    timeB: "Vitória",      placarA: 2, placarB: 1, estadio: "Maracanã",           fase: "Quinta fase - ida" },
    { data: "21/04/2026", hora: "20h00", timeA: "São Paulo",   timeB: "Juventude",    placarA: 1, placarB: 0, estadio: "MorumBIS",           fase: "Quinta fase - ida" },
    { data: "22/04/2026", hora: "21h30", timeA: "Bahia",       timeB: "Remo",         placarA: 1, placarB: 3, estadio: "Arena Fonte Nova",   fase: "Quinta fase - ida" },
    { data: "23/04/2026", hora: "21h30", timeA: "Palmeiras",   timeB: "Jacuipense",   placarA: 3, placarB: 0, estadio: "Allianz Parque",     fase: "Quinta fase - ida" },
    { data: "21/04/2026", hora: "21h30", timeA: "Paysandu",    timeB: "Vasco",        placarA: 0, placarB: 2, estadio: "Curuzu",             fase: "Quinta fase - ida" },
    { data: "21/04/2026", hora: "21h30", timeA: "Botafogo",    timeB: "Chapecoense",  placarA: 1, placarB: 0, estadio: "Nilton Santos",      fase: "Quinta fase - ida" },
    { data: "21/04/2026", hora: "21h30", timeA: "Athletico-PR",timeB: "Atlético-GO",  placarA: 0, placarB: 0, estadio: "Arena da Baixada",   fase: "Quinta fase - ida" },
  ],
  proximosJogos: [
    { data: "13/05/2026", hora: "21h30", timeA: "Vitória",     timeB: "Flamengo",     estadio: "Barradão",          fase: "Quinta fase - volta" },
    { data: "13/05/2026", hora: "19h30", timeA: "Juventude",   timeB: "São Paulo",    estadio: "Alfredo Jaconi",    fase: "Quinta fase - volta" },
    { data: "14/05/2026", hora: "21h30", timeA: "Remo",        timeB: "Bahia",        estadio: "Baenão",            fase: "Quinta fase - volta" },
    { data: "14/05/2026", hora: "21h30", timeA: "Jacuipense",  timeB: "Palmeiras",    estadio: "Carneirão",         fase: "Quinta fase - volta" },
    { data: "13/05/2026", hora: "21h30", timeA: "Vasco",       timeB: "Paysandu",     estadio: "São Januário",      fase: "Quinta fase - volta" },
  ]
};

export const libertadores = {
  id: "libertadores-2026",
  nome: "Libertadores",
  nomeCompleto: "Copa Libertadores da América 2026",
  edicao: "2026",
  logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/95/Conmebol_Libertadores_logo.svg/1280px-Conmebol_Libertadores_logo.svg.png",
  cor: "#F5C518",
  fase: "Fase de grupos (rodada 5 de 6)",
  grupos: [
    {
      grupo: "A",
      tabela: [
        { pos: 1, time: "Palmeiras",           pais: "BRA", pts: 10, j: 4, v: 3, e: 1, d: 0, gp: 9, gc: 3, sg: 6 },
        { pos: 2, time: "Cerro Porteño",        pais: "PAR", pts: 6,  j: 4, v: 2, e: 0, d: 2, gp: 5, gc: 7, sg: -2 },
        { pos: 3, time: "Junior Barranquilla",  pais: "COL", pts: 4,  j: 4, v: 1, e: 1, d: 2, gp: 4, gc: 6, sg: -2 },
        { pos: 4, time: "Sporting Cristal",     pais: "PER", pts: 3,  j: 4, v: 1, e: 0, d: 3, gp: 3, gc: 8, sg: -5 },
      ]
    },
    {
      grupo: "B",
      tabela: [
        { pos: 1, time: "Flamengo",             pais: "BRA", pts: 7,  j: 4, v: 2, e: 1, d: 1, gp: 8, gc: 5, sg: 3 },
        { pos: 2, time: "Estudiantes",          pais: "ARG", pts: 7,  j: 4, v: 2, e: 1, d: 1, gp: 6, gc: 4, sg: 2 },
        { pos: 3, time: "Ind. Medellín",        pais: "COL", pts: 5,  j: 3, v: 1, e: 2, d: 0, gp: 3, gc: 2, sg: 1 },
        { pos: 4, time: "Cusco FC",             pais: "PER", pts: 1,  j: 4, v: 0, e: 1, d: 3, gp: 2, gc: 8, sg: -6 },
      ]
    },
    {
      grupo: "C",
      tabela: [
        { pos: 1, time: "Fluminense",           pais: "BRA", pts: 9,  j: 4, v: 3, e: 0, d: 1, gp: 7, gc: 4, sg: 3 },
        { pos: 2, time: "Bolívar",              pais: "BOL", pts: 7,  j: 4, v: 2, e: 1, d: 1, gp: 6, gc: 5, sg: 1 },
        { pos: 3, time: "Ind. Santa Fe",        pais: "COL", pts: 4,  j: 4, v: 1, e: 1, d: 2, gp: 4, gc: 6, sg: -2 },
        { pos: 4, time: "Platense",             pais: "ARG", pts: 1,  j: 4, v: 0, e: 1, d: 3, gp: 2, gc: 7, sg: -5 },
      ]
    },
    {
      grupo: "D",
      tabela: [
        { pos: 1, time: "Boca Juniors",         pais: "ARG", pts: 10, j: 4, v: 3, e: 1, d: 0, gp: 8, gc: 2, sg: 6 },
        { pos: 2, time: "Cruzeiro",             pais: "BRA", pts: 6,  j: 4, v: 2, e: 0, d: 2, gp: 5, gc: 6, sg: -1 },
        { pos: 3, time: "Ind. del Valle",       pais: "ECU", pts: 4,  j: 4, v: 1, e: 1, d: 2, gp: 4, gc: 6, sg: -2 },
        { pos: 4, time: "Libertad",             pais: "PAR", pts: 3,  j: 4, v: 1, e: 0, d: 3, gp: 3, gc: 7, sg: -4 },
      ]
    },
    {
      grupo: "E",
      tabela: [
        { pos: 1, time: "Corinthians",          pais: "BRA", pts: 8,  j: 4, v: 2, e: 2, d: 0, gp: 6, gc: 3, sg: 3 },
        { pos: 2, time: "LDU Quito",            pais: "ECU", pts: 7,  j: 4, v: 2, e: 1, d: 1, gp: 5, gc: 4, sg: 1 },
        { pos: 3, time: "Lanús",                pais: "ARG", pts: 3,  j: 4, v: 1, e: 0, d: 3, gp: 3, gc: 7, sg: -4 },
        { pos: 4, time: "Rosario Central",      pais: "ARG", pts: 3,  j: 4, v: 1, e: 0, d: 3, gp: 3, gc: 6, sg: -3 },
      ]
    },
    {
      grupo: "F",
      tabela: [
        { pos: 1, time: "Mirassol",             pais: "BRA", pts: 7,  j: 4, v: 2, e: 1, d: 1, gp: 5, gc: 4, sg: 1 },
        { pos: 2, time: "Always Ready",         pais: "BOL", pts: 6,  j: 4, v: 2, e: 0, d: 2, gp: 5, gc: 5, sg: 0 },
        { pos: 3, time: "Universitario",        pais: "PER", pts: 5,  j: 4, v: 1, e: 2, d: 1, gp: 4, gc: 4, sg: 0 },
        { pos: 4, time: "Club Nacional",        pais: "URU", pts: 4,  j: 4, v: 1, e: 1, d: 2, gp: 3, gc: 5, sg: -2 },
      ]
    },
  ],
  proximosJogos: [
    { data: "20/05/2026", hora: "21h30", timeA: "Fluminense",  timeB: "Bolívar",        estadio: "Maracanã",        fase: "Fase de grupos - rd 5" },
    { data: "20/05/2026", hora: "21h30", timeA: "Always Ready",timeB: "Mirassol",       estadio: "Estadio Municipal",fase: "Fase de grupos - rd 5" },
    { data: "20/05/2026", hora: "21h30", timeA: "Boca Juniors", timeB: "Cruzeiro",      estadio: "La Bombonera",    fase: "Fase de grupos - rd 5" },
    { data: "21/05/2026", hora: "21h30", timeA: "Flamengo",    timeB: "Estudiantes",    estadio: "Maracanã",        fase: "Fase de grupos - rd 5" },
    { data: "21/05/2026", hora: "21h30", timeA: "Palmeiras",   timeB: "Cerro Porteño",  estadio: "Allianz Parque",  fase: "Fase de grupos - rd 5" },
    { data: "21/05/2026", hora: "21h30", timeA: "Corinthians", timeB: "LDU Quito",      estadio: "Neo Química Arena",fase: "Fase de grupos - rd 5" },
  ]
};

export const sulAmericana = {
  id: "sul-americana-2026",
  nome: "Sul-Americana",
  nomeCompleto: "Copa Sul-Americana 2026",
  edicao: "2026",
  logo: "https://upload.wikimedia.org/wikipedia/pt/e/e4/Conmebol_Sudamericana_logo.png",
  cor: "#FF6B00",
  fase: "Fase de grupos (rodada 4 de 6)",
  grupos: [
    {
      grupo: "A",
      tabela: [
        { pos: 1, time: "Athletico-PR",     pais: "BRA", pts: 9,  j: 3, v: 3, e: 0, d: 0, gp: 7, gc: 2, sg: 5 },
        { pos: 2, time: "Colo-Colo",        pais: "CHI", pts: 6,  j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 3, sg: 2 },
        { pos: 3, time: "Sao Lorenzo",      pais: "ARG", pts: 1,  j: 3, v: 0, e: 1, d: 2, gp: 2, gc: 6, sg: -4 },
        { pos: 4, time: "The Strongest",    pais: "BOL", pts: 1,  j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 5, sg: -4 },
      ]
    },
    {
      grupo: "B",
      tabela: [
        { pos: 1, time: "Grêmio",           pais: "BRA", pts: 7,  j: 3, v: 2, e: 1, d: 0, gp: 6, gc: 2, sg: 4 },
        { pos: 2, time: "Defensa y Justicia",pais: "ARG", pts: 6, j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 4, sg: 1 },
        { pos: 3, time: "Talleres",         pais: "ARG", pts: 2,  j: 3, v: 0, e: 2, d: 1, gp: 3, gc: 4, sg: -1 },
        { pos: 4, time: "Dep. Táchira",     pais: "VEN", pts: 2,  j: 3, v: 0, e: 2, d: 1, gp: 2, gc: 5, sg: -3 },
      ]
    },
    {
      grupo: "C",
      tabela: [
        { pos: 1, time: "Vasco",            pais: "BRA", pts: 7,  j: 3, v: 2, e: 1, d: 0, gp: 5, gc: 2, sg: 3 },
        { pos: 2, time: "Peñarol",          pais: "URU", pts: 6,  j: 3, v: 2, e: 0, d: 1, gp: 6, gc: 3, sg: 3 },
        { pos: 3, time: "Olimpia",          pais: "PAR", pts: 3,  j: 3, v: 1, e: 0, d: 2, gp: 3, gc: 5, sg: -2 },
        { pos: 4, time: "Liga de Quito",    pais: "ECU", pts: 1,  j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 6, sg: -5 },
      ]
    },
    {
      grupo: "D",
      tabela: [
        { pos: 1, time: "Internacional",    pais: "BRA", pts: 6,  j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 3, sg: 2 },
        { pos: 2, time: "Newell's",         pais: "ARG", pts: 6,  j: 3, v: 2, e: 0, d: 1, gp: 4, gc: 3, sg: 1 },
        { pos: 3, time: "Paranaense",       pais: "COL", pts: 3,  j: 3, v: 1, e: 0, d: 2, gp: 3, gc: 5, sg: -2 },
        { pos: 4, time: "Palestino",        pais: "CHI", pts: 3,  j: 3, v: 1, e: 0, d: 2, gp: 2, gc: 4, sg: -2 },
      ]
    },
  ],
  proximosJogos: [
    { data: "14/05/2026", hora: "19h15", timeA: "Grêmio",       timeB: "Talleres",       estadio: "Arena do Grêmio",  fase: "Fase de grupos - rd 4" },
    { data: "15/05/2026", hora: "19h15", timeA: "Athletico-PR", timeB: "Sao Lorenzo",    estadio: "Arena da Baixada", fase: "Fase de grupos - rd 4" },
    { data: "15/05/2026", hora: "21h30", timeA: "Vasco",        timeB: "Peñarol",        estadio: "São Januário",     fase: "Fase de grupos - rd 4" },
    { data: "15/05/2026", hora: "21h30", timeA: "Internacional",timeB: "Newell's",       estadio: "Beira-Rio",        fase: "Fase de grupos - rd 4" },
  ]
};

// ───── CAMPEONATOS EUROPEUS ──────

export const premierLeague = {
  id: "premier-league-2025-26",
  nome: "Premier League",
  nomeCompleto: "Premier League 2025/26",
  edicao: "2025/26",
  logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
  cor: "#3d195b",
  fase: "Rodada 36 (em andamento)",
  tabela: [
    { pos: 1,  time: "Liverpool",         pts: 79, j: 35, v: 24, e: 7,  d: 4,  gp: 72, gc: 33, sg: 39,  zona: "champions" },
    { pos: 2,  time: "Arsenal",           pts: 74, j: 35, v: 22, e: 8,  d: 5,  gp: 65, gc: 30, sg: 35,  zona: "champions" },
    { pos: 3,  time: "Manchester City",   pts: 68, j: 35, v: 20, e: 8,  d: 7,  gp: 63, gc: 42, sg: 21,  zona: "champions" },
    { pos: 4,  time: "Chelsea",           pts: 63, j: 35, v: 18, e: 9,  d: 8,  gp: 60, gc: 45, sg: 15,  zona: "champions" },
    { pos: 5,  time: "Newcastle",         pts: 60, j: 35, v: 17, e: 9,  d: 9,  gp: 54, gc: 44, sg: 10,  zona: "europa" },
    { pos: 6,  time: "Aston Villa",       pts: 57, j: 35, v: 16, e: 9,  d: 10, gp: 58, gc: 50, sg: 8,   zona: "europa" },
    { pos: 7,  time: "Tottenham",         pts: 54, j: 35, v: 15, e: 9,  d: 11, gp: 55, gc: 52, sg: 3,   zona: "conference" },
    { pos: 8,  time: "Manchester United", pts: 48, j: 35, v: 13, e: 9,  d: 13, gp: 44, gc: 49, sg: -5,  zona: "neutro" },
    { pos: 9,  time: "Brighton",          pts: 46, j: 35, v: 12, e: 10, d: 13, gp: 50, gc: 51, sg: -1,  zona: "neutro" },
    { pos: 10, time: "West Ham",          pts: 43, j: 35, v: 11, e: 10, d: 14, gp: 42, gc: 52, sg: -10, zona: "neutro" },
    { pos: 11, time: "Fulham",            pts: 42, j: 35, v: 11, e: 9,  d: 15, gp: 45, gc: 55, sg: -10, zona: "neutro" },
    { pos: 12, time: "Brentford",         pts: 40, j: 35, v: 10, e: 10, d: 15, gp: 44, gc: 56, sg: -12, zona: "neutro" },
    { pos: 13, time: "Wolves",            pts: 37, j: 35, v: 9,  e: 10, d: 16, gp: 39, gc: 57, sg: -18, zona: "neutro" },
    { pos: 14, time: "Crystal Palace",    pts: 35, j: 35, v: 9,  e: 8,  d: 18, gp: 36, gc: 58, sg: -22, zona: "neutro" },
    { pos: 15, time: "Everton",           pts: 34, j: 35, v: 8,  e: 10, d: 17, gp: 33, gc: 55, sg: -22, zona: "neutro" },
    { pos: 16, time: "Nottingham Forest", pts: 33, j: 35, v: 8,  e: 9,  d: 18, gp: 37, gc: 60, sg: -23, zona: "neutro" },
    { pos: 17, time: "Bournemouth",       pts: 32, j: 35, v: 8,  e: 8,  d: 19, gp: 40, gc: 64, sg: -24, zona: "neutro" },
    { pos: 18, time: "Ipswich Town",      pts: 24, j: 35, v: 5,  e: 9,  d: 21, gp: 32, gc: 68, sg: -36, zona: "rebaixamento" },
    { pos: 19, time: "Leicester City",    pts: 21, j: 35, v: 5,  e: 6,  d: 24, gp: 30, gc: 72, sg: -42, zona: "rebaixamento" },
    { pos: 20, time: "Southampton",       pts: 14, j: 35, v: 3,  e: 5,  d: 27, gp: 22, gc: 78, sg: -56, zona: "rebaixamento" },
  ],
  jogosPassados: [
    // ── Rodada 34 ──
    { data: "03/05/2026", hora: "12h30", timeA: "Arsenal",           timeB: "Liverpool",       placarA: 1, placarB: 2, estadio: "Emirates Stadium",      rodada: 34 },
    { data: "03/05/2026", hora: "15h00", timeA: "Chelsea",           timeB: "Wolves",           placarA: 3, placarB: 0, estadio: "Stamford Bridge",        rodada: 34 },
    { data: "03/05/2026", hora: "15h00", timeA: "Everton",           timeB: "Brighton",         placarA: 1, placarB: 1, estadio: "Goodison Park",          rodada: 34 },
    { data: "03/05/2026", hora: "15h00", timeA: "Fulham",            timeB: "Ipswich Town",     placarA: 2, placarB: 0, estadio: "Craven Cottage",         rodada: 34 },
    { data: "03/05/2026", hora: "17h30", timeA: "Manchester City",   timeB: "Tottenham",        placarA: 2, placarB: 2, estadio: "Etihad Stadium",         rodada: 34 },
    { data: "04/05/2026", hora: "14h00", timeA: "Aston Villa",       timeB: "Brentford",        placarA: 3, placarB: 1, estadio: "Villa Park",             rodada: 34 },
    { data: "04/05/2026", hora: "14h00", timeA: "Crystal Palace",    timeB: "Bournemouth",      placarA: 0, placarB: 0, estadio: "Selhurst Park",          rodada: 34 },
    { data: "04/05/2026", hora: "14h00", timeA: "Leicester City",    timeB: "Southampton",      placarA: 2, placarB: 1, estadio: "King Power Stadium",     rodada: 34 },
    { data: "04/05/2026", hora: "14h00", timeA: "West Ham",          timeB: "Nottingham Forest",placarA: 1, placarB: 2, estadio: "London Stadium",         rodada: 34 },
    { data: "04/05/2026", hora: "16h30", timeA: "Newcastle",         timeB: "Manchester United",placarA: 2, placarB: 0, estadio: "St. James' Park",        rodada: 34 },

    // ── Rodada 35 ──
    { data: "10/05/2026", hora: "12h30", timeA: "Liverpool",         timeB: "Aston Villa",      placarA: 3, placarB: 1, estadio: "Anfield",                rodada: 35 },
    { data: "10/05/2026", hora: "15h00", timeA: "Brentford",         timeB: "Crystal Palace",   placarA: 1, placarB: 1, estadio: "Gtech Community Stadium",rodada: 35 },
    { data: "10/05/2026", hora: "15h00", timeA: "Brighton",          timeB: "Fulham",            placarA: 2, placarB: 0, estadio: "Amex Stadium",           rodada: 35 },
    { data: "10/05/2026", hora: "15h00", timeA: "Ipswich Town",      timeB: "Leicester City",   placarA: 1, placarB: 0, estadio: "Portman Road",           rodada: 35 },
    { data: "10/05/2026", hora: "15h00", timeA: "Nottingham Forest", timeB: "Everton",          placarA: 2, placarB: 1, estadio: "City Ground",            rodada: 35 },
    { data: "10/05/2026", hora: "17h30", timeA: "Arsenal",           timeB: "Newcastle",        placarA: 2, placarB: 1, estadio: "Emirates Stadium",       rodada: 35 },
    { data: "11/05/2026", hora: "14h00", timeA: "Bournemouth",       timeB: "West Ham",         placarA: 1, placarB: 1, estadio: "Vitality Stadium",       rodada: 35 },
    { data: "11/05/2026", hora: "14h00", timeA: "Manchester United", timeB: "Chelsea",          placarA: 1, placarB: 3, estadio: "Old Trafford",           rodada: 35 },
    { data: "11/05/2026", hora: "14h00", timeA: "Southampton",       timeB: "Wolves",           placarA: 0, placarB: 2, estadio: "St. Mary's Stadium",     rodada: 35 },
    { data: "11/05/2026", hora: "16h30", timeA: "Tottenham",         timeB: "Manchester City",  placarA: 1, placarB: 2, estadio: "Tottenham Hotspur Stadium",rodada: 35 },
  ],
  proximosJogos: [
    // ── Rodada 36 ──
    { data: "17/05/2026", hora: "12h30", timeA: "Liverpool",         timeB: "Chelsea",          estadio: "Anfield",                rodada: 36 },
    { data: "17/05/2026", hora: "15h00", timeA: "Aston Villa",       timeB: "Nottingham Forest",estadio: "Villa Park",             rodada: 36 },
    { data: "17/05/2026", hora: "15h00", timeA: "Brighton",          timeB: "Wolves",            estadio: "Amex Stadium",           rodada: 36 },
    { data: "17/05/2026", hora: "15h00", timeA: "Everton",           timeB: "Southampton",      estadio: "Goodison Park",          rodada: 36 },
    { data: "17/05/2026", hora: "15h00", timeA: "Fulham",            timeB: "Brentford",        estadio: "Craven Cottage",         rodada: 36 },
    { data: "17/05/2026", hora: "17h30", timeA: "Arsenal",           timeB: "Manchester City",  estadio: "Emirates Stadium",       rodada: 36 },
    { data: "18/05/2026", hora: "14h00", timeA: "Crystal Palace",    timeB: "Ipswich Town",     estadio: "Selhurst Park",          rodada: 36 },
    { data: "18/05/2026", hora: "14h00", timeA: "Leicester City",    timeB: "Bournemouth",      estadio: "King Power Stadium",     rodada: 36 },
    { data: "18/05/2026", hora: "14h00", timeA: "Newcastle",         timeB: "West Ham",         estadio: "St. James' Park",        rodada: 36 },
    { data: "18/05/2026", hora: "16h30", timeA: "Tottenham",         timeB: "Manchester United",estadio: "Tottenham Hotspur Stadium",rodada: 36 },
  ]
};

export const laLiga = {
  id: "la-liga-2025-26",
  nome: "La Liga",
  nomeCompleto: "LaLiga EA Sports 2025/26",
  edicao: "2025/26",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LaLiga_logo_2023.svg/1280px-LaLiga_logo_2023.svg.png",
  cor: "#ee8707",
  fase: "Rodada 36 (em andamento)",
  tabela: [
    { pos: 1,  time: "Real Madrid",    pts: 80, j: 35, v: 24, e: 8,  d: 3,  gp: 74, gc: 32, sg: 42,  zona: "champions" },
    { pos: 2,  time: "Barcelona",      pts: 76, j: 35, v: 23, e: 7,  d: 5,  gp: 80, gc: 38, sg: 42,  zona: "champions" },
    { pos: 3,  time: "Atlético Madrid",pts: 68, j: 35, v: 20, e: 8,  d: 7,  gp: 62, gc: 35, sg: 27,  zona: "champions" },
    { pos: 4,  time: "Athletic Club",  pts: 62, j: 35, v: 18, e: 8,  d: 9,  gp: 52, gc: 38, sg: 14,  zona: "champions" },
    { pos: 5,  time: "Villarreal",     pts: 58, j: 35, v: 16, e: 10, d: 9,  gp: 55, gc: 43, sg: 12,  zona: "europa" },
    { pos: 6,  time: "Real Betis",     pts: 54, j: 35, v: 15, e: 9,  d: 11, gp: 50, gc: 46, sg: 4,   zona: "europa" },
    { pos: 7,  time: "Real Sociedad",  pts: 50, j: 35, v: 14, e: 8,  d: 13, gp: 47, gc: 48, sg: -1,  zona: "conference" },
    { pos: 8,  time: "Sevilla",        pts: 46, j: 35, v: 12, e: 10, d: 13, gp: 44, gc: 47, sg: -3,  zona: "neutro" },
    { pos: 9,  time: "Girona",         pts: 44, j: 35, v: 12, e: 8,  d: 15, gp: 48, gc: 52, sg: -4,  zona: "neutro" },
    { pos: 10, time: "Osasuna",        pts: 42, j: 35, v: 11, e: 9,  d: 15, gp: 40, gc: 50, sg: -10, zona: "neutro" },
    { pos: 11, time: "Celta Vigo",     pts: 40, j: 35, v: 10, e: 10, d: 15, gp: 42, gc: 53, sg: -11, zona: "neutro" },
    { pos: 12, time: "Mallorca",       pts: 38, j: 35, v: 10, e: 8,  d: 17, gp: 35, gc: 52, sg: -17, zona: "neutro" },
    { pos: 13, time: "Rayo Vallecano", pts: 37, j: 35, v: 9,  e: 10, d: 16, gp: 38, gc: 55, sg: -17, zona: "neutro" },
    { pos: 14, time: "Las Palmas",     pts: 35, j: 35, v: 9,  e: 8,  d: 18, gp: 34, gc: 57, sg: -23, zona: "neutro" },
    { pos: 15, time: "Getafe",         pts: 33, j: 35, v: 8,  e: 9,  d: 18, gp: 30, gc: 55, sg: -25, zona: "neutro" },
    { pos: 16, time: "Leganés",        pts: 32, j: 35, v: 7,  e: 11, d: 17, gp: 32, gc: 58, sg: -26, zona: "neutro" },
    { pos: 17, time: "Deportivo Alavés",pts: 30,j: 35, v: 7,  e: 9,  d: 19, gp: 28, gc: 60, sg: -32, zona: "neutro" },
    { pos: 18, time: "Espanyol",       pts: 27, j: 35, v: 6,  e: 9,  d: 20, gp: 30, gc: 64, sg: -34, zona: "rebaixamento" },
    { pos: 19, time: "Real Valladolid",pts: 23, j: 35, v: 5,  e: 8,  d: 22, gp: 25, gc: 68, sg: -43, zona: "rebaixamento" },
    { pos: 20, time: "Valencia",       pts: 19, j: 35, v: 4,  e: 7,  d: 24, gp: 22, gc: 72, sg: -50, zona: "rebaixamento" },
  ],
  jogosPassados: [
    // ── Rodada 34 ──
    { data: "03/05/2026", hora: "14h00", timeA: "Barcelona",       timeB: "Real Betis",      placarA: 3, placarB: 1, estadio: "Estadi Olímpic Lluís Companys", rodada: 34 },
    { data: "03/05/2026", hora: "16h15", timeA: "Atlético Madrid", timeB: "Osasuna",         placarA: 2, placarB: 0, estadio: "Civitas Metropolitano",         rodada: 34 },
    { data: "03/05/2026", hora: "18h30", timeA: "Real Madrid",     timeB: "Sevilla",         placarA: 4, placarB: 0, estadio: "Santiago Bernabéu",             rodada: 34 },
    { data: "04/05/2026", hora: "14h00", timeA: "Celta Vigo",      timeB: "Leganés",         placarA: 1, placarB: 1, estadio: "Abanca-Balaídos",               rodada: 34 },
    { data: "04/05/2026", hora: "16h15", timeA: "Athletic Club",   timeB: "Villarreal",      placarA: 2, placarB: 1, estadio: "San Mamés",                     rodada: 34 },
    { data: "04/05/2026", hora: "18h30", timeA: "Real Sociedad",   timeB: "Girona",          placarA: 1, placarB: 2, estadio: "Reale Arena",                   rodada: 34 },

    // ── Rodada 35 ──
    { data: "10/05/2026", hora: "14h00", timeA: "Sevilla",         timeB: "Espanyol",        placarA: 2, placarB: 0, estadio: "Ramón Sánchez-Pizjuán",         rodada: 35 },
    { data: "10/05/2026", hora: "16h15", timeA: "Real Madrid",     timeB: "Athletic Club",   placarA: 2, placarB: 2, estadio: "Santiago Bernabéu",             rodada: 35 },
    { data: "10/05/2026", hora: "18h30", timeA: "Barcelona",       timeB: "Celta Vigo",      placarA: 5, placarB: 1, estadio: "Estadi Olímpic Lluís Companys", rodada: 35 },
    { data: "11/05/2026", hora: "14h00", timeA: "Villarreal",      timeB: "Las Palmas",      placarA: 2, placarB: 0, estadio: "Estadio de la Cerámica",        rodada: 35 },
    { data: "11/05/2026", hora: "16h15", timeA: "Girona",          timeB: "Atlético Madrid", placarA: 0, placarB: 3, estadio: "Estadi Municipal de Montilivi", rodada: 35 },
    { data: "11/05/2026", hora: "18h30", timeA: "Real Betis",      timeB: "Real Sociedad",   placarA: 1, placarB: 0, estadio: "Estadio Benito Villamarín",     rodada: 35 },
  ],
  proximosJogos: [
    // ── Rodada 36 ──
    { data: "17/05/2026", hora: "14h00", timeA: "Espanyol",         timeB: "Real Madrid",    estadio: "RCDE Stadium",                   rodada: 36 },
    { data: "17/05/2026", hora: "16h15", timeA: "Athletic Club",    timeB: "Atlético Madrid",estadio: "San Mamés",                      rodada: 36 },
    { data: "17/05/2026", hora: "18h30", timeA: "Barcelona",        timeB: "Villarreal",     estadio: "Estadi Olímpic Lluís Companys",  rodada: 36 },
    { data: "18/05/2026", hora: "14h00", timeA: "Las Palmas",       timeB: "Sevilla",        estadio: "Estadio Gran Canaria",           rodada: 36 },
    { data: "18/05/2026", hora: "16h15", timeA: "Real Sociedad",    timeB: "Celta Vigo",     estadio: "Reale Arena",                   rodada: 36 },
    { data: "18/05/2026", hora: "18h30", timeA: "Osasuna",          timeB: "Real Betis",     estadio: "El Sadar",                      rodada: 36 },
  ]
};

export const bundesliga = {
  id: "bundesliga-2025-26",
  nome: "Bundesliga",
  nomeCompleto: "Bundesliga 2025/26",
  edicao: "2025/26",
  logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg",
  cor: "#d3011f",
  fase: "Rodada 33 (em andamento)",
  tabela: [
    { pos: 1,  time: "Bayern München",    pts: 73, j: 32, v: 22, e: 7,  d: 3,  gp: 84, gc: 38, sg: 46,  zona: "champions" },
    { pos: 2,  time: "Bayer Leverkusen",  pts: 68, j: 32, v: 20, e: 8,  d: 4,  gp: 72, gc: 35, sg: 37,  zona: "champions" },
    { pos: 3,  time: "Borussia Dortmund", pts: 62, j: 32, v: 18, e: 8,  d: 6,  gp: 66, gc: 42, sg: 24,  zona: "champions" },
    { pos: 4,  time: "RB Leipzig",        pts: 57, j: 32, v: 16, e: 9,  d: 7,  gp: 58, gc: 38, sg: 20,  zona: "champions" },
    { pos: 5,  time: "Eintracht Frankfurt",pts: 52,j: 32, v: 14, e: 10, d: 8,  gp: 52, gc: 44, sg: 8,   zona: "europa" },
    { pos: 6,  time: "SC Freiburg",       pts: 48, j: 32, v: 13, e: 9,  d: 10, gp: 46, gc: 42, sg: 4,   zona: "conference" },
    { pos: 7,  time: "VfB Stuttgart",     pts: 46, j: 32, v: 12, e: 10, d: 10, gp: 50, gc: 48, sg: 2,   zona: "neutro" },
    { pos: 8,  time: "Werder Bremen",     pts: 42, j: 32, v: 11, e: 9,  d: 12, gp: 44, gc: 49, sg: -5,  zona: "neutro" },
    { pos: 9,  time: "Borussia M'gladbach",pts: 40,j: 32, v: 10, e: 10, d: 12, gp: 42, gc: 50, sg: -8,  zona: "neutro" },
    { pos: 10, time: "Wolfsburg",         pts: 37, j: 32, v: 9,  e: 10, d: 13, gp: 38, gc: 50, sg: -12, zona: "neutro" },
    { pos: 11, time: "Hoffenheim",        pts: 35, j: 32, v: 9,  e: 8,  d: 15, gp: 40, gc: 54, sg: -14, zona: "neutro" },
    { pos: 12, time: "Augsburg",          pts: 33, j: 32, v: 8,  e: 9,  d: 15, gp: 36, gc: 55, sg: -19, zona: "neutro" },
    { pos: 13, time: "Union Berlin",      pts: 31, j: 32, v: 7,  e: 10, d: 15, gp: 34, gc: 55, sg: -21, zona: "neutro" },
    { pos: 14, time: "Mainz",             pts: 30, j: 32, v: 7,  e: 9,  d: 16, gp: 36, gc: 58, sg: -22, zona: "neutro" },
    { pos: 15, time: "Heidenheim",        pts: 28, j: 32, v: 6,  e: 10, d: 16, gp: 30, gc: 58, sg: -28, zona: "neutro" },
    { pos: 16, time: "FC Köln",           pts: 26, j: 32, v: 5,  e: 11, d: 16, gp: 30, gc: 60, sg: -30, zona: "repescagem" },
    { pos: 17, time: "VfL Bochum",        pts: 22, j: 32, v: 4,  e: 10, d: 18, gp: 26, gc: 65, sg: -39, zona: "rebaixamento" },
    { pos: 18, time: "Holstein Kiel",     pts: 17, j: 32, v: 3,  e: 8,  d: 21, gp: 24, gc: 78, sg: -54, zona: "rebaixamento" },
  ],
  jogosPassados: [
    // ── Rodada 31 ──
    { data: "03/05/2026", hora: "15h30", timeA: "Bayer Leverkusen",  timeB: "Bayern München",    placarA: 1, placarB: 2, estadio: "BayArena",               rodada: 31 },
    { data: "03/05/2026", hora: "15h30", timeA: "Borussia Dortmund", timeB: "RB Leipzig",        placarA: 3, placarB: 1, estadio: "Signal Iduna Park",       rodada: 31 },
    { data: "03/05/2026", hora: "15h30", timeA: "Eintracht Frankfurt",timeB: "Wolfsburg",        placarA: 2, placarB: 0, estadio: "Deutsche Bank Park",      rodada: 31 },
    { data: "03/05/2026", hora: "18h30", timeA: "SC Freiburg",       timeB: "VfB Stuttgart",     placarA: 1, placarB: 1, estadio: "Europa-Park Stadion",     rodada: 31 },

    // ── Rodada 32 ──
    { data: "10/05/2026", hora: "15h30", timeA: "Bayern München",    timeB: "Borussia Dortmund", placarA: 3, placarB: 0, estadio: "Allianz Arena",           rodada: 32 },
    { data: "10/05/2026", hora: "15h30", timeA: "RB Leipzig",        timeB: "Eintracht Frankfurt",placarA: 2, placarB: 1, estadio: "Red Bull Arena",         rodada: 32 },
    { data: "10/05/2026", hora: "15h30", timeA: "Wolfsburg",         timeB: "Hoffenheim",        placarA: 1, placarB: 1, estadio: "Volkswagen Arena",        rodada: 32 },
    { data: "10/05/2026", hora: "18h30", timeA: "Bayer Leverkusen",  timeB: "SC Freiburg",       placarA: 2, placarB: 0, estadio: "BayArena",                rodada: 32 },
    { data: "11/05/2026", hora: "15h30", timeA: "VfL Bochum",        timeB: "Holstein Kiel",     placarA: 0, placarB: 1, estadio: "Vonovia Ruhrstadion",     rodada: 32 },
    { data: "11/05/2026", hora: "17h30", timeA: "Borussia M'gladbach",timeB: "Union Berlin",     placarA: 2, placarB: 0, estadio: "Borussia-Park",           rodada: 32 },
  ],
  proximosJogos: [
    // ── Rodada 33 ──
    { data: "17/05/2026", hora: "15h30", timeA: "Bayern München",    timeB: "RB Leipzig",        estadio: "Allianz Arena",           rodada: 33 },
    { data: "17/05/2026", hora: "15h30", timeA: "Bayer Leverkusen",  timeB: "Borussia Dortmund", estadio: "BayArena",                rodada: 33 },
    { data: "17/05/2026", hora: "15h30", timeA: "SC Freiburg",       timeB: "Eintracht Frankfurt",estadio: "Europa-Park Stadion",    rodada: 33 },
    { data: "17/05/2026", hora: "15h30", timeA: "Holstein Kiel",     timeB: "VfL Bochum",        estadio: "Holstein-Stadion",        rodada: 33 },
    { data: "17/05/2026", hora: "15h30", timeA: "Hoffenheim",        timeB: "Augsburg",           estadio: "PreZero Arena",           rodada: 33 },
    { data: "17/05/2026", hora: "15h30", timeA: "Mainz",             timeB: "Werder Bremen",     estadio: "MEWA Arena",              rodada: 33 },
    { data: "17/05/2026", hora: "15h30", timeA: "Union Berlin",      timeB: "Heidenheim",        estadio: "An der Alten Försterei",  rodada: 33 },
    { data: "17/05/2026", hora: "15h30", timeA: "VfB Stuttgart",     timeB: "FC Köln",           estadio: "MHP Arena",               rodada: 33 },
    { data: "17/05/2026", hora: "15h30", timeA: "Wolfsburg",         timeB: "Borussia M'gladbach",estadio: "Volkswagen Arena",       rodada: 33 },
  ]
};

export const championsLeague = {
  id: "champions-league-2026",
  nome: "Champions League",
  nomeCompleto: "UEFA Champions League 2025/26",
  edicao: "2025/26",
  logo: "https://upload.wikimedia.org/wikipedia/pt/9/9b/116px-UEFA_Champions_League_logo_2_svg.png",
  cor: "#0A1E5E",
  fase: "Quartas de final",

  tabela: null, // Champions League é mata-mata nesta fase

  confrontos: [
    // ── Quartas de final — ida ──
    { 
      data: "07/04/2026",
      hora: "16h00",
      timeA: "Real Madrid",
      timeB: "Manchester City",
      placarA: 2,
      placarB: 1,
      estadio: "Santiago Bernabéu",
      fase: "Quartas de final - ida"
    },

    { 
      data: "07/04/2026",
      hora: "16h00",
      timeA: "Bayern München",
      timeB: "Arsenal",
      placarA: 1,
      placarB: 1,
      estadio: "Allianz Arena",
      fase: "Quartas de final - ida"
    },

    { 
      data: "08/04/2026",
      hora: "16h00",
      timeA: "Paris Saint-Germain",
      timeB: "Barcelona",
      placarA: 3,
      placarB: 2,
      estadio: "Parc des Princes",
      fase: "Quartas de final - ida"
    },

    { 
      data: "08/04/2026",
      hora: "16h00",
      timeA: "Inter de Milão",
      timeB: "Liverpool",
      placarA: 0,
      placarB: 0,
      estadio: "San Siro",
      fase: "Quartas de final - ida"
    },

    // ── Quartas de final — volta ──
    { 
      data: "14/04/2026",
      hora: "16h00",
      timeA: "Manchester City",
      timeB: "Real Madrid",
      placarA: 2,
      placarB: 2,
      estadio: "Etihad Stadium",
      fase: "Quartas de final - volta"
    },

    { 
      data: "14/04/2026",
      hora: "16h00",
      timeA: "Arsenal",
      timeB: "Bayern München",
      placarA: 2,
      placarB: 0,
      estadio: "Emirates Stadium",
      fase: "Quartas de final - volta"
    },
  ],

  proximosJogos: [
    { 
      data: "15/04/2026",
      hora: "16h00",
      timeA: "Barcelona",
      timeB: "Paris Saint-Germain",
      estadio: "Spotify Camp Nou",
      fase: "Quartas de final - volta"
    },

    { 
      data: "15/04/2026",
      hora: "16h00",
      timeA: "Liverpool",
      timeB: "Inter de Milão",
      estadio: "Anfield",
      fase: "Quartas de final - volta"
    },

    // ── Semifinais ──
    { 
      data: "28/04/2026",
      hora: "16h00",
      timeA: "Real Madrid",
      timeB: "Arsenal",
      estadio: "Santiago Bernabéu",
      fase: "Semifinal - ida"
    },

    { 
      data: "29/04/2026",
      hora: "16h00",
      timeA: "Paris Saint-Germain",
      timeB: "Liverpool",
      estadio: "Parc des Princes",
      fase: "Semifinal - ida"
    },
  ]
};

export const serieA = {
  id: "serie-a-2025-26",
  nome: "Serie A",
  nomeCompleto: "Serie A 2025/26",
  edicao: "2025/26",
  logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Serie_A.png",
  cor: "#024494",
  fase: "Rodada 36 (em andamento)",
  tabela: [
    { pos: 1,  time: "Napoli",            pts: 79, j: 35, v: 24, e: 7,  d: 4,  gp: 68, gc: 28, sg: 40,  zona: "champions" },
    { pos: 2,  time: "Inter de Milão",    pts: 76, j: 35, v: 23, e: 7,  d: 5,  gp: 71, gc: 30, sg: 41,  zona: "champions" },
    { pos: 3,  time: "Juventus",          pts: 70, j: 35, v: 21, e: 7,  d: 7,  gp: 60, gc: 34, sg: 26,  zona: "champions" },
    { pos: 4,  time: "AC Milan",          pts: 65, j: 35, v: 19, e: 8,  d: 8,  gp: 62, gc: 38, sg: 24,  zona: "champions" },
    { pos: 5,  time: "Atalanta",          pts: 60, j: 35, v: 17, e: 9,  d: 9,  gp: 66, gc: 44, sg: 22,  zona: "europa" },
    { pos: 6,  time: "Lazio",             pts: 56, j: 35, v: 16, e: 8,  d: 11, gp: 55, gc: 45, sg: 10,  zona: "europa" },
    { pos: 7,  time: "Roma",              pts: 52, j: 35, v: 14, e: 10, d: 11, gp: 52, gc: 48, sg: 4,   zona: "conference" },
    { pos: 8,  time: "Fiorentina",        pts: 48, j: 35, v: 13, e: 9,  d: 13, gp: 48, gc: 48, sg: 0,   zona: "neutro" },
    { pos: 9,  time: "Torino",            pts: 44, j: 35, v: 12, e: 8,  d: 15, gp: 42, gc: 50, sg: -8,  zona: "neutro" },
    { pos: 10, time: "Bologna",           pts: 43, j: 35, v: 11, e: 10, d: 14, gp: 44, gc: 50, sg: -6,  zona: "neutro" },
    { pos: 11, time: "Udinese",           pts: 40, j: 35, v: 10, e: 10, d: 15, gp: 38, gc: 50, sg: -12, zona: "neutro" },
    { pos: 12, time: "Genoa",             pts: 37, j: 35, v: 9,  e: 10, d: 16, gp: 36, gc: 52, sg: -16, zona: "neutro" },
    { pos: 13, time: "Cagliari",          pts: 36, j: 35, v: 9,  e: 9,  d: 17, gp: 38, gc: 56, sg: -18, zona: "neutro" },
    { pos: 14, time: "Hellas Verona",     pts: 34, j: 35, v: 8,  e: 10, d: 17, gp: 35, gc: 58, sg: -23, zona: "neutro" },
    { pos: 15, time: "Parma",             pts: 32, j: 35, v: 7,  e: 11, d: 17, gp: 34, gc: 58, sg: -24, zona: "neutro" },
    { pos: 16, time: "Como",              pts: 31, j: 35, v: 7,  e: 10, d: 18, gp: 32, gc: 60, sg: -28, zona: "neutro" },
    { pos: 17, time: "Lecce",             pts: 29, j: 35, v: 6,  e: 11, d: 18, gp: 30, gc: 62, sg: -32, zona: "neutro" },
    { pos: 18, time: "Empoli",            pts: 27, j: 35, v: 6,  e: 9,  d: 20, gp: 28, gc: 64, sg: -36, zona: "rebaixamento" },
    { pos: 19, time: "Venezia",           pts: 22, j: 35, v: 4,  e: 10, d: 21, gp: 24, gc: 68, sg: -44, zona: "rebaixamento" },
    { pos: 20, time: "Monza",             pts: 18, j: 35, v: 3,  e: 9,  d: 23, gp: 22, gc: 75, sg: -53, zona: "rebaixamento" },
  ],
  jogosPassados: [
    // ── Rodada 34 ──
    { data: "03/05/2026", hora: "12h30", timeA: "Inter de Milão",   timeB: "Juventus",        placarA: 2, placarB: 2, estadio: "San Siro",                   rodada: 34 },
    { data: "03/05/2026", hora: "15h00", timeA: "AC Milan",         timeB: "Atalanta",        placarA: 1, placarB: 2, estadio: "San Siro",                   rodada: 34 },
    { data: "03/05/2026", hora: "15h00", timeA: "Lazio",            timeB: "Fiorentina",      placarA: 2, placarB: 0, estadio: "Stadio Olimpico",            rodada: 34 },
    { data: "03/05/2026", hora: "18h45", timeA: "Napoli",           timeB: "Roma",            placarA: 2, placarB: 1, estadio: "Diego Armando Maradona",     rodada: 34 },
    { data: "04/05/2026", hora: "12h30", timeA: "Bologna",          timeB: "Cagliari",        placarA: 3, placarB: 0, estadio: "Stadio Renato Dall'Ara",     rodada: 34 },
    { data: "04/05/2026", hora: "15h00", timeA: "Genoa",            timeB: "Parma",           placarA: 1, placarB: 1, estadio: "Stadio Luigi Ferraris",      rodada: 34 },
    { data: "04/05/2026", hora: "18h45", timeA: "Torino",           timeB: "Udinese",         placarA: 2, placarB: 1, estadio: "Stadio Olimpico Grande Torino",rodada: 34 },

    // ── Rodada 35 ──
    { data: "10/05/2026", hora: "12h30", timeA: "Napoli",           timeB: "Inter de Milão",  placarA: 1, placarB: 1, estadio: "Diego Armando Maradona",     rodada: 35 },
    { data: "10/05/2026", hora: "15h00", timeA: "Atalanta",         timeB: "Roma",            placarA: 3, placarB: 1, estadio: "Gewiss Stadium",             rodada: 35 },
    { data: "10/05/2026", hora: "15h00", timeA: "Juventus",         timeB: "Lazio",           placarA: 2, placarB: 0, estadio: "Juventus Stadium",           rodada: 35 },
    { data: "10/05/2026", hora: "18h45", timeA: "AC Milan",         timeB: "Fiorentina",      placarA: 2, placarB: 1, estadio: "San Siro",                   rodada: 35 },
    { data: "11/05/2026", hora: "15h00", timeA: "Empoli",           timeB: "Monza",           placarA: 1, placarB: 0, estadio: "Stadio Carlo Castellani",    rodada: 35 },
    { data: "11/05/2026", hora: "18h45", timeA: "Udinese",          timeB: "Venezia",         placarA: 2, placarB: 0, estadio: "Dacia Arena",                rodada: 35 },
  ],
  proximosJogos: [
    // ── Rodada 36 ──
    { data: "17/05/2026", hora: "12h30", timeA: "Inter de Milão",   timeB: "Napoli",          estadio: "San Siro",                    rodada: 36 },
    { data: "17/05/2026", hora: "15h00", timeA: "Juventus",         timeB: "AC Milan",        estadio: "Juventus Stadium",            rodada: 36 },
    { data: "17/05/2026", hora: "15h00", timeA: "Roma",             timeB: "Lazio",           estadio: "Stadio Olimpico",             rodada: 36 },
    { data: "17/05/2026", hora: "18h45", timeA: "Atalanta",         timeB: "Bologna",         estadio: "Gewiss Stadium",              rodada: 36 },
    { data: "18/05/2026", hora: "12h30", timeA: "Fiorentina",       timeB: "Torino",          estadio: "Stadio Artemio Franchi",      rodada: 36 },
    { data: "18/05/2026", hora: "15h00", timeA: "Cagliari",         timeB: "Empoli",          estadio: "Sardegna Arena",              rodada: 36 },
    { data: "18/05/2026", hora: "15h00", timeA: "Genoa",            timeB: "Hellas Verona",   estadio: "Stadio Luigi Ferraris",       rodada: 36 },
    { data: "18/05/2026", hora: "15h00", timeA: "Monza",            timeB: "Venezia",         estadio: "U-Power Stadium",             rodada: 36 },
    { data: "18/05/2026", hora: "18h45", timeA: "Lecce",            timeB: "Udinese",         estadio: "Via del Mare",                rodada: 36 },
  ]
};

// ── CAMPEONATOS ESTADUAIS (já encerrados) ──

export const paulista = {
  id: "paulista-2026",
  nome: "Paulistão",
  nomeCompleto: "Campeonato Paulista Betano 2026",
  edicao: "2026",
  logo: "https://vectorseek.com/wp-content/uploads/2023/12/PAULISTAO-Logo-Vector.svg-.png",
  cor: "#003399",
  fase: "Encerrado",
  campeao: "Palmeiras",
  vice: "Novorizontino",
  tabela: [
    { pos: 1, time: "Palmeiras",     pts: 28, j: 12, v: 9, e: 1, d: 2, gp: 25, gc: 10, sg: 15, grupo: "A" },
    { pos: 2, time: "São Paulo",     pts: 22, j: 12, v: 7, e: 1, d: 4, gp: 18, gc: 14, sg: 4,  grupo: "B" },
    { pos: 3, time: "Corinthians",   pts: 20, j: 12, v: 6, e: 2, d: 4, gp: 16, gc: 13, sg: 3,  grupo: "C" },
    { pos: 4, time: "Novorizontino", pts: 18, j: 12, v: 5, e: 3, d: 4, gp: 14, gc: 13, sg: 1,  grupo: "D" },
  ],
  jogosPassados: [
    // ── Quartas de final ──
    { data: "21/02/2026", hora: "18h30", timeA: "Red Bull Bragantino",  timeB: "São Paulo",    placarA: 1, placarB: 2, estadio: "Cícero de Souza Marques", fase: "Quartas de final" },
    { data: "21/02/2026", hora: "20h30", timeA: "Palmeiras",   timeB: "Capivariano",  placarA: 4, placarB: 0, estadio: "Arena Barueri",            fase: "Quartas de final" },
    { data: "22/02/2026", hora: "16h00", timeA: "Novorizontino",timeB: "Santos",      placarA: 2, placarB: 1, estadio: "Jorge Ismael de Biasi",     fase: "Quartas de final" },
    { data: "22/02/2026", hora: "20h30", timeA: "Portuguesa",  timeB: "Corinthians",  placarA: 1, placarB: 1, estadio: "Canindé",                   fase: "Quartas de final (Corinthians avançou nos pênaltis 7x8)" },

    // ── Semifinais ──
    { data: "28/02/2026", hora: "20h30", timeA: "Novorizontino",timeB: "Corinthians", placarA: 1, placarB: 0, estadio: "Jorge Ismael de Biasi",     fase: "Semifinal" },
    { data: "01/03/2026", hora: "20h30", timeA: "Palmeiras",   timeB: "São Paulo",    placarA: 2, placarB: 1, estadio: "Arena Barueri",              fase: "Semifinal" },

    // ── Final ──
    { data: "04/03/2026", hora: "20h00", timeA: "Palmeiras",   timeB: "Novorizontino",placarA: 1, placarB: 0, estadio: "Arena Barueri",              fase: "Final - ida" },
    { data: "08/03/2026", hora: "20h30", timeA: "Novorizontino",timeB: "Palmeiras",   placarA: 1, placarB: 2, estadio: "Jorge Ismael de Biasi",      fase: "Final - volta" },
  ],
  proximosJogos: []
};

export const carioca = {
  id: "carioca-2026",
  nome: "Carioca",
  nomeCompleto: "Campeonato Carioca Superbet 2026",
  edicao: "2026",
  logo: "https://upload.wikimedia.org/wikipedia/pt/f/f9/Carioca2017.png",
  cor: "#CC0000",
  fase: "Encerrado",
  campeao: "Flamengo",
  vice: "Fluminense",
  tabela: [
    { pos: 1, time: "Flamengo",   pts: 26, j: 11, v: 8, e: 2, d: 1, gp: 22, gc: 9,  sg: 13 },
    { pos: 2, time: "Fluminense", pts: 22, j: 11, v: 7, e: 1, d: 3, gp: 18, gc: 12, sg: 6  },
    { pos: 3, time: "Botafogo",   pts: 19, j: 11, v: 6, e: 1, d: 4, gp: 16, gc: 14, sg: 2  },
    { pos: 4, time: "Vasco",      pts: 15, j: 11, v: 4, e: 3, d: 4, gp: 13, gc: 14, sg: -1 },
  ],
  jogosPassados: [
    // ── Quartas de final ──
    { data: "13/02/2026", hora: "17h00", timeA: "Madureira",  timeB: "Boavista",    placarA: 2, placarB: 1, estadio: "Conselheiro Galvão",    fase: "Quartas de final" },
    { data: "14/02/2026", hora: "21h30", timeA: "Vasco",      timeB: "Volta Redonda",placarA: 1, placarB: 1, estadio: "São Januário",          fase: "Quartas de final (5x3 nos pênaltis)" },
    { data: "15/02/2026", hora: "17h30", timeA: "Botafogo",   timeB: "Flamengo",    placarA: 1, placarB: 2, estadio: "Nilton Santos",          fase: "Quartas de final" },
    { data: "16/02/2026", hora: "18h00", timeA: "Fluminense", timeB: "Bangu",       placarA: 3, placarB: 1, estadio: "Maracanã",               fase: "Quartas de final" },

    // ── Semifinais ──
    { data: "22/02/2026", hora: "18h00", timeA: "Vasco",      timeB: "Fluminense",  placarA: 0, placarB: 1, estadio: "Nilton Santos",          fase: "Semifinal - ida" },
    { data: "22/02/2026", hora: "20h30", timeA: "Flamengo",   timeB: "Madureira",   placarA: 3, placarB: 0, estadio: "Maracanã",               fase: "Semifinal - ida" },
    { data: "01/03/2026", hora: "18h00", timeA: "Fluminense", timeB: "Vasco",       placarA: 1, placarB: 1, estadio: "Maracanã",               fase: "Semifinal - volta" },
    { data: "02/03/2026", hora: "21h00", timeA: "Madureira",  timeB: "Flamengo",    placarA: 0, placarB: 8, estadio: "Maracanã",               fase: "Semifinal - volta" },

    // ── Final ──
    { data: "08/03/2026", hora: "18h00", timeA: "Fluminense", timeB: "Flamengo",    placarA: 0, placarB: 0, estadio: "Maracanã",               fase: "Final - ida (Flamengo venceu nos pênaltis 4x5)" },
    { data: "15/03/2026", hora: "16h00", timeA: "Flamengo",   timeB: "Fluminense",  placarA: 3, placarB: 1, estadio: "Maracanã",               fase: "Final - volta" },
  ],
  proximosJogos: []
};

export const mineiro = {
  id: "mineiro-2026",
  nome: "Mineiro",
  nomeCompleto: "Campeonato Mineiro Sicredi 2026",
  edicao: "2026",
  logo: "https://a3.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F2360.png",
  cor: "#003366",
  fase: "Encerrado",
  campeao: "Cruzeiro",
  vice: "Atlético-MG",
  tabela: [
    { pos: 1, time: "Atlético-MG", pts: 25, j: 11, v: 8, e: 1, d: 2, gp: 20, gc: 8,  sg: 12 },
    { pos: 2, time: "Cruzeiro",    pts: 21, j: 11, v: 6, e: 3, d: 2, gp: 17, gc: 11, sg: 6  },
    { pos: 3, time: "América-MG",  pts: 16, j: 11, v: 5, e: 1, d: 5, gp: 13, gc: 14, sg: -1 },
    { pos: 4, time: "Villa Nova",  pts: 12, j: 11, v: 3, e: 3, d: 5, gp: 10, gc: 15, sg: -5 },
  ],
  jogosPassados: [
    // ── Semifinais ──
    { data: "21/02/2026", hora: "18h30", timeA: "Pouso Alegre", timeB: "Cruzeiro",   placarA: 1, placarB: 2, estadio: "Manduzão",      fase: "Semifinal - ida" },
    { data: "22/02/2026", hora: "18h00", timeA: "Atlético-MG",  timeB: "América-MG", placarA: 1, placarB: 1, estadio: "Arena MRV",      fase: "Semifinal - ida" },
    { data: "28/02/2026", hora: "18h30", timeA: "Cruzeiro",     timeB: "Pouso Alegre",placarA: 1, placarB: 0, estadio: "Mineirão",       fase: "Semifinal - volta" },
    { data: "01/03/2026", hora: "18h00", timeA: "América-MG",   timeB: "Atlético-MG",placarA: 0, placarB: 0, estadio: "Independência",  fase: "Semifinal - volta (Atlético avançou nos pênaltis 2x4)" },

    // ── Final ──
    { data: "08/03/2026", hora: "18h00", timeA: "Cruzeiro",     timeB: "Atlético-MG",placarA: 1, placarB: 0, estadio: "Mineirão",       fase: "Final" },
  ],
  proximosJogos: []
};

export const gauchao = {
  id: "gauchao-2026",
  nome: "Gauchão",
  nomeCompleto: "Campeonato Gaúcho Ipiranga 2026",
  edicao: "2026",
  logo: "https://upload.wikimedia.org/wikipedia/pt/7/7e/Gauch%C3%A3o_2025.png",
  cor: "#006400",
  fase: "Encerrado",
  campeao: "Grêmio",
  vice: "Internacional",
  tabela: [
    { pos: 1, time: "Grêmio",        pts: 24, j: 10, v: 7, e: 3, d: 0, gp: 18, gc: 6,  sg: 12 },
    { pos: 2, time: "Internacional", pts: 20, j: 10, v: 6, e: 2, d: 2, gp: 15, gc: 9,  sg: 6  },
    { pos: 3, time: "Juventude",     pts: 14, j: 10, v: 4, e: 2, d: 4, gp: 11, gc: 12, sg: -1 },
    { pos: 4, time: "Caxias",        pts: 10, j: 10, v: 3, e: 1, d: 6, gp: 8,  gc: 16, sg: -8 },
  ],
  jogosPassados: [
    // ── Quartas de final ──
    { data: "06/02/2026", hora: "20h30", timeA: "Caxias",       timeB: "Ypiranga-RS",  placarA: 0, placarB: 2, estadio: "Centenário",      fase: "Quartas de final" },
    { data: "07/02/2026", hora: "18h30", timeA: "Grêmio",       timeB: "Novo Hamburgo",placarA: 1, placarB: 0, estadio: "Arena do Grêmio",  fase: "Quartas de final" },
    { data: "08/02/2026", hora: "18h00", timeA: "Internacional", timeB: "São Luiz",    placarA: 3, placarB: 1, estadio: "Beira-Rio",         fase: "Quartas de final" },
    { data: "09/02/2026", hora: "20h00", timeA: "Juventude",    timeB: "São José-RS",  placarA: 3, placarB: 2, estadio: "Alfredo Jaconi",    fase: "Quartas de final" },

    // ── Semifinais ──
    { data: "15/02/2026", hora: "17h30", timeA: "Grêmio",       timeB: "Juventude",   placarA: 1, placarB: 1, estadio: "Arena do Grêmio",  fase: "Semifinal - ida" },
    { data: "15/02/2026", hora: "20h30", timeA: "Ypiranga-RS",  timeB: "Internacional",placarA: 0, placarB: 3, estadio: "Colosso da Lagoa", fase: "Semifinal - ida" },
    { data: "21/02/2026", hora: "18h30", timeA: "Internacional", timeB: "Ypiranga-RS", placarA: 4, placarB: 0, estadio: "Beira-Rio",         fase: "Semifinal - volta" },
    { data: "22/02/2026", hora: "18h00", timeA: "Juventude",    timeB: "Grêmio",      placarA: 1, placarB: 1, estadio: "Alfredo Jaconi",    fase: "Semifinal - volta (Grêmio avançou nos pênaltis 1x4)" },

    // ── Final ──
    { data: "01/03/2026", hora: "18h00", timeA: "Grêmio",       timeB: "Internacional",placarA: 3, placarB: 0, estadio: "Arena do Grêmio",  fase: "Final - ida" },
    { data: "08/03/2026", hora: "18h00", timeA: "Internacional", timeB: "Grêmio",      placarA: 1, placarB: 1, estadio: "Beira-Rio",         fase: "Final - volta" },
  ],
  proximosJogos: []
};