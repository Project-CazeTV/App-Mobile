import { StyleSheet, View, Pressable } from 'react-native';
import Routes from '../routes/.';
import AppText from '../components/common/AppText';
import ColorTypes from '../enumsCategories/ColorTypes';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation, useRoute } from "@react-navigation/native";

export default function HeaderStackReturnPage({ pageTitle }) {
  const navigation = useNavigation();
  const route = useRoute()
  const returnScreenRoute = route.params?.returnScreen || Routes.HOME;

  return (
    <View style={styles.topBar}>
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <FontAwesome6 name="arrow-left" size={24} color={ColorTypes.DARK} />
      </Pressable>
      <AppText style={styles.pageTitle}>Voltar</AppText>
      <AppText style={styles.pageName}>{pageTitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: ColorTypes.GRAY,
    zIndex: 10,
  },

  backBtn: {
    width: 36,
    height: 36,
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
    borderWidth: 1,
    borderColor: ColorTypes.GRAY,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  pageTitle: {
    flex: 1,
    color: "#111",
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 0.2,
  },

  pageName: {
    backgroundColor: ColorTypes.BLUE,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    color: ColorTypes.WHITE,
    fontSize: 12,
    fontWeight: "700",
  },
});