import { StyleSheet, View, Image } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';
import { useState } from "react";

export default function LogoTime({ url, nomeTime, pendente }) {
  const [imagemQuebrou, setImagemQuebrou] = useState(false);

  if (pendente) {
    return <View style={styles.logoVazio} />;
  }

  if (!url || imagemQuebrou) {
    const iniciais = nomeTime?.slice(0, 2).toUpperCase() || "?";

    return (
      <View style={styles.logoFallback}>
        <AppText>{iniciais}</AppText>
      </View>
    );
  }

  return (
    <Image
      source={url}
      style={styles.logoTime}
      onError={() => setImagemQuebrou(true)}
    />
  );
}

const styles = StyleSheet.create({
  logoTime: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  logoVazio: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    opacity: 0.35,
  },

  logoFallback: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  logoFallbackText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#868e96',
  },
});