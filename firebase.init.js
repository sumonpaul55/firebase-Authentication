// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD714SkzTGIvnItRSFhgv8le28AOtDshY",
  authDomain: "fir-react-project-5fcb0.firebaseapp.com",
  projectId: "fir-react-project-5fcb0",
  storageBucket: "fir-react-project-5fcb0.appspot.com",
  messagingSenderId: "103240834165",
  appId: "1:103240834165:web:9a858583a6c60dabd8ac3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app