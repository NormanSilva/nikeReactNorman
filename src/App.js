import './App.css';
import NavBar from "../src/Components/NavBar/NavBar";
import ItemListContainer from '../src/Components/ItemList/ItemListContainer';
import Hero from './Components/Hero/Hero';
import Banners from './Components/Banners/Banners';
// import ItemCount from "./Components/ItemCount/ItemCount";
import ItemLDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {



  return (
    <>
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







        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
