import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCj77jNWipR41x8aYP-8W5WF1jjd4ZtxI",
  authDomain: "taylor-robertson-project-five.firebaseapp.com",
  databaseURL: "https://taylor-robertson-project-five.firebaseio.com",
  projectId: "taylor-robertson-project-five",
  storageBucket: "taylor-robertson-project-five.appspot.com",
  messagingSenderId: "611253490267",
  appId: "1:611253490267:web:04bb0ea0eb49e69396a57e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;