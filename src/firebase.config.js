import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0DdIZJhBx1AHvPL5fvG8l0RIhmfBtLFo',
  authDomain: 'real-estate-marketplace-57778.firebaseapp.com',
  projectId: 'real-estate-marketplace-57778',
  storageBucket: 'real-estate-marketplace-57778.appspot.com',
  messagingSenderId: '272319540351',
  appId: '1:272319540351:web:b554f59efb1aba344fa34a',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
