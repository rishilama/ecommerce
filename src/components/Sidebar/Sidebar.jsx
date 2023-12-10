// Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductItems from '../../data/ProductItems';

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

  return (
    <div className="sidebar parent-container">
      {ProductItems.map((genderItem) => (
        <div key={genderItem.gender} className="sidebar-gender">
          <h3>{genderItem.gender}</h3>
          <ul>
            {genderItem.categories.map((category) => (
              <li key={category.name} className={isCategoryOpen(genderItem.gender, category.name) ? 'active' : ''}>
                <Link
                  to={`/${genderItem.gender.toLowerCase()}/${category.name.toLowerCase()}`}
                  onClick={() => onSelectSubcategory(null)} // Reset subcategory on category click
                >
                  {category.name}
                </Link>
                <ul>
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory} className={currentPath[3] === subcategory.toLowerCase() ? 'active' : ''}>
                      <Link
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
