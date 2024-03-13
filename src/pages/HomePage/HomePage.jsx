import React from 'react'
import FirebaseDataFetcher from '../../components/test/databaseTest'
// import ProductGrid from '../../components/ProductGrid/ProductGrid';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Cards from '../../components/Cards/Cards';

const HomePage = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  const { gender, category, subcategory } = useParams();
  const location = useLocation();

  const reverseArrayById = (arr) => {
    // Convert id to number and sort in descending order
    return arr.sort((a, b) => parseInt(b.id) - parseInt(a.id));
  };

  const reversedArray = reverseArrayById(categoryProducts);
    console.log(reversedArray);

  // useEffect(() => {
  //   setSelectedSubcategory(subcategory);
  // }, [subcategory]);

  // const handleCategoryClick = (category, products) => {
  //   setSelectedSubcategory(null);
  //   setCategoryProducts(products);
  // };

  console.log(location)
  console.log(category)
  console.log(fetchedData)

    return (
      <div className='parent-container'>
        {/* <ProductGrid
            gender={gender}
            category={category}
            subcategory={subcategory}
            location={window.location}
            categoryProducts={categoryProducts} // Pass categoryProducts data to ProductGrid
          /> */}

        <Cards categoryProducts={categoryProducts} />

        <FirebaseDataFetcher setCategoryProducts={setCategoryProducts} setFetchedData={setFetchedData} />
      </div>

    )
}

  
export default HomePage