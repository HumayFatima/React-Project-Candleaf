import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cards from './Cards.jsx'
import CardsFooter from './CardsFooter.jsx'
import ProductPage from './ProductPage.jsx'; 

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="./Cards.jsx">Kartlar</Link>
            </li>
            <li>
              <Link to="./ProductPage.jsx">Ürün Sayfası</Link>
            </li>
          </ul>
        </nav>

        <Route path="./Cards.jsx" exact component={Cards} />
        <Route path="./CardsFooter.jsx" exact component={CardsFooter} />
        <Route path="./ProductPage.jsx" component={ProductPage} />
      </div>
    </Router>
  );
};

export default App;