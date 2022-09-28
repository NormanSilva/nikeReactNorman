import './App.css';
import NavBar from "../src/Components/NavBar/NavBar";
import ItemListContainer from '../src/Components/ItemList/ItemListContainer';
import Hero from './Components/Hero/Hero';
import Banners from './Components/Banners/Banners';
import ItemCount from "./Components/ItemCount/ItemCount";





function App() {
  return (
    <>
      <div>
        <NavBar/>
      </div>
      <Hero/>
      <ItemListContainer greeting = "Bienvenido a mi E-Commerce"/>
      <ItemCount/>
    

      <Banners/>
      






    </>
  );
}

export default App;
