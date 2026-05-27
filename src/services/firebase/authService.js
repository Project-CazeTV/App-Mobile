import { auth, db, googleProvider } from './firebaseConfig';
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";

export async function registerWithEmail(formData) {
  const userCredential = await createUserWithEmailAndPassword(auth,formData.email,formData.senha);

  const user = userCredential.user;

  await updateProfile(user, {displayName: formData.nome});

  await setDoc(doc(db, "usuarios", user.uid), {
    nome: formData.nome,
    email: formData.email,
    cep: formData.cep,
    cidade: formData.cidade,
    estado: formData.estado,
    tipoCadastro: 'manual',
    criadoEm: new Date()
  });

  return user;
}

export async function registerWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;
  const fullName = user.displayName || '';

  await setDoc(doc(db, "usuarios", user.uid), {
    nome: fullName.split(' ')[0],
    sobrenome: fullName.split(' ').slice(1).join(' '),
    email: user.email,
    tipoCadastro: 'google',
    criadoEm: new Date()
  }, { merge: true });

  return user;
}