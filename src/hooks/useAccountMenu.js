import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import Routes from '../routes/.';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase/firebaseConfig';

export function useAccountMenu() {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  async function logout() {
    try {
      await signOut(auth);
      close();
      navigation.navigate(Routes.DRAWER);
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  }

  return { isOpen, open, close, toggle, logout };
}