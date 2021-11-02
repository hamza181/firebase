import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBy33M3B2F7nh6vGV6Ur2vRar24UIElLyk",
  authDomain: "chatapp-e3c97.firebaseapp.com",
  databaseURL: "https://chatapp-e3c97-default-rtdb.firebaseio.com",
  projectId: "chatapp-e3c97",
  storageBucket: "chatapp-e3c97.appspot.com",
  messagingSenderId: "245768179764",
  appId: "1:245768179764:web:7284305dd08a85479f3a61",
};

const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);

export default authentication;
