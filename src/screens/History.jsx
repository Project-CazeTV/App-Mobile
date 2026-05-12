import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ColorTypes from '../enumsCategories/ColorTypes';
import FontTypes from '../enumsCategories/FontTypes';
import HeroBanner from '../features/History/HeroBanner';
import HistoryContent from '../features/History/HistoryContent';

export default function History() {
  return (
    <ScrollView style={styles.container}>
      <HeroBanner />
      <HistoryContent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
    fontFamily: `${FontTypes.SORA}, sans-serif`,
  },
});
