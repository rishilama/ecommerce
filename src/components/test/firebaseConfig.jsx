import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

const FirebaseConfig = ({ setCategoryProducts }) => {


  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
          // Your Firebase config
          const firebaseConfig = {
            apiKey: "AIzaSyDBf3iw58MFYN365IEModwdbtZCLAhmgBA",
            authDomain: "shopperssquare-sakura.firebaseapp.com",
            databaseURL: "https://shopperssquare-sakura-default-rtdb.firebaseio.com/",
            projectId: "shopperssquare-sakura",
            storageBucket: "shopperssquare-sakura.appspot.com",
            messagingSenderId: "231047880262",
            appId: "1:231047880262:web:20f72ca54fb8f2f2847447",
            measurementId: "G-ETDL9332ZR"
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
