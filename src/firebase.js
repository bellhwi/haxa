import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC2xf6d378yEDN3j3Smj5_FAkX9ALPy3B0',
  authDomain: 'haxa-16f57.firebaseapp.com',
  projectId: 'haxa-16f57',
  storageBucket: 'haxa-16f57.appspot.com',
  messagingSenderId: '235815258935',
  appId: '1:235815258935:web:6471428ccc8a249d7528b2',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
