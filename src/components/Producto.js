let ShowProducto = (unProducto) =>{
    return(
    <div>
        <img src={'/images/'+unProducto.img} alt={unProducto.nombre} />
        <h3>{unProducto.nombre}</h3>
        <h4>${unProducto.precio}</h4>
        <p>{unProducto.descripcion}</p>
        <p>SKU: {unProducto.sku}</p>
        <p>Disponibles: {unProducto.cantidad}</p>
    </div>
    )
}
export default ShowProducto;