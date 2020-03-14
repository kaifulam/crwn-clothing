import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAkEfDbe7LiA1xpc3uyUGndC2_FwzFEZdg",
    authDomain: "crwn-db-76c75.firebaseapp.com",
    databaseURL: "https://crwn-db-76c75.firebaseio.com",
    projectId: "crwn-db-76c75",
    storageBucket: "crwn-db-76c75.appspot.com",
    messagingSenderId: "535016795681",
    appId: "1:535016795681:web:cca4b008b7b5fb30767d60",
    measurementId: "G-KJ9DPEGBVG"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


// use documentRef to do CRUD (create... set(), retrieve... get(), update... update(), delete... delete())
// use collectionRef to use add.()

// documentRef returns a documentSnapshot object. collectionRef returns a querySnapshot object.