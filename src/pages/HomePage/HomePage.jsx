import React from 'react'
import FirebaseDataFetcher from '../../components/test/databaseTest'
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const HomePage = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  const { gender, category, subcategory } = useParams();
  const location = useLocation();

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
        <ProductGrid
            gender={gender}
            category={category}
            subcategory={subcategory}
            location={window.location}
            categoryProducts={categoryProducts} // Pass categoryProducts data to ProductGrid
          />

        <FirebaseDataFetcher setCategoryProducts={setCategoryProducts} setFetchedData={setFetchedData} />
      </div>

    )
}

  
export default HomePage