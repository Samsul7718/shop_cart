import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const ProductPage = () => {
    const [products,setProducts]=useState([])
  const {addToCart}=useCart()
  const navigate=useNavigate()

    useEffect(()=>{
    fetch(`http://localhost:3000/api/product`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
    .catch(err=>console.log(err))
  },[])

  const handleCartProduct=(product)=>{
        addToCart(product);
        navigate('/cart')
  }
  return (
    <div className='p-4'>
         <h2 className="text-2xl mb-4 font-bold ">Product Page</h2>
         <ul className='space-y-4'>
            {products.map((product)=>(
                <li 
                key={product.id}
                className="flex items-center gap-4 border p-2 rounded"
                >
                    <img src={product.imageUrl} alt="" width="100" 
                    className="object-cover"/>
                    <div className="flex-1">
                    <h3 className="font-medium">{product.name}</h3>
                     <p>${product.price}</p>
                  </div>
                   <button
                     onClick={() => handleCartProduct(product)}
                     className="bg-green-400 text-white px-4 py-2 rounded">
                     Place Order
                  </button>
                </li>
            ))}
         </ul>
    </div>
  )
}

export default ProductPage