import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Image, Pressable, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import ColorTypes from '../enumsCategories/ColorTypes';
import AppText from '../components/common/AppText';
import AppInput from '../components/common/AppInput';
import FontTypes from '../enumsCategories/FontTypes';

import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { auth } from '../services/firebase/firebaseConfig';
import Routes from '../routes/.';

WebBrowser.maybeCompleteAuthSession();

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'SEU_EXPO_CLIENT_ID',
    androidClientId: 'SEU_ANDROID_CLIENT_ID',
    iosClientId: 'SEU_IOS_CLIENT_ID',
    webClientId: 'SEU_WEB_CLIENT_ID',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => {
          navigation.navigate(Routes.HOME);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [response]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.navigate(Routes.HOME)
    } catch (error) {
      alert("Email ou senha incorretos.");
    }
  };

  const loginWithGoogle = async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.error('Erro ao logar com Google', error);
    }
  };

  return (
    <View style={styles.pageWrapper}>
      <Pressable style={styles.backButton} onPress={() => navigation.navigate(Routes.DRAWER)}>
        <AntDesign name="arrow-left" size={24} color="black" />
      </Pressable>
      <View style={styles.loginContainer}>
        <View style={styles.headerLogos}>
          
          <Image source={require('../assets/images/logos/CazéTVNomePreto.png')} alt="Cazé TV" style={styles.logoCaze} />
          <View style={styles.divider} />
          <Image source={require('../assets/images/logos/logo-copa-escuro.png')} alt="FIFA 26" style={styles.logoFifa} />
        </View>
        <AppText style={styles.welcomeText}>
          Seja bem-vindo a <AppText style={{ fontWeight: 'bold' }}>Cazé TV</AppText>. Entre com seus dados abaixo para continuar.
        </AppText>

        <View style={styles.form}>
          <AppInput
            icon={<Fontisto name="email" size={20} color={ColorTypes.GRAYTEXT} />}
            placeholder="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
            style={styles.input}
          />
          <AppInput
            icon={<AntDesign name="lock" size={20} color={ColorTypes.GRAYTEXT} />}
            placeholder="Senha"
            value={senha}
            onChangeText={(e) => setSenha(e)}
            secureTextEntry={true}
            style={styles.input}
          />

          <Pressable style={styles.submitBtn} onPress={() => handleLogin()}>
            <AntDesign name="arrow-right" size={24} color="white" />
          </Pressable>
        </View>

        <View style={styles.switchArea}>
          <AppText>Não tem uma conta?</AppText>
          <Pressable onPress={() => navigation.navigate(Routes.SIGNUP)}>
            <AppText style={styles.registerLink}>Cadastre-se</AppText>
          </Pressable>
        </View>

        <View style={styles.socialLogin}></View>
        <LinearGradient
          colors={[ColorTypes.RED, ColorTypes.BLUE, ColorTypes.GREEN, ColorTypes.YELLOW]}
          locations={[0, 0.33, 0.66, 1]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.borderGoogleBtn}
        >
          <Pressable style={styles.googleBtn} onPress={() => loginWithGoogle()}>
            <Image source={require('../assets/images/logos/logoGoogle.png')} style={styles.googleLogo} alt="Google" />
            Entrar com Google
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
    color: ColorTypes.TEXTDARK,
    padding: '20px',
  },

  backButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    background: 'transparent',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '50%',
    color: ColorTypes.DARK,
  },

  loginContainer: {
    width: '100%',
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  headerLogos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '30px',
  },

  logoCaze: {
    height: 60,
    width: 120,
    resizeMode: 'contain',
  },

  logoFifa: {
    height: 60,
    width: 60,
  },

  divider: {
    width: '2px',
    height: '50px',
    backgroundColor: ColorTypes.GRAY,
  },

  welcomeText: {
    fontSize: '13px',
    textAlign: 'center',
    marginBottom: '30px',
    maxWidth: '300px',
  },

  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
  },

  input: {
    width: '100%',
    padding: '15px 20px',
    paddingInline: '20px',
    paddingVertical: '15px',
    placeholderTextColor: ColorTypes.GRAYTEXT,
    backgroundColor: ColorTypes.GRAY,
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    color: ColorTypes.DARK,
  },

  submitBtn: {
    width: '80%',
    padding: '10px',
    backgroundColor: '#212121',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15px',
  },

  switchArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginTop: '25px',
    fontSize: '12px',
    opacity: 0.8,
  },

  registerLink: {
    background: 'transparent',
    border: 'none',
    color: ColorTypes.DARK,
    fontWeight: 700,
    padding: '0',
    fontSize: '12px',
  },

  socialLogin: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
  },

  googleBtn: {
    width: '100%',
    padding: '12px',
    paddingInline: '40px',
    backgroundColor: ColorTypes.WHITE,
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'System',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontWeight: 600,
    fontSize: '13px',
    color: '#333',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },

  borderGoogleBtn: {
    width: '80%',
    borderRadius: '10px',
    borderWidth: '2px',
    borderColor: 'transparent',
    borderStyle: 'solid',
  },

  googleLogo: {
    height: 20,
    width: 20,
  },
});