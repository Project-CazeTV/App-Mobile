import { useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import ColorTypes from '../enumsCategories/ColorTypes';
import AppText from '../components/common/AppText';
import HeaderSign from '../components/common/HeaderSign';
import AppInput from '../components/common/AppInput';
import ButtonGoogle from '../components/common/ButtonGoogle';
import ButtonSign from '../components/common/ButtonSign';

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../services/firebase/firebaseConfig";
import Routes from '../routes/.';
// IMPORTAÇÃO NOVA AQUI:
import { authenticateWithBiometrics } from '../services/Camera/FaceIdService'; 

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const isAuth = await authenticateWithBiometrics();

      if (!isAuth) return; 

      await signInWithEmailAndPassword(auth, email, senha);
      navigation.navigate(Routes.DRAWER);
    } catch (error) {
      alert("Email ou senha incorretos.");
    }
  };

  const loginWithGoogle = async () => {
    try {

      const isAuth = await authenticateWithBiometrics();

      if (!isAuth) return;

      await signInWithPopup(auth, googleProvider);
      navigation.navigate(Routes.DRAWER);
    } catch (error) {
      alert('Erro ao logar com Google');
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
  },
  backButton: {
    position: 'absolute',
    zIndex: 10,
    top: 20,
    left: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 9999,
  },
  loginContainer: {
    width: '100%',
    maxWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    alignItems: 'center',
  },
  switchArea: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    marginTop: 25,
    opacity: 0.8,
  },
  registerLink: {
    color: ColorTypes.DARK,
    fontWeight: '700',
    padding: 0,
    fontSize: 12,
  },
});