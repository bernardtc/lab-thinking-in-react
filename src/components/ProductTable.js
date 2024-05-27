// src/components/ProductTable.js

import React, { useState } from 'react';
import ProductRow from './ProductRow'

function ProductTable ({products}) {
  const [search, setSearch] = useState();
  
  return(
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>In Stock</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <ProductRow key={product.name} product={product} />
      ))}
    </tbody>
  </table>    
  )
}

export default ProductTable;