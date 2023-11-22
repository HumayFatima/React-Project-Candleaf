import React from 'react';
import Rating from 'react-rating';
import './App.css'; 

const App = () => {
  return (
    <div className="contentcards">
      <div className="sectioncontent">
        <h1>Testimonials</h1>
        <p>Some quotes from our happy customers</p>
      </div>
      <div className="sectioncontentcards">
        <div className="cardcontent">
          <img className="profile-img" src="bg 01.jpg" alt="" />
          <div className="rating">
         <>
          <Rating />
       </>
          </div>
          <h2>“I love it! No more air fresheners”</h2>
          <p>Luisa</p>
        </div>
      </div>

      <div className="sectioncontentcards">
        <div className="cardcontent">
          <img className="profile-img" src="bg 02.jpg" alt="" />
          <div className="rating">
          <>
          <Rating />
          </>
          </div>
          <h2>“Raccomended for everyone”</h2>
          <p>Edoardo</p>
        </div>
      </div>

      <div className="sectioncontentcards">
        <div className="cardcontent">
          <img className="profile-img" src="bg 03.jpg" alt="" />
          <div className="rating">
          <Rating />
          </div>
          <h2>“Looks very natural, the smell is awesome”</h2>
          <p>Mart</p>
        </div>
      </div>
    </div>
  );

}

export default App;
