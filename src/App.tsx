import React from 'react';
import HomePage from './Pages/HomePage';
import ProductDetail from './Pages/PageProductDetails/ProductDetailPage';
import CategoryDetails from './Pages/PageCategory/CategoryDetails';
import { ProductsDetails } from './Pages/PageProductDetails/Utils/Contants';

const App: React.FC = () => {
  return (
    <>
      {/* <CategoryDetails /> */}
      <ProductDetail/>
      
    </>
  );
};

export default App;
