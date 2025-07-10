import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDnBGOMRCJw3LQdiHDhXxr8kQNxRzBSzMQ",
    authDomain: "learnmate-57603.firebaseapp.com",
    projectId: "learnmate-57603",
    storageBucket: "learnmate-57603.firebasestorage.app",
    messagingSenderId: "261021356889",
    appId: "1:261021356889:web:21cc9455e4e0e746cbb248",
    measurementId: "G-FGC6PQ7M49"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);