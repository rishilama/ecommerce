import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ onCartVisibilityChange, cartVisiblity }) => {
  const [cartItems, setCartItems] = useState([]);
  const initialCartItems = useRef([]);

  const toggleVisibility = () => {
    onCartVisibilityChange(false);
  };

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    initialCartItems.current = storedCartItems;
    setCartItems(storedCartItems);
  }, [cartItems]); // Trigger the effect when cartItems changes

  const totalPrice = cartItems
    .reduce((total, item) => total + parseFloat(item.productPrice), 0)
    .toFixed(2);

  return (
    <div
      className={`cart-container ${cartVisiblity ? "visible" : "hidden"}`}
    >
      <div className="cartComponent">
        <div className="cartHeading">
          <h2>Shopping Cart</h2>
          <h2>
            <FontAwesomeIcon
              icon={faTimes}
              className="close-icon"
              onClick={toggleVisibility}
            />
          </h2>
        </div>
        <hr />
        <div className="parentCartItem">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className={`cartItem ${
                index === cartItems.length - 1 ? "lastItem" : ""
              }`}
            >
              <div className="imageContainer">
                <img
                  src={`/images/product_images/${item.productImages[0]}`}
                  alt={item.productName}
                  className="cartImage"
                />
              </div>
              <div className="cartProductDetails">
                <div className="cart__crudItems">
                  <div className="cartComponent__subcategorySection">
                    <p>{item.subcategory}</p>
                  </div>
                  <div className="removeItem">
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="removeProductIcon"
                      onClick={() => removeItem(index)}
                    />
                  </div>
                </div>
                <p>
                  <b>{item.productName}</b>
                </p>
                <p>Size: {item.selectedSize}</p>
                <p>Price: ${item.productPrice}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="subtotal">
          <div className="subtotalDetails">
            <h2>Subtotal:</h2>
            <h2> ${totalPrice}</h2>
          </div>
          <div className="checkoutButtonSection">
            <Link to='/checkout'><button  className="checkoutButton">Checkout</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;