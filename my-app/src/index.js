import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Item from './Components/Item';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header />
  <div className='container'>
     <Banner />

     <Item />
  </div>
  <Footer />
  </>
);


