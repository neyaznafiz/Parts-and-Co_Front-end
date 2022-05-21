import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyC5xqb_WyitkTAeae1LJT0aJDtxJUlujCg",
  authDomain: "parts-and-co.firebaseapp.com",
  projectId: "parts-and-co",
  storageBucket: "parts-and-co.appspot.com",
  messagingSenderId: "1078979601928",
  appId: "1:1078979601928:web:d23f6727b40dc4ef9c93bd"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth