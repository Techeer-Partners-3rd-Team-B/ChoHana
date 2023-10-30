import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCru6ix2kKv26MOVcEYl_tMTTRR-Ycolx4",
  authDomain: "nwitter-e5320.firebaseapp.com",
  projectId: "nwitter-e5320",
  storageBucket: "nwitter-e5320.appspot.com",
  messagingSenderId: "604784976180",
  appId: "1:604784976180:web:e79d6811ef7521b1108561",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
