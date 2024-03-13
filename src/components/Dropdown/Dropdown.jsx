import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dropdown = ({ items }) => {
  const history = useNavigate();
  const [uniqueGenders, setUniqueGenders] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [uniqueSubcategories, setUniqueSubcategories] = useState([]);

  useEffect(() => {
    // Extract unique genders, categories, and subcategories
    const validGenders = items.filter(item => ["men", "women", "unisex"].includes(item.gender));
    const genders = [...new Set(validGenders.map(item => item.gender))];
    const categories = [...new Set(validGenders.map(item => item.category))];
    const subcategories = [...new Set(validGenders.map(item => item.subcategory))];
  
    setUniqueGenders(genders);
    setUniqueCategories(categories);
    setUniqueSubcategories(subcategories);
  }, [items]);
  

  const handleItemClick = (path) => {
    history(path);
  };

  const handleCategoryClick = (gender, category) => {
    if (gender && category) {
      handleItemClick(`/${gender.toLowerCase()}/${category.toLowerCase()}`);
    }
  };

  return (
    <div className="dropdowns">
      {uniqueGenders.map((gender) => (
        <div className="dropdown" key={gender}>
          <button className="dropbtn">{gender}</button>
          <div className="dropdown-content">
            {uniqueCategories.map((category) => (
              <div key={`${gender}-${category}`} className='category_subcategory'>
                <Link
                  to={`/${gender && gender.toLowerCase()}/${category && category.toLowerCase()}`}
                  className='category'
                  onClick={() => handleCategoryClick(gender, category)}
                >
                  {category && category.toLowerCase()}
                </Link>
                <ul>
                  {uniqueSubcategories
                    .filter((subcategory) =>
                      subcategory && items.some((item) =>
                        item.gender === gender &&
                        item.category === category &&
                        item.subcategory === subcategory
                      )
                    )
                    .map((subcategory) => (
                      <li key={`${gender}-${category}-${subcategory}`} className='subcategory-list'>
                        <Link
                          className='subcategory-link'
                          to={`/${gender && gender.toLowerCase()}/${category && category.toLowerCase()}/${subcategory && subcategory.toLowerCase()}`}
                          onClick={() => handleItemClick(`/${gender && gender.toLowerCase()}/${category && category.toLowerCase()}/${subcategory && subcategory.toLowerCase()}`)}
                        >
                          {subcategory && subcategory.toLowerCase()}
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
