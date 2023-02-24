import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


//===============  Informar as credencias geradas pelo firebase ===========================
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  };
//====================================== =========================== ======================


firebase.initializeApp(firebaseConfig);

export default firebase