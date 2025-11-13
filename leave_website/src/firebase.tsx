/**
 * @file firebase.tsx
 * @description This file contains the Firebase configuration and initialization for the application.
 * It sets up the connection to Firebase services using the provided configuration details.
 */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBYQhfzrl73N0AKGYsy4BaFfzrCry1MIyw",
    authDomain: "leave-portal-35494.firebaseapp.com",
    projectId: "leave-portal-35494",
    storageBucket: "leave-portal-35494.firebasestorage.app",
    messagingSenderId: "425987248235",
    appId: "1:425987248235:web:2fbf7276ec1d3f40e7612e",
    measurementId: "G-YCCJLRMQMN"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
