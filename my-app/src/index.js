import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/BaiTapThucHanhLayout/Header';
import Banner from './Components/BaiTapThucHanhLayout/Banner';
import Item from './Components/BaiTapThucHanhLayout/Item';
import Footer from './Components/BaiTapThucHanhLayout/Footer';
import Body from './Components/BaiTapThucHanhLayout/Body';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header />
  <div className='container px-0'>
     <Body />
  </div>
  <Footer />
  </>
);


