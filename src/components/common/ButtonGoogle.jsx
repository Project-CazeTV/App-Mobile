import { StyleSheet, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ColorTypes from '../../enumsCategories/ColorTypes';
import FontTypes from '../../enumsCategories/FontTypes';

export default function ButtonGoogle(props) {
    return (
        <LinearGradient
          colors={[ColorTypes.RED, ColorTypes.BLUE, ColorTypes.GREEN, ColorTypes.YELLOW]}
          locations={[0, 0.33, 0.66, 1]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.borderGoogleBtn}
        >
          <Pressable style={styles.googleBtn} onPress={props.function}>
            <Image source={require('../../assets/images/logos/logoGoogle.png')} style={styles.googleLogo}/>
            Entrar com Google
          </Pressable>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
  borderGoogleBtn: {
    marginTop: '30px',
    width: '80%',
    borderRadius: '10px',
    borderWidth: '2px',
    borderColor: 'transparent',
    borderStyle: 'solid',
  },

  googleBtn: {
    width: '100%',
    padding: '12px',
    paddingInline: '40px',
    backgroundColor: ColorTypes.WHITE,
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row',
    fontFamily: FontTypes.SORA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontWeight: 600,
    fontSize: '13px',
    color: '#333',
    shadowColor: ColorTypes.DARK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },

  googleLogo: {
    height: 20,
    width: 20,
  },
});
