import React from 'react'
import FirebaseDataFetcher from '../../components/test/databaseTest'
import { useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Cards from '../../components/Cards/Cards';
import "./NewArrivals.css"

const NewArrivals = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  // const { gender, category, subcategory } = useParams();
  const location = useLocation();

  const reverseArrayById = (arr) => {
    // Convert id to number and sort in descending order
    return arr.sort((a, b) => parseInt(b.id) - parseInt(a.id));
  };

  const reversedArray = reverseArrayById(categoryProducts);
    console.log(reversedArray);

    console.log(location)
  // console.log(category)
  console.log(fetchedData)

    return (
      <div className='parent-container'>
        
        <div className="newArrivals__cardsSection">
          <Cards categoryProducts={categoryProducts} />
        </div>

        <FirebaseDataFetcher setCategoryProducts={setCategoryProducts} setFetchedData={setFetchedData} />
      </div>

    )
}

  
export default NewArrivals