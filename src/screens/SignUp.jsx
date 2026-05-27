import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ScrollView, View, Image, Pressable, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import ColorTypes from '../enumsCategories/ColorTypes';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AppText from '../components/common/AppText';
import HeaderSign from '../components/common/HeaderSign';
import AppInput from '../components/common/AppInput';
import ButtonGoogle from '../components/common/ButtonGoogle';
import ButtonSign from '../components/common/ButtonSign';
import FontTypes from '../enumsCategories/FontTypes';

import { buscarCep } from '../services/cepService';
import { auth, db, googleProvider } from '../services/firebase/firebaseConfig.js';
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { registerWithEmail, registerWithGoogle } from '../services/firebase/authService.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import Routes from '../routes/.';
import VerifyCamera from '../services/Camera/VerifyCamera';

export default function SignUp({ navigation }) {
  const [formData, setFormData] = useState({ nome: '', email: '', cep: '', cidade: '', estado: '', senha: '' });

  const handleCepChange = async (e) => {
    const cep = e.replace("-", "");
    if (cep.length < 8) {
      setFormData(prev => ({ ...prev, cidade: '', estado: '' }));
    }
    setFormData(prev => ({ ...prev, cep }));
    if (cep.length !== 8) return;

    try {
      const endereco = await buscarCep(cep);
      setFormData(prev => ({ ...prev, cidade: endereco.cidade, estado: endereco.estado }));
    } catch (err) {
      alert("CEP não encontrado");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (Platform.OS != "web") {
        <VerifyCamera/>
      }
      await registerWithEmail(formData);
      navigation.navigate(Routes.DRAWER);
    } catch (error) {
      alert(error.message);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      if (Platform.OS != "web") {
        <VerifyCamera/>
      }
      await registerWithGoogle();
      navigation.navigate(Routes.DRAWER);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ScrollView style={styles.pageWrapper} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      <Pressable style={styles.backButton} onPress={() => navigation.navigate(Routes.LOGIN)}>
        <AntDesign name="arrow-left" size={24} color="black" />
      </Pressable>
      <View style={styles.loginContainer}>
        <HeaderSign text={'Confirme seus dados abaixo para continuar seu cadastro.'}></HeaderSign>
        <View style={styles.form}>
          <AppInput
            icon={<Feather name="user" size={20} color={ColorTypes.GRAYTEXT} />}
            placeholder="Nome"
            value={formData.nome}
            onChangeText={(e) => setFormData(prev => ({ ...prev, nome: e }))}
          />
          <AppInput
            icon={<Fontisto name="email" size={20} color={ColorTypes.GRAYTEXT} />}
            placeholder="Email"
            value={formData.email}
            onChangeText={(e) => setFormData(prev => ({ ...prev, email: e }))}
          />
          <AppInput
            icon={<AntDesign name="audit" size={8} color={ColorTypes.GRAYTEXT} />}
            placeholder="CEP"
            value={formData.cep}
            onChangeText={handleCepChange}
          />
          <AppInput
            icon={<MaterialCommunityIcons name="home-city-outline" color={ColorTypes.GRAYTEXT} />}
            placeholder="Cidade"
            value={formData.cidade}
            onChangeText={(e) => setFormData(prev => ({ ...prev, cidade: e }))}
            editable={false}
          />
          <AppInput
            icon={<MaterialCommunityIcons name="city-variant-outline" color={ColorTypes.GRAYTEXT} />}
            placeholder="Estado"
            value={formData.estado}
            onChangeText={(val) => setFormData(prev => ({ ...prev, estado: val }))}
            editable={false}
          />
          <AppInput
            icon={<AntDesign name="lock" size={20} color={ColorTypes.GRAYTEXT} />}
            placeholder="Senha"
            value={formData.senha}
            onChangeText={(val) => setFormData(prev => ({ ...prev, senha: val }))}
            secure={true}
          />

          <ButtonSign function={handleSignUp}></ButtonSign>
        </View>

        <View style={styles.switchArea}>
          <AppText>Já tem uma conta?</AppText>
          <Pressable onPress={() => navigation.navigate(Routes.LOGIN)}>
            <AppText style={styles.registerLink}>Faça login aqui</AppText>
          </Pressable>
        </View>
        <ButtonGoogle hasAccount={false} function={signUpWithGoogle}></ButtonGoogle>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
    color: ColorTypes.TEXTDARK,
  },

  backButton: {
    position: 'absolute',
    zIndex: 10,
    top: '20px',
    left: '20px',
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
    paddingTop: 50,
    paddingBottom: 70,
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
    border: 'none',
    color: ColorTypes.DARK,
    fontWeight: 700,
    padding: '0',
    fontSize: '12px',
  },
});