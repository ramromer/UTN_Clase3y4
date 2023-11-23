import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowProducto = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        // hacemos fetch de los datos
        const response = await import(`../data/productosData.json`);
        const data = await response.default;

        // Buscamos el producto por ID
        const product = data.products.find((product) => product.nombre === productId);

        // cargamos ese producto
        setProductDetails(product);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productId]);

  if (!productDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container px-4 py-5'>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
            <h2>{productDetails.nombre}</h2>
            <img
                src={`/images/${productDetails.image}`}
                alt={productDetails.nombre}
                className="img-fluid"
            />
            
            <h3>Precio: ${productDetails.precio}</h3>
            <p>{productDetails.descripcion}</p>
            </div>
        </div>
    </div>
  );
};

export default ShowProducto;
