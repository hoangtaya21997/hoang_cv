import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBwyN-ve1qk7iBWh0-FBe52TKs29mLUhpc",
  authDomain: "videocv-6a410.firebaseapp.com",
  projectId: "videocv-6a410",
  storageBucket: "videocv-6a410.appspot.com",
  messagingSenderId: "476990899845",
  appId: "1:476990899845:web:38f1eb8db79e8d88434bec"
};

const app = initializeApp(firebaseConfig);
export const VideoDB = getStorage(app);