// src/components/ProductsPage.js

import React, { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products] = useState(jsonData);
  const [allProducts, setAllProducts] = useState(jsonData);
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable />
      </div>    
  )
}

export default ProductsPage;