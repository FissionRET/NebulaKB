import {createContext, useContext, useState} from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    }

    return (
        <CartContext.Provider
            value={{cart, addToCart, removeFromCart}}
        >
            {children}
        </CartContext.Provider>
    );
}