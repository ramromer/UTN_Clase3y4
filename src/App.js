import './App.css';
import ShowProducto from './components/Producto';

function App() {
  return (
    <div className="App">
        <ShowProducto img='imagen2.jpg'nombre = 'Lavarropas' precio = '60000' descripcion='Lavarrpas Dream 60 Litros'/>
    </div>
  );
}

export default App;
