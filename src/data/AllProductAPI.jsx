const AllProductAPI = [
  {
    id: 1,
    gender: 'men',
    category: 'sneaker',
    subcategory: 'nike',
    productName: 'Air Force "Louis Vuitton"',
    productPrice: 120,
    productImage: 'af1lv.jpg',
    sizes: '41-42-43-44-45',
  },
  {
    id: 2,
    gender: 'women',
    category: 'apparels',
    subcategory: 'adidas',
    productName: 'Adidas Originals Dress',
    productPrice: 80,
    productImage: 'adidas-dress.jpg',
    sizes: 'S-M-L-XL',
  },
  {
    id: 3,
    gender: 'unisex',
    category: 'watches',
    subcategory: 'rolex',
    productName: 'Rolex Submariner',
    productPrice: 10000,
    productImage: 'rolex-submariner.jpg',
    sizes: 'One Size',
  },
  {
    id: 4,
    gender: 'men',
    category: 'sneaker',
    subcategory: 'adidas',
    productName: 'Adidas UltraBoost',
    productPrice: 150,
    productImage: 'ultraboost.jpg',
    sizes: '40-41-42-43-44',
  },
  {
    id: 5,
    gender: 'women',
    category: 'watches',
    subcategory: 'casio',
    productName: 'Casio Vintage Watch',
    productPrice: 30,
    productImage: 'casio-watch.jpg',
    sizes: 'One Size',
  },
  {
    id: 6,
    gender: 'unisex',
    category: 'sneaker',
    subcategory: 'puma',
    productName: 'Puma RS-X Sneakers',
    productPrice: 110,
    productImage: 'puma-rs-x.jpg',
    sizes: '38-39-40-41-42',
  },
  {
    id: 7,
    gender: 'men',
    category: 'apparels',
    subcategory: 'nike',
    productName: 'Nike Logo T-shirt',
    productPrice: 25,
    productImage: 'nike-tshirt.jpg',
    sizes: 'S-M-L-XL',
  },
  {
    id: 8,
    gender: 'women',
    category: 'sneaker',
    subcategory: 'reebok',
    productName: 'Reebok Classic Leather',
    productPrice: 90,
    productImage: 'reebok-classic.jpg',
    sizes: '36-37-38-39-40',
  },
  {
    id: 9,
    gender: 'unisex',
    category: 'watches',
    subcategory: 'seiko',
    productName: 'Seiko Automatic Watch',
    productPrice: 200,
    productImage: 'seiko-watch.jpg',
    sizes: 'One Size',
  },
  {
    id: 10,
    gender: 'men',
    category: 'sneaker',
    subcategory: 'converse',
    productName: 'Converse Chuck Taylor All Star',
    productPrice: 60,
    productImage: 'converse-allstar.jpg',
    sizes: '39-40-41-42-43',
  },
  // Add 40 more products
  {
    id: 11,
    gender: 'women',
    category: 'apparels',
    subcategory: 'nike',
    productName: 'Nike Leggings',
    productPrice: 45,
    productImage: 'nike-leggings.jpg',
    sizes: 'S-M-L',
  },
  {
    id: 12,
    gender: 'unisex',
    category: 'sneaker',
    subcategory: 'vans',
    productName: 'Vans Old Skool',
    productPrice: 70,
    productImage: 'vans-oldskool.jpg',
    sizes: '37-38-39-40-41',
  },
  {
    id: 13,
    gender: 'men',
    category: 'watches',
    subcategory: 'citizen',
    productName: 'Citizen Eco-Drive Watch',
    productPrice: 150,
    productImage: 'citizen-watch.jpg',
    sizes: 'One Size',
  },
  {
    id: 14,
    gender: 'women',
    category: 'apparels',
    subcategory: 'puma',
    productName: 'Puma Hoodie',
    productPrice: 55,
    productImage: 'puma-hoodie.jpg',
    sizes: 'S-M-L',
  },
  {
    id: 15,
    gender: 'unisex',
    category: 'sneaker',
    subcategory: 'new-balance',
    productName: 'New Balance 990',
    productPrice: 180,
    productImage: 'new-balance-990.jpg',
    sizes: '40-41-42-43-44',
  },
  {
    id: 16,
    gender: 'men',
    category: 'watches',
    subcategory: 'omega',
    productName: 'Omega Seamaster',
    productPrice: 5000,
    productImage: 'omega-seamaster.jpg',
    sizes: 'One Size',
  },
  {
    id: 17,
    gender: 'women',
    category: 'apparels',
    subcategory: 'under-armour',
    productName: 'Under Armour Leggings',
    productPrice: 60,
    productImage: 'under-armour-leggings.jpg',
    sizes: 'S-M-L',
  },
  {
    id: 18,
    gender: 'unisex',
    category: 'sneaker',
    subcategory: 'asics',
    productName: 'Asics Gel-Kayano',
    productPrice: 130,
    productImage: 'asics-gel-kayano.jpg',
    sizes: '39-40-41-42-43',
  },
  {
    id: 19,
    gender: 'men',
    category: 'watches',
    subcategory: 'tag-heuer',
    productName: 'Tag Heuer Carrera',
    productPrice: 3000,
    productImage: 'tag-heuer-carrera.jpg',
    sizes: 'One Size',
  },
  {
    id: 20,
    gender: 'women',
    category: 'sneaker',
    subcategory: 'fila',
    productName: 'Fila Disruptor',
    productPrice: 85,
    productImage: 'fila-disruptor.jpg',
    sizes: '36-37-38-39-40',
  },
  {
    id: 21,
    gender: 'unisex',
    category: 'apparels',
    subcategory: 'nike',
    productName: 'Nike Tech Fleece Joggers',
    productPrice: 70,
    productImage: 'nike-tech-fleece.jpg',
    sizes: 'S-M-L-XL',
  },
  {
    id: 22,
    gender: 'men',
    category: 'sneaker',
    subcategory: 'under-armour',
    productName: 'Under Armour HOVR Phantom',
    productPrice: 140,
    productImage: 'under-armour-hovr.jpg',
    sizes: '41-42-43-44-45',
  },
  {
    id: 23,
    gender: 'women',
    category: 'watches',
    subcategory: 'michael-kors',
    productName: 'Michael Kors Smartwatch',
    productPrice: 250,
    productImage: 'michael-kors-smartwatch.jpg',
    sizes: 'One Size',
  },
  {
    id: 24,
    gender: 'unisex',
    category: 'apparels',
    subcategory: 'adidas',
    productName: 'Adidas Track Jacket',
    productPrice: 60,
    productImage: 'adidas-track-jacket.jpg',
    sizes: 'S-M-L-XL',
  },
  {
    id: 25,
    gender: 'men',
    category: 'sneaker',
    subcategory: 'vans',
    productName: 'Vans Sk8-Hi',
    productPrice: 75,
    productImage: 'vans-sk8-hi.jpg',
    sizes: '40-41-42-43-44',
  },
  {
    id: 26,
    gender: 'women',
    category: 'watches',
    subcategory: 'fossil',
    productName: 'Fossil Hybrid Smartwatch',
    productPrice: 120,
    productImage: 'fossil-hybrid.jpg',
    sizes: 'One Size',
  },
  {
    id: 27,
    gender: 'unisex',
    category: 'apparels',
    subcategory: 'puma',
    productName: 'Puma Sweatpants',
    productPrice: 45,
    productImage: 'puma-sweatpants.jpg',
    sizes: 'S-M-L-XL',
  },
  {
    id: 28,
    gender: 'men',
    category: 'sneaker',
    subcategory: 'converse',
    productName: 'Converse Chuck 70',
    productPrice: 80,
    productImage: 'converse-chuck70.jpg',
    sizes: '39-40-41-42-43',
  },
  {
    id: 29,
    gender: 'women',
    category: 'watches',
    subcategory: 'citizen',
    productName: 'Citizen Quartz Watch',
    productPrice: 90,
    productImage: 'citizen-quartz.jpg',
    sizes: 'One Size',
  },
  {
    id: 30,
    gender: 'unisex',
    category: 'apparels',
    subcategory: 'nike',
    productName: 'Nike Windbreaker',
    productPrice: 55,
    productImage: 'nike-windbreaker.jpg',
    sizes: 'S-M-L-XL',
  },


];

export default AllProductAPI;