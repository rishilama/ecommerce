// src/data/ProductItems.js
const ProductItems = [
  {
    gender: 'men',
    categories: [
      {
        name: 'Sneaker',
        subcategories: ['Nike', 'Jordan', 'Dunk', 'Adidas', 'New Balance', 'Puma', 'Balenciaga', 'Converse', 'Vans', 'Asics', 'Under Armour'],
      },
      {
        name: 'Watches',
        subcategories: ['Tag Heuer', 'Fossil', 'Tissot','Mont Blanc','Omega', 'Rolex', 'Armani Exchange', 'Emporio Armani'],
      },
      {
        name: 'Apparels',
        subcategories: ['Hoodie', 'Sweatshirt', 'Collar Sweatshit', 'Jacket', 'Jeans'],
      },
    ],
  },
  {
    gender: 'women',
    categories: [
      {
        name: 'Sneaker',
        subcategories: ['Nike Air Max', 'Nike React', 'Nike Dunk', 'Jordan Retro', 'Jordan AJ1', 'Jordan AJ4'],
      },
    ],
  },
  {
    gender: 'unisex',
    categories: [
      // Add unisex categories and subcategories as needed
    ],
  },
  {
    gender: 'all',
    categories: [
      // Add categories and subcategories for all genders as needed
    ],
  },
];

export default ProductItems;
