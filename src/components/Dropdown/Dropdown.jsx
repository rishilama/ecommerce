// Dropdown.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dropdown = ({ items }) => {
  const history = useNavigate();
  const [uniqueGenders, setUniqueGenders] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [uniqueSubcategories, setUniqueSubcategories] = useState([]);

  useEffect(() => {
    // Extract unique genders, categories, and subcategories
    const genders = [...new Set(items.map(item => item.gender))];
    const categories = [...new Set(items.map(item => item.category))];
    const subcategories = [...new Set(items.map(item => item.subcategory))];

    setUniqueGenders(genders);
    setUniqueCategories(categories);
    setUniqueSubcategories(subcategories);
  }, [items]);

  const handleItemClick = (path) => {
    history(path);
  };

  // Function to handle category click
  const handleCategoryClick = (gender, category) => {
    handleItemClick(`/${gender.toLowerCase()}/${category.toLowerCase()}`);
  };

  return (
    <div className="dropdowns">
      {uniqueGenders.map((gender) => (
        <div className="dropdown" key={gender}>
          <button className="dropbtn">{gender}</button>
          <div className="dropdown-content">
            {uniqueCategories.map((category) => (
              <div key={category} className='category_subcategory'>
                <Link 
                  to={`/${gender.toLowerCase()}/${category.toLowerCase()}`}
                  className='category' onClick={() => handleCategoryClick(gender, category)}>
                  {category.toLowerCase()}
                </Link>
                <ul>
                  {uniqueSubcategories
                    .filter((subCategory) => 
                      items.some((item) => 
                        item.gender === gender && 
                        item.category === category && 
                        item.subcategory === subCategory
                      )
                    )
                    .map((subCategory) => (
                      <li key={subCategory} className='subcategory-list'>
                        <Link className='subcategory-link'
                          to={`/${gender.toLowerCase()}/${category.toLowerCase()}/${subCategory.toLowerCase()}`}
                          onClick={() => handleItemClick(`/${gender.toLowerCase()}/${category.toLowerCase()}/${subCategory.toLowerCase()}`)}
                        >
                          {subCategory.toLowerCase()}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
