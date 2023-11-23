import React from 'react';
import './App.css'; 


const PageEnd = () => {
  return (
    <div className="page-end">
      <div className="logo-container">
     <div className="logo-section">
     <img src="candle.png" alt="" />
     <h2>Candleaf</h2>
     </div>
     <div className="logo-description">
     <h4>Your natural candle made for  <br />  your home and for your wellness.</h4>
     </div>
   </div>
      <div className="info-section">
        <div className="info-item">
          <p>Discovery</p>
          <h4>New season</h4>
          <h4>Most searched</h4>
          <h4>Most selled</h4>
        </div>
        <div className="info-item">
          <p>About</p>
          <h4>Help</h4>
          <h4>Shipping</h4>
          <h4>Affiliate</h4>
        </div>
        <div className="info-item">
          <p>Info</p>
          <h4>Contact us</h4>
          <h4>Privacy Policies</h4>
          <h4>Terms & Conditions</h4>
        </div>
      </div>
    </div>
  );
};

export default PageEnd;