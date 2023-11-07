import React from 'react';
import productsData from '../data/productosData.json';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={'/images/'+product.image} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <p>Precio: ${product.precio}</p>
      <p>{product.descripcion}</p>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="product-list">
      {productsData.products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
      <hr></hr>
    </div>
  );
};

export default ProductList;
