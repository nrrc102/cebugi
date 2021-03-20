import {firebaseConfig} from "./Config";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { credential } from "firebase-admin";
// import * as admin from 'firebase-admin'

const authApp = firebase.initializeApp(firebaseConfig, 'authApp');
export const detachedAuth = authApp.auth();

// export const adminFB = admin.initializeApp(firebaseConfig)

//
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });


export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
// FacebookProvider.setCustomParameters({'prompt': 'select_account'});
FacebookProvider.setCustomParameters({'display': 'popup', prompt: 'select_account'});


export const handleUserProfile = async ({ userAuth, additionalData }) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { name, email } = userAuth;
    const timestamp = new Date();
    const userRoles = ['user'];

    try {
      await userRef.set({
        name,
        email,
        createdDate: timestamp,
        userRoles,
        ...additionalData
      });
    } catch(err) {
      // console.log(err);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}