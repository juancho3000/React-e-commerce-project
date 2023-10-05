import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderPage from './components/header';
import MainPage from './components/main-page';
import ProductosComprar from './components/products-comprar';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderPage/>
        <MainPage/>
          <Routes>
            <Route path="/Main-Page" element={<MainPage/>}/>
            <Route path="/Products-compra" element={<ProductosComprar/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
