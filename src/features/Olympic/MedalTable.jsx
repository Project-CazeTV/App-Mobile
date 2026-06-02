import { useState } from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';

const ROWS_PER_PAGE = 10;

export default function MedalTable({ edicao }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(edicao.length / ROWS_PER_PAGE);
  const pageStart = (currentPage - 1) * ROWS_PER_PAGE;
  const visibleRows = edicao.slice(pageStart, pageStart + ROWS_PER_PAGE);

  return (
    <View style={styles.section}>

      <View style={styles.header}>
        <AppText style={styles.title}>Quadro de Medalhas</AppText>
        <View style={styles.line} />
      </View>

      <View style={styles.tableWrapper}>
        <View style={styles.table}>
          <View>
            <View style={styles.headRow}>
              <AppText style={styles.thRank}>#</AppText>
              <AppText style={styles.thCountry}>País</AppText>
              <AppText style={styles.thMedal}><AppText style={[styles.dot, styles.gold]}>●</AppText></AppText>
              <AppText style={styles.thMedal}><AppText style={[styles.dot, styles.silver]}>●</AppText></AppText>
              <AppText style={styles.thMedal}><AppText style={[styles.dot, styles.bronze]}>●</AppText></AppText>
              <AppText style={styles.thTotal}>Total</AppText>
            </View>
          </View>
          <View>
            {visibleRows.map((item, index) => {
              const rank = pageStart + index + 1;
              return (
                <View key={item.id} style={styles.row}>
                  <AppText style={styles.tdRank}>{rank}</AppText>
                  <View style={styles.tdCountry}>
                    <Image style={styles.flag} source={{ uri: item.flag }} />
                    <AppText style={styles.country}>{item.country}</AppText>
                  </View>
                  <AppText style={[styles.tdMedal, styles.gold]}>{item.gold}</AppText>
                  <AppText style={[styles.tdMedal, styles.silver]}>{item.silver}</AppText>
                  <AppText style={[styles.tdMedal, styles.bronze]}>{item.bronze}</AppText>
                  <AppText style={styles.tdTotal}>{item.total}</AppText>
                </View>
              );
            })}
          </View>
        </View>
      </View>

      {totalPages > 1 && (
        <View style={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <Pressable
              key={page}
              onPress={() => setCurrentPage(page)}
            >
              <AppText style={[styles.pageBtn, page === currentPage ? styles.active : '']}>{page}</AppText>
            </Pressable>
          ))}
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: "100%",
    paddingTop: 32,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 800,
    color: "#111",
    letterSpacing: -0.3,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(0,0,0,0.12)",
  },

  tableWrapper: {
    width: "100%",
  },

  table: {
    minWidth: 480,
  },

  headRow: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0,0,0,0.10)",
    paddingVertical: 10,
  },

  th: {
    fontSize: 11,
    fontWeight: 700,
    color: "rgba(0,0,0,0.4)",
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
  },

  thRank: {
    width: 48,
    textAlign: "center",
  },

  thCountry: {
    flex: 1,
    textAlign: "left",
    paddingLeft: 20,
    textAlign: "center",
  },

  thMedal: {
    width: 52,
    textAlign: "center",
  },

  thTotal: {
    width: 60,
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.07)",
    paddingVertical: 14,
  },

  tdRank: {
    width: 48,
    textAlign: "center",
    fontSize: 13,
    fontWeight: 700,
    color: "rgba(0,0,0,0.35)",
  },

  tdCountry: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingLeft: 12,
  },

  flag: {
    width: 26,
    height: 18,
    borderRadius: 2,
    resizeMode: "cover",
  },

  country: {
    fontSize: 14,
    fontWeight: 600,
    color: "#111",
    paddingLeft: 12,
  },

  tdMedal: {
    width: 52,
    textAlign: "center",
    fontWeight: 800,
    fontSize: 14,
  },

  gold: {
    color: "#C9A824",
  },

  silver: {
    color: "#8A9197",
  },

  bronze: {
    color: "#A0622A",
  },

  tdTotal: {
    width: 60,
    textAlign: "center",
    fontWeight: 800,
    fontSize: 14,
    color: "#111",
  },

  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginTop: 20,
  },

  pageBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    color: ColorTypes.GRAYTEXT,
    opacity: 0.7,
    fontSize: 14,
  },

  active: {
    color: ColorTypes.YELLOW,
    opacity: 1,
  },
});