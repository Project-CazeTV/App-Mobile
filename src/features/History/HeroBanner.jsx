import { StyleSheet, Text, View, Image } from 'react-native';
import ImagemHero from '../../assets/images/banners/caze-tv-historia.jpg' 
import FontTypes from '../../enumsCategories/FontTypes';

export default function HeroBanner() {
  
  return (
    <View style={styles.HeroBanner}>
      <Image source={ImagemHero} style={styles.HeroImage} />
      <Text style={styles.HeroTitle}>Casimiro Miguel, o streamer fundador da CazéTV</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  HeroBanner: {
    width: '100%',
  },
  HeroImage: {
    width: '100%',
    height: 670,
    objectFit: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  HeroTitle: {
    color: 'white',
    fontFamily: FontTypes.SORA,
    zIndex: 1,
    position: 'relative',
    fontSize: 24,
    top: -110,
    left: 19,
    width: '80%',
    borderColor: 'white',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderWidth: 4,
    paddingLeft: 20,
    /* background: linear-gradient(to right,rgba(255, 255, 255, 0.296),rgba(255, 255, 255, 0));  */
}
});