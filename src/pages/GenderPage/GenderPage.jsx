// GenderPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AllProductAPI from '../../data/AllProductAPI';
import './GenderPage.css';

const GenderPage = () => {
  const { gender } = useParams();

  // Filter products based on the specified gender
  const genderProducts = AllProductAPI.filter((product) => product.gender === gender);

  // Manually specify the desired order of categories
  const categoryOrder = ['sneaker', 'watches', 'apparels'];

  // Organize products by unique categories and their corresponding subcategories
  const organizedData = genderProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    if (!acc[product.category].includes(product.subcategory)) {
      acc[product.category].push(product.subcategory);
    }
    return acc;
  }, {});

  return (
    <div className="parent-container">
      <div className="gender-page">
        <h1>{`${gender.charAt(0).toUpperCase()}${gender.slice(1)}'s Page`}</h1>
        <h2>Categories:</h2>
        <ul>
          {categoryOrder.map((category) => (
            organizedData[category] && (
              <li className="categories-list" key={category}>
                <strong>{category}</strong>
                <ul className="subCategories-section">
                  {organizedData[category].map((subcategory) => (
                    <li className="subCategories-list" key={subcategory}>
                      <Link
                        to={`/${gender}/${category.toLowerCase()}/${subcategory.toLowerCase()}`}
                        className="subcategory-link"
                      >
                        {subcategory}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GenderPage;
