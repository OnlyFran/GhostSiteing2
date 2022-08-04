import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    // states y functions globales
    const [cartList, setCartList] = useState([]);

    const addToCart = (prod) => {
        setCartList([
            ...cartList,
            prod
        ])
    }

    const vaciarCarrito = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider