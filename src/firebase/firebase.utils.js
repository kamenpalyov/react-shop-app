import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const config = {
    apiKey: "AIzaSyBJYZh-cp8xG3N-VYKNcONRzMhsSxERW8M",
    authDomain: "crwn-db-6a09a.firebaseapp.com",
    databaseURL: "https://crwn-db-6a09a.firebaseio.com",
    projectId: "crwn-db-6a09a",
    storageBucket: "crwn-db-6a09a.appspot.com",
    messagingSenderId: "398991136043",
    appId: "1:398991136043:web:04d3f7dc40f8756379216e",
    measurementId: "G-612S87KZL4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;