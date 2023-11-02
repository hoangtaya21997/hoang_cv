import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBtq4c7C6bZP0Rmdd9_kjbuxIBabShVXU0",
  authDomain: "videoprojectcv.firebaseapp.com",
  projectId: "videoprojectcv",
  storageBucket: "videoprojectcv.appspot.com",
  messagingSenderId: "58246524319",
  appId: "1:58246524319:web:da46a25f05cf996066a1aa"
};

const app = initializeApp(firebaseConfig);
export const VideoDB = getStorage(app);