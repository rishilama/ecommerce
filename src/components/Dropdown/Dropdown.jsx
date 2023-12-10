//Dropdown.jsx
// src/components/Dropdowns.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dropdown = ({ items }) => {
  const history = useNavigate();

  const handleItemClick = (gender, category, subcategory) => {
    const newPath = `/${gender.toLowerCase()}/${category.toLowerCase()}/${subcategory.toLowerCase()}`;
    history.push(newPath);
  };

  return (
    <div className="dropdowns">
      {items.map((item) => (
        <div className="dropdown" key={item.name}>
          <button className="dropbtn">{item.gender}</button>
          <div className="dropdown-content">
            {item.categories.map((category) => (
              <div key={category.name} className='category_subcategory'>
                <Link
                  className='category'
                  to={`/${item.gender.toLowerCase()}/${category.name.toLowerCase()}/${category.subcategories[0].toLowerCase()}`}
                  onClick={() => handleItemClick(item.gender, category.name, category.subcategories[0])}
                >
                  {category.name}
                </Link>
                <ul>
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory} className='subcategory-list'>
                      <Link className='subcategory-link'
                        to={`/${item.gender.toLowerCase()}/${category.name.toLowerCase()}/${subcategory.toLowerCase()}`}
                        onClick={() => handleItemClick(item.gender, category.name, subcategory)}
                      >
                        {subcategory}
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
