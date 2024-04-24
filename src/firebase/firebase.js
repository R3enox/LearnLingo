import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
console.log('apiKey', firebaseConfig.apiKey);
console.log('authDomain', firebaseConfig.authDomain);
console.log('databaseURL', firebaseConfig.databaseURL);
console.log('projectId', firebaseConfig.projectId);
console.log('storageBucket', firebaseConfig.storageBucket);
console.log('messagingSenderId', firebaseConfig.messagingSenderId);
console.log('appId', firebaseConfig.appId);
console.log('test');

export const app = initializeApp(firebaseConfig);
