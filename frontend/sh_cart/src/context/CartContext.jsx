import { useEffect } from "react";
import { useState } from "react";
import { createContext,useContext } from "react";


const CartContext=createContext()

export const useCart=()=>useContext(CartContext)

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([])

    useEffect(()=>{
        const savedCart=localStorage.getItem(cart);
        if(savedCart){
            setCart(JSON.parse(savedCart))
        }
    })

    useEffect(()=>{
       localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    const addToCart=(product)=>{
        setCart((prev)=>[...prev,product])
    }
  
    return(
        <CartContext.Provider value={{cart,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}