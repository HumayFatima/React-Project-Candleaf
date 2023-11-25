import React, { useState } from 'react';
import './App.css';


const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [oneTimePurchase, setOneTimePurchase] = useState(false);
  const [subscribeDelivery, setSubscribeDelivery] = useState(false);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOneTimePurchaseChange = () => {
    setOneTimePurchase(!oneTimePurchase);
  };

  const handleSubscribeDeliveryChange = () => {
    setSubscribeDelivery(!subscribeDelivery);
  };

  return (
    <div className="product-container">
      <div className="product-details">
        <h2>Spiced Mint Candleaf®</h2>
        <p>$99.99</p>
        <div className="quantity">
          <p>Quantity {quantity}</p>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
        <div className="options">
          <div>
            <input
              type="checkbox"
              checked={oneTimePurchase}
              onChange={handleOneTimePurchaseChange}
            />
            <label>One time purchase</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={subscribeDelivery}
              onChange={handleSubscribeDeliveryChange}
            />
            <label>Subscribe and delivery every</label>
            <p>
              Subscribe now and get a 10% discount on every recurring order. The discount will be applied at checkout.
              See more...
            </p>
          </div>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
      <div className="product-image">
        <img src="image 1.jpg" alt="Product Image" />
        <h3>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</h3>
      </div>
    </div>
  );
};

export default Product;