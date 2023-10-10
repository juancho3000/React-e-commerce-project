import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//import HeaderPage from './components/header';
import ItemListContainer from './components/item-listContainer';
import ProductosComprar from './components/products-comprar';
import Footer from './components/footer';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <ItemListContainer/>
        <Footer/>
          <Routes>
            <Route path="/Main-Page" element={<ItemListContainer/>}/>
            <Route path="/Products-compra" element={<ProductosComprar/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
