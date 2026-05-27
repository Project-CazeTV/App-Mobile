import { StyleSheet, Text, View } from 'react-native';
import AppText from '../common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import FontTypes from '../../enumsCategories/FontTypes';

export default function SectionTitle({ title = "", simple = false, color = "#3b5bdb", number, inline = false }) {
  if (simple) {
    return (
      <View style={styles.separador}>
        <AppText style={styles.titulo}>{title}</AppText>
        <View style={[styles.separadorLinha, { backgroundColor: ColorTypes.GRAY }]} />
      </View>
    )
  }

  if (inline) {
    return (
      <View style={styles.wrapperInline}>
        <AppText style={styles.tituloInline}>{title}</AppText>
        <View
          style={{ backgroundColor: color, ...styles.separadorLinhaInline }}
        />
        {number && (
          <AppText
            style={{ color, ...styles.separadorNumero }}
          >
            {number}
          </AppText>
        )}
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.separador}>
        <View
          style={{ backgroundColor: color, ...styles.separadorLinha }}
        />
        {number && (
          <AppText
            style={{ color, ...styles.separadorNumero }}
          >
            {number}
          </AppText>
        )}
      </View>
      <AppText style={styles.titulo}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginBottom: 20,
  },

  separador: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  separadorLinha: {
    flex: 1,
    height: 3,
    borderRadius: 999,
  },

  separadorNumero: {
    fontSize: 12,
    fontWeight: 800,
    // 0.14em * 12px (0.75rem * 16px)
    letterSpacing: 1.68,
    fontFamily: `${FontTypes.COPA}, sans-serif`,
    flexShrink: 0,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 800,
    color: ColorTypes.DARK,
    margin: 0,
    lineHeight: 28,
    // -0.02em * 20px
    letterSpacing: -0.4,
  },

  wrapperInline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 20,
  },

  tituloInline: {
    fontSize: 24,
    fontWeight: 800,
    color: ColorTypes.DARK,
    margin: 0,
    lineHeight: 28,
    // -0.02em * 24px
    letterSpacing: -0.48,
    flexShrink: 0,
  },

  separadorLinhaInline: {
    flex: 1,
    height: 3,
    borderRadius: 999,
  },
});