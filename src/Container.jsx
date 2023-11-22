import React from 'react';
import './App.css'; 


const App = () => {
  return (
    <div className="section">
      <div className="left-section">
        <div>
          <h1>Clean and <br/> fragrant soy wax</h1>
          <p>Made for your home and for your wellness</p>
          <br/>
          <h4> <img src="check-mark.png" alt="" /> Eco-sustainable:All recyclable materials, 0% CO2 emissions</h4>
          <h4> <img src="check-mark.png" alt="" /> Hyphoallergenic: 100% natural, human friendly ingredients</h4>
          <h4> <img src="check-mark.png" alt="" /> Handmade: All candles are craftly made with love.</h4>
          <h4> <img src="check-mark.png" alt="" /> Long burning: No more waste. Created for last long.</h4>
          <button>Learn more</button>
        </div>
      </div>
      <div className="right-section">
        <div>
          <img src="Candle_Mockup.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;