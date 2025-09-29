import React from 'react'
import { useCart } from '../context/CartContext'
import { useState } from 'react';

const CartPage = () => {
    const [qty,setQty]=useState(1)
    const {cart}=useCart();
    const total=cart.reduce((a,b)=>a+b.price,0);

      const incQty=()=>{
        setQty((prev) => prev + 1);
    }
    const decQty=()=>{
        if(qty==0) return
      setQty((prev)=>prev-1)
    }
  return (
     <div className='max-w-4xl mx-auto p-5'>
        <h1 className='text-2xl font-bold mb-5'>Your Shopping Cart</h1>
        {cart.length===0?
        (<h4>Cart is Empty</h4>)
     :( 
        <div className='space-y-5'>

            {cart.map((item,index)=>(

            <div
            key={index}
            className='flex items-center justify-between border p-4 rounded-lg shadow-sm'>
                <div className='flex items-center gap-4'>
                      <img 
                        src={item.imageUrl}
                        alt="item.name" 
                        className='w-20 h-20 object-cover rounded-lg'
                        />
                    <div>
                        <h1 className='font semi-bold'>{item.name}</h1>
                        <p className='text-gray-500'>{item.price}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <button onClick={()=>decQty()}>-</button>
                    <span>{qty}</span>
                    <button onClick={()=>incQty()}>+</button>
                    <button>remove</button>
                </div>
            </div>
               ))}
        </div>
        )}
        {/* Total price */}
        <div className='mt-8 p-5 shadow rounded-lg shadow-sm'>
            <h2 className='text-xl font-bold'>Total:${total}</h2>
            <button className='bg-blue-600 text-white px-6 py-2 rounded-lg mt-4'>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default CartPage