import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FirebaseDataFetcher from '../../components/test/databaseTest';
import Cards from '../../components/Cards/Cards';

function CategoryPage() {
    const [data, setData] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const location = useLocation();
    const [uniqueSubcategories, setUniqueSubcategories] = useState([]);
    // Extract category from the URL
    const categoryFromUrl = location.pathname.split('/')[2];
    const genderFromUrl = location.pathname.split('/')[1]
    
    useEffect(() => {
        // Filter products based on the category and gender from the URL
        const filteredProducts = data.filter(product => 
            product.category === categoryFromUrl && product.gender === genderFromUrl);
        setCategoryList(filteredProducts);
         // eslint-disable-next-line
    }, [data, categoryFromUrl, genderFromUrl]);


    // Extract subcategories from filtered products
    useEffect(() => {
        const subcategories = [...new Set(categoryList.map(product => product.subcategory))];
        setUniqueSubcategories(subcategories);
         // eslint-disable-next-line
    }, [categoryList]);

    return (
        <>
            <div className='parent-container'>
                {/* Display products for each unique subcategory */}
                {uniqueSubcategories.map(subcategory => (
                    <div key={subcategory}>
                        {/* Display subcategory name */}
                        <h1>{subcategory}</h1>
                        {/* Filter and display last 4 products for the current subcategory */}
                        <Cards categoryProducts={categoryList.filter(product => 
                            product.subcategory === subcategory).slice(-4)} />
                    </div>
                ))}
                <FirebaseDataFetcher setCategoryProducts={setData} />
            </div>
        </>
    );
}

export default CategoryPage;
