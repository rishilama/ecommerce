import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { useParams } from 'react-router-dom';

const SelectedProductFetcher = ({ setProductDetails }) => {
  const { productName } = useParams();
  console.log('productName:', productName); 

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        // Ensure productName is defined
        if (!productName) {
          console.error('No product name provided in route parameter');
          return;
        }

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
        
        

        const selectedApp = initializeApp(firebaseConfig);
        const selectedDatabase = getDatabase(selectedApp);

        const selectedSnapshot = await get(ref(selectedDatabase, '/'));
        const selectedData = selectedSnapshot.val();

        if (selectedData) {
          // Find the selected product by its name
          console.log(selectedData)
          const selectedProduct = selectedData.find(product => product.productName === productName);

          console.log("selectedProduct")
          if (selectedProduct) {
            console.log('Selected Product Details:', selectedProduct);
            setProductDetails(selectedProduct); // Set fetched product details to state
          } else {
            console.error('Selected product not found in database');
          }
        } else {
          console.error('No data found in Firebase');
        }
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchDataFromFirebase();
  }, [productName, setProductDetails]);

  return null;
};

export default SelectedProductFetcher;
