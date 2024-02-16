// Fetch data from Firebase Realtime Database
const fetchDataFromFirebase = async () => {
    try {
      const snapshot = await firebase.database().ref('https://products-list-50418-default-rtdb.firebaseio.com').once('value');
      const data = snapshot.val();
      // Use the data as needed
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  