import './App.css';
import ShowProducto from './components/Producto';

function App() {
  return (
    <div className="App">
        <ShowProducto img='imagen2.jpg'nombre = 'Lavarropas' precio = '60000' descripcion='Lavarrpas Dream 60 Litros' sku = '10' cantidad = '45'/>
    </div>
  );
}

export default App;
