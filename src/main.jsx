import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import HeaderContainer from './HeaderContainer.jsx'
import Cards from './Cards.jsx'
import Container  from './Container.jsx'
import ContentCards from './ContentCards.jsx'
import './App.css'



ReactDOM.createRoot(document.getElementById('root')).render(
<>
<Header />
<HeaderContainer />
<Cards />
<Container />
<ContentCards />
</>
)
