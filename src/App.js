import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//import HeaderPage from './components/header';
//import ItemListContainer from './components/item-listContainer';
import ProductosComprar from './components/products-comprar';
import Footer from './components/footer';
//import NavBar from './components/navBar';
//import ItemList from './components/item-list';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <div className="App">
      <Router>
      
        
        <ItemListContainer greeting={"bienvenido"}/>
        <Footer/>
          <Routes>
            
            <Route path="/Products-compra" element={<ProductosComprar/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
