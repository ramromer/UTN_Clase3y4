import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaProductos from './components/ListaProductos';
import ShowProducto from './components/Producto';


function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
          {/* Route for the product list */}
          <Route path="/" element={<ListaProductos />} />

          {/* Route for showing a single product */}
          <Route path="/product/:productId" element={<ShowProducto />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
