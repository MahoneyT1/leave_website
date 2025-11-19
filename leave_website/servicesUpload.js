import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYQhfzrl73N0AKGYsy4BaFfzrCry1MIyw",
  authDomain: "leave-portal-35494.firebaseapp.com",
  projectId: "leave - portal - 35494",
  storageBucket: "leave-portal-35494.firebasestorage.app",
  messagingSenderId: "425987248235",
  appId: "1:425987248235:web:2fbf7276ec1d3f40e7612e",
  measurementId: 'G - YCCJLRMQMN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// The data you want to upload
const servicesData = [{
  emergency: {
    title: "Emergency Family Leave",
    description:
      "For urgent family situations requiring immediate military leave. Fast-track processing within 24-48 hours.",
    price: 500.0,
    requirements:
      "Proof of emergency, commanding officer approval, medical or official documentation",
  },

  compassion: {
    title: "Compassionate Reassignment",
    description:
      "For long-term family care situations. Includes comprehensive documentation and ongoing support",
    price: 750.0,
    requirements:
      "Medical documentation, dependency proof, unit commander endorsement, 30-day processing time",
  },

  humanitarian: {
    title: "Humanitarian Leave",
    description:
      "For extraordinary personal circumstances affecting service member's family. Expedited processing available",
    price: 600.0,
    requirements:
      "Detailed circumstance documentation, chain of command approval, Red Cross verification when applicable",
  }

}]

// Function to upload all data
async function uploadAllData() {
  console.log("Starting data upload...");

  for (const collectionName in servicesData) {
    const items = servicesData[collectionName];
    for (const item in servicesData) {
      try {
        await addDoc(collection(db, collectionName), {
          ...item,
          createdAt: new Date(),
        });
        console.log(`Added document to ${collectionName}: ${item.title}`);
      } catch (e) {
        console.error(`Error adding ${item.title} to ${collectionName}:`, e);
      }
    }
  }
  console.log("Data upload complete.");
}

uploadAllData();
