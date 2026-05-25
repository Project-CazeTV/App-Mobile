import { StyleSheet, Text, View } from 'react-native';
import AppText from '../common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import FontTypes from '../../enumsCategories/FontTypes';

export default function SectionTitle({ title = "", simple = false, color = "#3b5bdb", number, inline = false }) {
  if (simple) {
    return (
      <View style={styles.separador}>
        <AppText style={styles.titulo}>{title}</AppText>
        <View style={[styles.separadorLinha, {background: ColorTypes.GRAY}]} />
      </View>
    )
  }

  if (inline) {
    return (
      <View style={styles.wrapperInline}>
        <AppText style={styles.tituloInline}>{title}</AppText>
        <View
          style={{ background: color, ...styles.separadorLinhaInline }}
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
          style={{ background: color, ...styles.separadorLinha }}
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
    gap: '12px',
    marginBottom: '20px',
  },

  separador: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px',
  },

  separadorLinha: {
    flex: 1,
    height: '3px',
    borderRadius: '999px',
    display: 'block',
  },

  separadorNumero: {
    fontSize: '0.75rem',
    fontWeight: 800,
    letterSpacing: '0.14em',
    fontFamily: `${FontTypes.COPA}, sans-serif`,
    flexShrink: 0,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 800,
    color: ColorTypes.DARK,
    margin: 0,
    lineHeight: 28,
    letterSpacing: '-0.02em',
  },

  wrapperInline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px',
  },

  tituloInline: {
    fontSize: 24,
    fontWeight: 800,
    color: ColorTypes.DARK,
    margin: 0,
    lineHeight: 28,
    letterSpacing: '-0.02em',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },

  separadorLinhaInline: {
    flex: 1,
    height: '3px',
    borderRadius: '999px',
    display: 'block',
  },
});