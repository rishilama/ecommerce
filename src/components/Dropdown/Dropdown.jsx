// Dropdown.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductAPI from '../../data/ProductAPI'; // Import the ProductAPI

const Dropdown = ({ items }) => {
  const history = useNavigate();

  const handleItemClick = (path) => {
    history(path);
  };

  // Function to handle category click
  const handleCategoryClick = (gender, category) => {
    handleItemClick(`/${gender.toLowerCase()}/${category.toLowerCase()}/${items[0].categories[0].subcategories[0].toLowerCase()}`);

    // Fetch and display all elements inside ProductAPI.gender.category dictionary
    const categoryProducts = ProductAPI.products[gender]?.[category] || [];
    console.log('Category Products:', categoryProducts);
    // You can do something with the fetched products, like updating state or displaying them.
  };

  return (
    <div className="dropdowns">
      {items.map((item) => (
        <div className="dropdown" key={item.name}>
          <button className="dropbtn" onClick={() => handleCategoryClick(item.gender, item.categories[0].name)}>
            {item.gender}
          </button>
          <div className="dropdown-content">
            {item.categories.map((category) => (
              <div key={category.name} className='category_subcategory'>
                <Link 
                  to={`/${item.gender.toLowerCase()}/${category.name.toLowerCase()}`}
                  className='category' onClick={() => handleCategoryClick(item.gender, category.name)}>
                  {category.name.toLowerCase()}
                </Link>
                <ul>
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory} className='subcategory-list'>
                      <Link className='subcategory-link'
                        to={`/${item.gender.toLowerCase()}/${category.name.toLowerCase()}/${subcategory.toLowerCase()}`}
                        onClick={() => handleItemClick(`/${item.gender.toLowerCase()}/${category.name.toLowerCase()}/${subcategory.toLowerCase()}`)}
                      >
                        {subcategory.toLowerCase()}
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
