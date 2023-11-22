import React, { useState } from 'react';
import './App.css';

const RepairServiceCard = ({ Image, service, description, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`repair-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-content">
        {Image && <img src={Image} alt={service} className="card-image" />}
        {service && <h3>{service}</h3>}
        {description && <p>{description}</p>}
        {price && <p className="price">{price}</p>}
      </div>
    </div>
  );
};

const RepairServices = () => {
  const repairData = [
    { Image: 'image 1.jpg', service: 'Spiced Mint', price: '9.99$' },
    { Image: 'image 2.jpg', service: 'Sweet Straweberry', price: '9.99$' },
    { Image: 'image 3.jpg', service: 'Cool Blueberries', price: '9.99$' },
    { Image: 'image 4.jpg', service: 'Juicy Lemon', price: '9.99$' },
    { Image: 'image 5.jpg', service: 'Product name', price: '9.99$' },
    { Image: 'image 6.jpg', service: 'Fragrant Cinnamon', price: '9.99$' },
    { Image: 'image 7.jpg', service: 'Summer Cherries', price: '9.99$' },
    { Image: 'image 8.jpg', service: 'Clean Lavander', price: '9.99$' },
  ];

  return (
    <div className="repair-container">
      <h2>Products</h2>
      <p>Order it for you or for your beloved ones </p>
      <div className="repair-cards">
        {repairData.map((data, index) => (
          <RepairServiceCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default RepairServices;