import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FirebaseDataFetcher from "../../components/test/databaseTest";
import Cards from "../../components/Cards/Cards";
import "./CategoryPage.css";

function CategoryPage() {
  const [data, setData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const location = useLocation();
  const [uniqueSubcategories, setUniqueSubcategories] = useState([]);
  // Extract category from the URL
  const categoryFromUrl = location.pathname.split("/")[2];
  const genderFromUrl = location.pathname.split("/")[1];

  useEffect(() => {
    // Filter products based on the category and gender from the URL
    const filteredProducts = data.filter(
      (product) =>
        product.category === categoryFromUrl && product.gender === genderFromUrl
    );
    setCategoryList(filteredProducts);
  }, [data, categoryFromUrl, genderFromUrl]);

  // Extract subcategories from filtered products
  useEffect(() => {
    const subcategories = [
      ...new Set(categoryList.map((product) => product.subcategory)),
    ];
    setUniqueSubcategories(subcategories);
  }, [categoryList]);

  // return (
  //     <div className='parent-container'>
  //         <div className='categoryPage'>
  //             {/* Display products for each unique subcategory */}
  //             {uniqueSubcategories.map(subcategory => (
  //                     <div className='cardsContainer' key={id}>
  //                         <div className="cardsContainer__leftSection">
  //                             <div className="cardsContainer__categoryText">
  //                                 <h3 className='cardsContainer__categoryName'>{subcategory}</h3>

  //                                 <h3 className='cardsContainer__categoryLink'><Link to={`/${genderFromUrl}/${categoryFromUrl}/${subcategory}`}>View All</Link></h3>
  //                             </div>
  //                             <img className="categoryPage__subcategoryImage" src="/images/nike.jpg" alt="category-pic" />
  //                         </div>
  //                         <div className="cardsContainer__rightSection">
  //                             <Cards categoryProducts={categoryList.filter(product =>
  //                                 product.subcategory === subcategory).slice(-4)} />
  //                         </div>
  //                     </div>
  //             ))}
  //             <FirebaseDataFetcher setCategoryProducts={setData} />
  //         </div>
  //     </div>
  // );

  return (
    <div className="parent-container">
      {uniqueSubcategories.map((subcategory, index) => (
        <div className="categoryPage" style={{width: index % 2 !== 0 ? "102%" : "100%",}}>
          <div className="cardsContainer" >
            {index % 2 !== 0 ? (
                <>
              <div className="oddIndex">
                <div className="cardsContainer__leftSection">
                  <Cards categoryProducts={categoryList.filter((product) => product.subcategory === subcategory).slice(-4)} />
                </div>
                <div className="cardsContainer__rightSection">
                  <div className="cardsContainer__categoryText">
                    <h3 className="cardsContainer__categoryName">{subcategory}</h3>
                    <h3 className="cardsContainer__categoryLink"><Link to={`/${genderFromUrl}/${categoryFromUrl}/${subcategory}`}>View All</Link></h3>
                  </div>
                  <img className="categoryPage__subcategoryImage" src={`/images/${subcategory}.jpg`} alt="category-pic" />
                </div>
                <div className="btnSection">
                <Link to={`/${genderFromUrl}/${categoryFromUrl}/${subcategory}`}><button className="smallScrBtn">View All</button></Link>
                </div>
              </div>
              </>
            ) : (
                <>
              <div className="evenIndex">
                <div className="cardsContainer__leftSection">
                  <div className="cardsContainer__categoryText">
                    <h3 className="cardsContainer__categoryName">{subcategory}</h3>
                    <h3 className="cardsContainer__categoryLink"><Link to={`/${genderFromUrl}/${categoryFromUrl}/${subcategory}`}>View All</Link></h3>
                  </div>
                  <img className="categoryPage__subcategoryImage" src={`/images/${subcategory}.jpg`} alt="category-pic"/>
                </div>
                <div className="cardsContainer__rightSection">
                  <Cards categoryProducts={categoryList.filter((product) => product.subcategory === subcategory).slice(-4)}/>
                </div>
                <div className="btnSection">
                <Link to={`/${genderFromUrl}/${categoryFromUrl}/${subcategory}`}><button className="smallScrBtn">View All</button></Link>
                </div>
              </div>
              </>
            )}
          </div>
        </div>
      ))}
      <FirebaseDataFetcher setCategoryProducts={setData} />
    </div>
  );
}

export default CategoryPage;
