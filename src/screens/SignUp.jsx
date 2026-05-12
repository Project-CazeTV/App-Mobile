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

import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { auth } from '../services/firebase/firebaseConfig';
import Routes from '../routes/.';

WebBrowser.maybeCompleteAuthSession();

export default function SignUp({ navigation }) {
  const [formData, setFormData] = useState({
    nome: '', sobrenome: '', email: '', cep: '',
    rua: '', bairro: '', cidade: '', estado: '', senha: ''
  });

const handleCepChange = async (e) => {
    const cep = e.replace(/\D/g, '');
    setFormData({ ...formData, cep });

    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setFormData(prev => ({
            ...prev,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
          }));
        }
      } catch (err) { console.error("Erro no CEP", err); }
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.senha);
      const user = userCredential.user;

      await updateProfile(user, { displayName: formData.nome });

      await setDoc(doc(db, "usuarios", user.uid), {
        nome: formData.nome,
        sobrenome: formData.sobrenome,
        cep: formData.cep,
        tipoCadastro: 'manual'
      });

      navigation.navigate(Routes.DRAWER)
    } catch (error) {
      alert(error.message);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nome: user.displayName.split(' ')[0],
        sobrenome: user.displayName.split(' ').slice(1).join(' '),
        email: user.email,
        tipoCadastro: 'google'
      }, { merge: true });

      navigation.navigate(Routes.DRAWER)
    } catch (error) {
      console.error(error);
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
            icon={<AntDesign name="audit" size={20} color={ColorTypes.GRAYTEXT} />}
            placeholder="CEP"
            value={formData.cep}
            onChangeText={handleCepChange}
          />
          <AppInput
            icon={<MaterialCommunityIcons name="home-city-outline" size={20} color={ColorTypes.GRAYTEXT} />}
            placeholder="Rua"
            value={formData.rua}
            onChangeText={(e) => setFormData(prev => ({ ...prev, rua: e }))}
            editable={false}
          />
          <AppInput
            icon={<MaterialCommunityIcons name="city-variant-outline" size={20} color={ColorTypes.GRAYTEXT} />}
            placeholder="Cidade"
            value={formData.cidade}
            onChangeText={(val) => setFormData(prev => ({ ...prev, cidade: val }))}
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
    padding: 20,
    display: 'flex',
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
    color: ColorTypes.TEXTDARK,
  },

  backButton: {
    position: 'absolute',
    zIndex: 10,
    top: '10px',
    left: '0px',
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