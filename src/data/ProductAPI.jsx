// src/api/ProductAPI.js
const ProductAPI = {
    products: {
      men: {
        sneaker: {
          'nike air max': [
            { id: 1, name: 'Air Max 1', price: 120 },
            { id: 2, name: 'Air Max 90', price: 150 },
            { id: 3, name: 'Air Max 95', price: 180 },
          ],
          'nike react': [
            { id: 4, name: 'React Element 55', price: 130 },
            { id: 5, name: 'React Infinity Run', price: 160 },
          ],
          'nike dunk': [
            { id: 6, name: 'Dunk Low', price: 100 },
            { id: 7, name: 'Dunk High', price: 110 },
          ],
        },
        watches: {
          'casio g-shock': [
            { id: 8, name: 'G-Shock GA-2100', price: 200 },
            { id: 9, name: 'G-Shock DW-5600', price: 120 },
          ],
          'casio edifice': [
            { id: 10, name: 'Edifice EFV-550', price: 180 },
            { id: 11, name: 'Edifice ECB-900', price: 250 },
          ],
          'casio pro trek': [
            { id: 12, name: 'Pro Trek PRW-3100', price: 300 },
            { id: 13, name: 'Pro Trek PRT-B50', price: 220 },
          ],
        },
        apparels: {
          'hoodie pullover': [
            { id: 14, name: 'Pullover Hoodie', price: 80 },
            { id: 15, name: 'Graphic Hoodie', price: 90 },
          ],
          'hoodie zip-up': [
            { id: 16, name: 'Zip-Up Hoodie', price: 85 },
            { id: 17, name: 'Color Block Zip Hoodie', price: 95 },
          ],
          'hoodie graphic': [
            { id: 18, name: 'Graphic Print Hoodie', price: 100 },
            { id: 19, name: 'Abstract Design Hoodie', price: 110 },
          ],
          'sweatshirt crewneck': [
            { id: 20, name: 'Crewneck Sweatshirt', price: 70 },
            { id: 21, name: 'Basic Crew Sweatshirt', price: 75 },
          ],
          'sweatshirt hooded': [
            { id: 22, name: 'Hooded Sweatshirt', price: 90 },
            { id: 23, name: 'Printed Hooded Sweatshirt', price: 100 },
          ],
        },
      },
      women: {
        sneaker: {
          'nike air max': [
            { id: 24, name: 'Air Max 1', price: 130 },
            { id: 25, name: 'Air Max 90', price: 160 },
            { id: 26, name: 'Air Max 95', price: 190 },
          ],
        },
      },
    }
  };
  
  export default ProductAPI;
  