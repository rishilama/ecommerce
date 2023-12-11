// Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductItems from '../../data/ProductItems';
import ProductAPI from '../../data/ProductAPI'; // Import the ProductAPI

import './Sidebar.css';

const Sidebar = ({ onSelectSubcategory }) => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').filter((item) => item !== '');

  const isCategoryOpen = (gender, category) => {
    return (
      currentPath.length > 2 &&
      currentPath[1] === gender.toLowerCase() &&
      currentPath[2].toLowerCase() === category.toLowerCase()
    );
  };

  // Function to handle category click
  const handleCategoryClick = (gender, category) => {
    onSelectSubcategory(null); // Reset subcategory on category click

    // Fetch and display all elements inside ProductAPI.gender.category dictionary
    const categoryProducts = ProductAPI.products[gender]?.[category] || [];
    console.log('Category Products:', categoryProducts);
    // You can do something with the fetched products, like updating state or displaying them.
  };

  return (
    <div className="sidebar parent-container">
      {ProductItems
        .filter((genderItem) => currentPath.includes(genderItem.gender.toLowerCase()))
        .map((genderItem) => (
          <div key={genderItem.gender} className="sidebar-gender">
            <ul>
              {genderItem.categories.map((category) => (
                <li
                  key={category.name}
                  className={isCategoryOpen(genderItem.gender, category.name) ? 'active' : ''}
                >
                  <Link
                    className="sidebarCategoryLink"
                    to={`/${genderItem.gender.toLowerCase()}/${category.name.toLowerCase()}`}
                    onClick={() => handleCategoryClick(genderItem.gender, category.name)}
                  >
                    {category.name}
                  </Link>
                  <ul>
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory} className={currentPath[3] === subcategory.toLowerCase() ? 'active' : ''}>
                        <Link
                          className="sidebarCategoryLink subcategory"
                          to={`/${genderItem.gender.toLowerCase()}/${category.name.toLowerCase()}/${subcategory.toLowerCase()}`}
                          onClick={() => onSelectSubcategory(subcategory)}
                        >
                          {subcategory}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Sidebar;