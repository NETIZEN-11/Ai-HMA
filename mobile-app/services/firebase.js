import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxF_T2QHfek8sPBPpO4zIs07tAM_sbc8o",
  authDomain: "ai-hma.firebaseapp.com",
  projectId: "ai-hma",
  storageBucket: "ai-hma.firebasestorage.app",
  messagingSenderId: "792016276355",
  appId: "1:792016276355:web:9575581d02be004c64c4b6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);