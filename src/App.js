import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import CartPage from "./components/ProductsBuyDetails/cart-page";
import MainPage from './components/mainPage/mainPage';
import ItemListContainer from './components/itemsListDetails/itemListContainer';
import ItemDetailContainer from './components/itemsListDetails/itemDetailContainer';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/ItemListC" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
            <Route path="/ItemDetail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/CartProducts" element={<CartPage/>}/>
            <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

