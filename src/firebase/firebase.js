import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyABHZ79sSTReRfyrhwKqPKcDJqj_7YTlIY',
  authDomain: 'learnlingo-96e80.firebaseapp.com',
  databaseURL:'https://learnlingo-96e80-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learnlingo-96e80',
  storageBucket: 'learnlingo-96e80.appspot.com',
  messagingSenderId: '500651171714',
  appId: '1:500651171714:web:773d2aab093019ac0ff99b',
};

export const app = initializeApp(firebaseConfig);
