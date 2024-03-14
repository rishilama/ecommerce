import React from 'react';
import "./Cards.css";
import { Link } from 'react-router-dom';

function Cards({ categoryProducts }) {
    const filteredProducts = categoryProducts.filter(prod => prod); // Filter out null or undefined values

    // Function to scroll to the top of the website
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
            <div className="card-container">
            {filteredProducts.map((prod) => (
                <Link
                    key={prod.id}
                    to={`/${prod.productName}`}
                    className="product-link"
                    onClick={scrollToTop} // Add onClick event to trigger scrolling to top
                >
                    <div className="product-card">
                        <div className="single-product__image-container">
                            <div className="single-product__image-container">
                                {prod.productImages.length > 0 && (
                                    <img src={`/images/product_images/${prod.productImages[0]}`} alt={prod.productImages[0]} className='cardClick' />
                                )}
                            </div>
                            <div className="product-details">
                                <p>{prod.subcategory}</p>
                                <h4>{prod.productName}</h4>
                                <p>${prod.productPrice}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Cards;
