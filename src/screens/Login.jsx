import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Image, Pressable, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import ColorTypes from '../enumsCategories/ColorTypes';
import AppText from '../components/common/AppText';
import HeaderSign from '../components/common/HeaderSign';
import AppInput from '../components/common/AppInput';
import ButtonGoogle from '../components/common/ButtonGoogle';
import ButtonSign from '../components/common/ButtonSign';
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
        <HeaderSign text={'Entre com seus dados abaixo para continuar.'}></HeaderSign>
        <View style={styles.form}>
          <AppInput
            icon={<Fontisto name="email" size={20} color={ColorTypes.GRAYTEXT} />}
            placeholder="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <AppInput
            icon={<AntDesign name="lock" size={20} color={ColorTypes.GRAYTEXT} />}
            placeholder="Senha"
            value={senha}
            onChangeText={(e) => setSenha(e)}
            secure={true}
          />

          <ButtonSign function={handleLogin}></ButtonSign>
        </View>

        <View style={styles.switchArea}>
          <AppText>Não tem uma conta?</AppText>
          <Pressable onPress={() => navigation.navigate(Routes.SIGNUP)}>
            <AppText style={styles.registerLink}>Cadastre-se</AppText>
          </Pressable>
        </View>
        <ButtonGoogle hasAccount={true} function={loginWithGoogle}></ButtonGoogle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
    color: ColorTypes.TEXTDARK,
  },

  backButton: {
    position: 'absolute',
    zIndex: 10,
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

  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
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
});