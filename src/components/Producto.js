// let ShowProducto = (unProducto) =>{
//     return(
//     <div>
//         <img src={'/images/'+unProducto.img} alt={unProducto.nombre} />
//         <h3>{unProducto.nombre}</h3>
//         <h4>${unProducto.precio}</h4>
//         <p>{unProducto.descripcion}</p>
//         <p>SKU: {unProducto.sku}</p>
//         <p>Disponibles: {unProducto.cantidad}</p>
//     </div>
//     )
// }
// export default ShowProducto;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowProducto = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // Assuming you have a function to fetch data from the JSON file or an API
    const fetchData = async () => {
      try {
        // Importing the JSON file dynamically (replace with the correct path)
        const response = await import(`../data/productosData.json`);
        const data = await response.default;

        // Find the product details based on the productId
        const product = data.products.find((product) => product.nombre === productId);

        // Set the product details to the state
        setProductDetails(product);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productId]);

  if (!productDetails) {
    return <p>Loading...</p>; // You can show a loading indicator while fetching data
  }

  return (
    <div className="product-details">
      <h2>{productDetails.nombre}</h2>
      <img src={`/images/${productDetails.image}`} alt={productDetails.nombre} />
      <p>Precio: ${productDetails.precio}</p>
      <p>{productDetails.descripcion}</p>
    </div>
  );
};

export default ShowProducto;
