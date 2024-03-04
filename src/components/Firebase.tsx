import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyDLroaV12F_pcKzkCJduzBwx1MOEVOD2n4",
  authDomain: "",
  projectId: "jlabs-prototype",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);