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
          apiKey: "AIzaSyA0a1HfRzT_IzmO0-qnzbybtgFT3aNVX7o",
          authDomain: "products-list-50418.firebaseapp.com",
          databaseURL: "https://products-list-50418-default-rtdb.firebaseio.com",
          projectId: "products-list-50418",
          storageBucket: "products-list-50418.appspot.com",
          messagingSenderId: "327555328633",
          appId: "1:327555328633:web:02fbbdf1948f7bb7f142a8",
          measurementId: "G-SLF18NVH5W"
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
