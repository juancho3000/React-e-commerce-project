import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import CartPage from "./components/ProductsBuyDetails/cart-page";
import MainPage from './components/mainPage/mainPage';
import ItemListContainer from './components/itemsListDetails/itemListContainer';
import ItemDetailContainer from './components/itemsListDetails/itemDetailContainer';
import DatabasePrueba from './components/dbPrueba/databasePrueba';
import SendOrders from './components/ordersComponent/orders';
import ShopCartProvider from './components/context/cartContext';
import RenderPage from './components/mainPage/render';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ShopCartProvider>
      <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/ItemListC" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
            <Route path="/ItemDetail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/CartProducts" element={<CartPage/>}/>
            <Route path="/Render" element={<RenderPage/>}/>
            <Route path="/dbPrueba" element={<DatabasePrueba/>}/>
            <Route path="/ordersDemand" element={<SendOrders/>}/>
            <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
          </Routes>
          </ShopCartProvider>
          </BrowserRouter>
    </div>
  );
}

