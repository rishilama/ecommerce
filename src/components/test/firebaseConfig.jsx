import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

const FirebaseConfig = ({ setCategoryProducts }) => {


  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
          // Your Firebase config
          const firebaseConfig = {
            apiKey: "AIzaSyA0a1HfRzT_IzmO0-qnzbybtgFT3aNVX7o",
            authDomain: "products-list-50418.firebaseapp.com",
            databaseURL: "https://products-list-50418-default-rtdb.firebaseio.com",
            projectId: "products-list-50418",
            storageBucket: "products-list-50418.appspot.com",
            messagingSenderId: "327555328633",
            appId: "1:327555328633:web:02fbbdf1948f7bb7f142a8",
            measurementId: "G-SLF18NVH5W"
}; 


        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        
        const snapshot = await get(ref(database, '/'));
        const data = snapshot.val();
        console.log('Data from Firebase:', data);
        setCategoryProducts(data); 
        
      
        
        // Set fetched data to state
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchDataFromFirebase();
  }, [setCategoryProducts]);

  return null;
};

export default FirebaseConfig;
