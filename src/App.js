import './App.css';
import NavBar from "../src/Components/NavBar/NavBar";
import ItemListContainer from '../src/Components/ItemList/ItemListContainer';
import Hero from './Components/Hero/Hero';
import Banners from './Components/Banners/Banners';
// import ItemCount from "./Components/ItemCount/ItemCount";
import ItemLDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from "./Components/Cart/Cart"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  CartContextProvider from './Context/Context';
import firebaseApp from './services/firebase';

function App() {

  console.log(firebaseApp)

  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar/>
        </div>

        <Routes>
          <Route path = "/" element = {
            <>
              <Hero/>
              <ItemListContainer greeting = "Bienvenido a mi E-Commerce"/>
              <Banners/>
            </>
          }/>

          <Route path = "/item/:id" element = {<ItemLDetailContainer/>}/>
          <Route path = "/category/:categoryId" element = {<ItemListContainer/>}/>
          <Route path = "/cart" element = {<Cart/>} />



        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
