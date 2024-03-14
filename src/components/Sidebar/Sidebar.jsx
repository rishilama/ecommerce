// Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

// const Sidebar = ({ onSelectsubcategory, onCategoryClick, fetchedData }) => {
const Sidebar = ({ onSelectsubcategory = () => {}, onCategoryClick, fetchedData }) => {
  
  const location = useLocation();
  const currentPath = location.pathname.split("/").filter((item) => item !== "");

  const isCategoryOpen = (gender, category) =>
    currentPath.length > 2 &&
    currentPath[0] === gender.toLowerCase() &&
    currentPath[1].toLowerCase() === category.toLowerCase();

  const handleCategoryClick = (gender, category) => {
    try {
      onSelectsubcategory(null);
      const categoryProducts = fetchedData.filter(
        (item) => item.gender === gender && item.category === category
      );
      console.log("Category Products:", categoryProducts);
      onCategoryClick(category, categoryProducts);
    } catch (error) {
      console.error("Error in handleCategoryClick:", error);
    }
  };

  const currentGender = currentPath[0] ? currentPath[0].toLowerCase() : "";

  // Manually specify the desired order of categories
  const categoryOrder = ["sneaker", "watches", "apparels"];

  // Filter categories based on the specified gender and order them accordingly
  const uniqueCategories = categoryOrder.filter((category) =>
    fetchedData && fetchedData.some(
      (item) => item.gender === currentGender && item.category === category
    )
  );

  return (
    <div className="sidebar">
      {uniqueCategories.map((category) => {
        const uniqueSubcategories = Array.from(
          new Set(
            fetchedData
              .filter(
                (item) => item.gender === currentGender && item.category === category
              )
              .map((item) => item.subcategory)
          )
        );

        return (
          <div key={`${currentGender}-${category}`} className="sidebar-gender">
            <ul>
              <li
                key={`${currentGender}-${category}-main`}
                className={isCategoryOpen(currentGender, category) ? "active" : ""}
              >
                <Link
                  className="sidebarCategoryLink categoryLink"
                  to={`/${currentGender}/${category.toLowerCase()}`}
                  onClick={() => handleCategoryClick(currentGender, category)}
                >
                  {category.toLowerCase()}
                </Link>
                <ul>
                  {uniqueSubcategories.map((subcategory) => (
                    <li
                      key={`${currentGender}-${category}-${subcategory}-subcategory`}
                      className={currentPath[3] === subcategory.toLowerCase() ? "active" : ""}
                    >
                      <Link
                        className="sidebarCategoryLink subcategory"
                        to={`/${currentGender}/${category.toLowerCase()}/${subcategory.toLowerCase()}`}
                        onClick={() => onSelectsubcategory(subcategory)}
                      >
                        {subcategory.toLowerCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
