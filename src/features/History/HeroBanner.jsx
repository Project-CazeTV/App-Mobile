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
    height: '670px',
    objectFit: 'cover',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
  },
  HeroTitle: {
    color: 'white',
    fontFamily: FontTypes.SORA,
    zIndex: 1,
    position: 'relative',
    fontSize: '24px',
    top: '-110px',
    left: '19px',
    width: '80%',
    borderColor: 'white',
    borderStyle: 'solid',
    borderTopWidth: '0px',
    borderRightWidth: '0px',
    borderBottomWidth: '0px',
    borderWidth: '4px',
    paddingLeft: '20px',
    /* background: linear-gradient(to right,rgba(255, 255, 255, 0.296),rgba(255, 255, 255, 0));  */
}
});