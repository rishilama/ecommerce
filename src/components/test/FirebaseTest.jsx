// FirebaseItemsConsole.jsx
import React, { useEffect } from 'react';
import { fireStore } from '../../firebase'; // Update the path accordingly
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions

const FirebaseItemsConsole = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = fireStore; // Use the firestore instance
        const productsRef = collection(db, 'products'); // Assuming 'products' is the collection name
        const snapshot = await getDocs(productsRef);
        const items = snapshot.docs.map((doc) => doc.data());
        console.log('Firebase Items:', items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchData();
  }, []);

  return <div>Check the console for Firebase items</div>;
};

export default FirebaseItemsConsole;
