import { createContext, useState } from "react";


export const cartContext = createContext()

export default function CartContextProvider(props) {

    const [cart, setCart] = useState([]);
    // const [totalPrecio, setTotalPrecio] = useState(0)

    function addItemCount(item) {
        let newItem = [...cart]
        let producto = newItem.some((element) => {
            return element.id === item.id
        })
        if(producto === true){
            newItem.map((element) => {
                if (element.id === item.id){
                   element.count = element.count + item.count
                }
                return(element)
            })
        }else{
            newItem.push(item)
        }
        setCart(newItem) 
        console.log("carrito", newItem)

        

    }
        const deleteItem = (id) => {
            setCart(cart.filter(element => element.id !== id))
        }

        const vaciarCarrito = () =>{
            setCart([]);
        }
        
        const totalPrecio = () => {
            let total = 0
            cart.forEach((e) => total += (e.count * e.price))
            return total
        }
        
        
        
        

    return (
        <cartContext.Provider value={{cart, addItemCount, deleteItem, vaciarCarrito, totalPrecio}}>
            {props.children}
        </cartContext.Provider>
    )
    
}