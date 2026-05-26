import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import AppText from "../../components/common/AppText";
import ColorTypes from '../../enumsCategories/ColorTypes';

export default function FilterSection({ titulo, filtros, filtroAtivo, setFiltroAtivo }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {titulo && <AppText style={styles.tituloSecao}>{titulo}</AppText>}
        <View style={styles.line} />
      </View>
      <ScrollView style={[styles.scrollWrapper]}
      horizontal>
        {filtros.map((filtro, index) => (
          <Pressable 
            key={index} 
            style={[styles.filtroBtn, filtroAtivo === filtro && styles.filtroBtnActive]}
            onPress={() => setFiltroAtivo && setFiltroAtivo(filtro)}
          >
            <AppText style={[styles.filtroBtnText, filtroAtivo === filtro && styles.filtroBtnActiveText]}>{filtro}</AppText>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  tituloSecao: {
    fontSize: 20,
    fontWeight: "800",
    color: ColorTypes.DARK,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(0,0,0,0.15)",
  },

  container: {
    width: "100%",
    overflow: "hidden",
    alignSelf: "center",
  },

  scrollWrapper: {
    flexDirection: "row",
    gap: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },

  filtroBtn: {
    marginLeft: 10,
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
    borderWidth: 1,
    borderColor: ColorTypes.GRAY,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  filtroBtnText: {
    color: ColorTypes.DARK,
    fontSize: 14,
    fontWeight: "300",
  },
  
  filtroBtnActive: {
    backgroundColor: ColorTypes.BLUE,
    borderColor: ColorTypes.BLUE,
  },

  filtroBtnActiveText: {
    color: ColorTypes.WHITE,
  },
});