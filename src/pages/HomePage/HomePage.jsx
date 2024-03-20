import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import HeroSection from "../../components/HeroSection/HeroSection";
import FirebaseDataFetcher from "../../components/test/databaseTest";
import "./HomePage.css";

const HomePage = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const navigate = useNavigate();

  console.log(categoryProducts, fetchedData)
  const handleCardClick = (productName) => {
    const newURL = `/${productName}`;
    navigate(newURL);
  };

  const reverseArrayById = (arr) => {
    // Convert id to number and sort in descending order
    return arr.sort((a, b) => parseInt(b.id) - parseInt(a.id));
  };

  const fetchSimilarProducts = async () => {
    try {
      const database = getDatabase();
      const snapshot = await get(ref(database, "/"));
      const data = snapshot.val();

      if (data) {
        const reversedArray = reverseArrayById(data);
        setCategoryProducts(reversedArray);

        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        let paginatedProducts = reversedArray.slice(startIndex, endIndex);

        if (paginatedProducts.length < itemsPerPage) {
          const remainingItemsCount = itemsPerPage - paginatedProducts.length;
          const additionalItems = reversedArray.slice(0, remainingItemsCount);
          paginatedProducts = [...paginatedProducts, ...additionalItems];
        }

        setSimilarProducts(paginatedProducts);
      } else {
        console.error("No data found in Firebase");
      }
    } catch (error) {
      console.error("Error fetching similar products:", error);
    }
  };

  useEffect(() => {
    fetchSimilarProducts();
    // eslint-disable-next-line
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200 && window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <HeroSection />

      <div className="newArrivalsSection">
        <div className="parent-container">
          <FirebaseDataFetcher
            setCategoryProducts={setCategoryProducts}
            setFetchedData={setFetchedData}
          />

          <div className="new-arrivals__head-section">
            <h2
              style={{
                textAlign: "center",
                marginTop: "38px",
                marginBottom: "30px",
              }}
            >
              New Arrivals
            </h2>
            {/* <Link to="/new_arrivals">
              <p style={{ textAlign: "right" }}>View All</p>
            </Link> */}
          </div>

          <div className="similar-product__parentContainer">
            <div className="similar-product-grid__prev-button">
              <FontAwesomeIcon onClick={prevPage} icon={faArrowLeft} />
            </div>
            <div className="similar-product__parent-class">
              <Cards
                categoryProducts={similarProducts}
                handleCardClick={handleCardClick}
              />
            </div>
            <div className="similar-product-grid__next-button">
              <FontAwesomeIcon onClick={nextPage} icon={faArrowRight} />
            </div>
          </div>
        </div>


        <div className="viewAll__btnSection">
                <Link to="new_arrivals"><button className="viewAllBtn">View All</button></Link>
                </div>
      </div>
    </>
  );
};

export default HomePage;
