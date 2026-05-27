import { useEffect, useState } from "react";
import { auth } from "../services/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export function userAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}