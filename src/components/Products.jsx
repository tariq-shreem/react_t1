import React, { useEffect, useState } from 'react'
import style from './Products.module.css'

export default function Products() {

    const [products,setProducts] = useState([]);
    
     const getProducts = async()=>{
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }

    useEffect( ()=>{
        getProducts();
    },[]);
  return (
     <div className='container'>
        <div className='row g-3'>
            {products.map(product=>
                <div className='col-lg-3 text-center'>
                    <div className='card p-2'>
                        <h2 className={`${style.fontSize}`}>{product.title.split(' ').slice(0,3).join(' ')}</h2>
                        <img src={product.image}  />
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
