// src/data/ProductItems.js
const ProductItems = [
  {
    gender: 'men',
    categories: [
      {
        name: 'Sneaker',
        subcategories: ['Nike Air Max', 'Nike React', 'Nike Dunk', 'Jordan Retro', 'Jordan AJ1', 'Jordan AJ4'],
      },
      {
        name: 'Watches',
        subcategories: ['Casio G-Shock', 'Casio Edifice', 'Casio Pro Trek'],
      },
      {
        name: 'Apparels',
        subcategories: ['Hoodie Pullover', 'Hoodie Zip-up', 'Hoodie Graphic', 'Sweatshirt Crewneck', 'Sweatshirt Hooded'],
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
