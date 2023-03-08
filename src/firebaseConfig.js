// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7lZp9EMs3_euGbV6al85lPL0E-R2LHQg",
  authDomain: "linkdin-clone-f65f5.firebaseapp.com",
  projectId: "linkdin-clone-f65f5",
  storageBucket: "linkdin-clone-f65f5.appspot.com",
  messagingSenderId: "1046092357571",
  appId: "1:1046092357571:web:96178f372275328f726776",
  measurementId: "G-YVQ56YGQDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const analytics = getAnalytics(app);

export {auth,app}