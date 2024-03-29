import {createContext, useState} from "react";

export const CartContext = createContext({cart: []})

export const ShopCartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const agregarCarro = (item, qty) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, qty}])
        } else {
            alert("ya se agrego este producto")
        }
    }

    const quitarDelCarro = (prodId) => {
        const removerCompra = [...cart].filter(product => product.id !== prodId)
        setCart(removerCompra)
    }

    const limpiarCarro = () => {
        setCart([])
    }

    const isInCart = (prodId) => {
        return cart.some(product => product.id === prodId)
    }

    const totalQty = cart.map(value => value.cantidad);
    
    
    const total = cart.map(value => value.price * value.qty)

    const outcomePrice = total.length
    
    const totalBuy = total.reduce((acc, item) => (acc +=item),0)
   
console.log(outcomePrice, totalQty, total, "prueba para ver cantidad total")
    return(
        <CartContext.Provider value={{cart, agregarCarro, quitarDelCarro, limpiarCarro, outcomePrice, totalBuy}}>
            {children}
        </CartContext.Provider>
    )
}
export default ShopCartProvider;