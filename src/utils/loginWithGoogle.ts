import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";

export const firebaseConfigWeb = {
  apiKey: "AIzaSyAbWvdzixgbB4iNRPwOQdO9YDBLjb2Y0kE",
  authDomain: "tdttalent.firebaseapp.com",
  projectId: "tdttalent",
  storageBucket: "tdttalent.appspot.com",
  messagingSenderId: "946513130642",
  appId: "1:946513130642:web:410ead291ed258be88224b",
  measurementId: "G-9QEP4HT6TR",
};

const loginWithGoogle = async () => {
  initializeApp(firebaseConfigWeb);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const userCredential = await signInWithPopup(auth, provider);

  return userCredential.user.getIdToken();
};

export default loginWithGoogle;
