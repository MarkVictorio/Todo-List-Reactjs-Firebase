import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAoFq4Qj4tddp-F-p7IamzUt9T_S1th1Ck",
  authDomain: "todo-react-g2.firebaseapp.com",
  databaseURL: "https://todo-react-g2-default-rtdb.firebaseio.com",
  projectId: "todo-react-g2",
  storageBucket: "todo-react-g2.appspot.com",
  messagingSenderId: "1049965031356",
  appId: "1:1049965031356:web:ece960ea2a089c357e45b9",
  measurementId: "G-9K9SMT29FQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
