import React, { useRef, useState } from 'react';
import "./Cards.css";
import { Link } from 'react-router-dom';

function Cards({ categoryProducts }) {
    const filteredProducts = categoryProducts.filter(prod => prod);
    const [startX, setStartX] = useState(null);
    const [endX, setEndX] = useState(null);
    const cardContainerRef = useRef(null);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (startX && endX) {
            const difference = endX - startX;
            if (Math.abs(difference) > 50) { // Arbitrary threshold for swipe
                if (difference > 0) {
                    scrollNext();
                } else {
                    scrollPrevious();
                }
            }
        }
        setStartX(null);
        setEndX(null);
    };

    const scrollNext = () => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollBy({
                top: 0,
                left: window.innerWidth,
                behavior: 'smooth'
            });
        }
    };

    const scrollPrevious = () => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollBy({
                top: 0,
                left: -window.innerWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div
            ref={cardContainerRef}
            className="card-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {filteredProducts.map((prod) => (
                <Link
                    key={prod.id}
                    to={`/${prod.productName}`}
                    className="product-link"
                >
                    <div className="product-card">
                        <div className="single-product__image-container">
                            {prod.productImages.length > 0 && (
                                <img src={`/images/product_images/${prod.productImages[0]}`} alt={prod.productImages[0]} className='cardClick' />
                            )}
                        </div>
                        <div className="product-details">
                            <div className="product-details__categoryDetails">
                                <p>{prod.subcategory}</p>
                                <p>{prod.category}</p>
                            </div>
                            <h4>{prod.productName}</h4>
                            <p>${prod.productPrice}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Cards;
