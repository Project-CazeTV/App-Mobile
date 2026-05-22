import { StyleSheet, View, Image } from 'react-native';
import AppText from '../../components/common/AppText';
import { useCountUp } from "../../../../hooks/useCountUp/useCountUp";

function StatItem({ stat }) {
  const { value, ref } = useCountUp(stat.value);

  const displayed = stat.prefix
    ? `${stat.prefix}${value.toLocaleString("pt-BR")}${stat.suffix ?? ""}`
    : `${value.toLocaleString("pt-BR")}${stat.suffix ?? ""}`;

  return (
    <View style={styles.item} ref={ref}>
      <AppText style={styles.number}>{displayed}</AppText>
      <AppText style={styles.label}>{stat.label}</AppText>
    </View>
  );
}

export default function OlympicsStats({ stats }) {
  return (
    <View style={styles.section}>
      <View style={styles.grid}>
        {stats.map((stat) => (
          <StatItem key={stat.id} stat={stat} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: "100%",
    paddingVertical: 48,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
    marginTop: 40,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignSelf: "center",
    maxWidth: 1200,
    rowGap: 40,
  },

  item: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 10,
    borderRightWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },

  number: {
    fontSize: 32,
    fontWeight: "900",
    color: "#111",
    letterSpacing: -1.5,
    lineHeight: 32,
  },

  label: {
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(0,0,0,0.45)",
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
    maxWidth: 120,
    lineHeight: 18,
  },
});