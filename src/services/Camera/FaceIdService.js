import { Platform } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export const authenticateWithBiometrics = async () => {
  if (Platform.OS === 'web') {
    return true; 
  }

  const isBiometricSupported = await LocalAuthentication.hasHardwareAsync();
  if (!isBiometricSupported) {
    return true;
  }

  const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
  if (!savedBiometrics) {
    return true;
  }

  const biometricAuth = await LocalAuthentication.authenticateAsync({
    promptMessage: 'Autenticação de Segurança',
    fallbackLabel: 'Usar senha',
    cancelLabel: 'Cancelar',
    disableDeviceFallback: false,
  });

  return biometricAuth.success;
};