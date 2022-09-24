import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtcpwfriw7UbePKD9M8AXRU_7nUDMCg7s",
  authDomain: "fir-auth-app-edf65.firebaseapp.com",
  projectId: "fir-auth-app-edf65",
  storageBucket: "fir-auth-app-edf65.appspot.com",
  messagingSenderId: "870043676939",
  appId: "1:870043676939:web:9296bcb2bd5bddb4baf20e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;