import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBy33M3B2F7nh6vGV6Ur2vRar24UIElLyk",
    authDomain: "chatapp-e3c97.firebaseapp.com",
    databaseURL: "https://chatapp-e3c97-default-rtdb.firebaseio.com",
    projectId: "chatapp-e3c97",
    storageBucket: "chatapp-e3c97.appspot.com",
    messagingSenderId: "245768179764",
    appId: "1:245768179764:web:7284305dd08a85479f3a61"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;