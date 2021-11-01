import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBy33M3B2F7nh6vGV6Ur2vRar24UIElLyk",
  authDomain: "chatapp-e3c97.firebaseapp.com",
  databaseURL: "https://chatapp-e3c97-default-rtdb.firebaseio.com",
  projectId: "chatapp-e3c97",
  storageBucket: "chatapp-e3c97.appspot.com",
  messagingSenderId: "245768179764",
  appId: "1:245768179764:web:371027bd211e51d59f3a61"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database