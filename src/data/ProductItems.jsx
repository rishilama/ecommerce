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
        subcategories: ['Nike', 'Nike React', 'Nike Dunk', 'Jordan Retro', 'Jordan AJ1', 'Jordan AJ4'],
      },
      {
        name: 'Apparels',
        subcategories: ['adidas', 'Sweatshirt', 'Collar Sweatshit', 'Jacket', 'Jeans'],
      },
    ],
  },
  {
    gender: 'unisex',
    categories: [
      {
        name: 'Watches',
        subcategories: ['Rolex', 'Armani Exchange', 'Emporio Armani'],
      },
    ],
  },
];

export default ProductItems;
