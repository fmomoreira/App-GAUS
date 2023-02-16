import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


//===============  Informar as credencias geradas pelo firebase ===========================
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain:   process.env.AUTHDOMAIN,
  projectId:   process.env.PROJECTID,
  storageBucket:   process.env.STORAGEBUCKET,
  messagingSenderId:   process.env.MESSAGINGSENDERID,
  appId:   process.env.APPID,
  };
//====================================== =========================== ======================


firebase.initializeApp(firebaseConfig);

export default firebase