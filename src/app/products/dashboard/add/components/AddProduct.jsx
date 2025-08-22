"use client"
import React from 'react'

export const dynamic = 'force-dynamic'

export default  function AddProduct() {
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const form = e.target;
        const image =  form.image.value;
        const name =  form.name.value;
        const rating =  form.rating.value;
        const price =  form.price.value;
        const category =  form.category.value;
        const stock =  form.stock.value;
        const payload = {image,name,rating,price,category,stock}
        const res = await fetch('http://localhost:3000/api/items',{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                'Content-type': 'application/json',
            }
        });
        const result = await res.json();
        console.log(result)
    }
  return (
    <div className='flex justify-center'>
        <form onSubmit={handleSubmit} action="">

            <input className=' text-green-800 border p-4 border-stone-400 w-full' type="text" name="image" placeholder='Enter Product ImageUrl' id="" />
            <input className=' text-green-800 border p-4 border-stone-400 w-full' type="text" name="name" placeholder='Enter Product Name' id="" />
            <input className=' text-green-800 border p-4 border-stone-400 w-full' type="number" name="rating" placeholder='Enter Product rating' id="" />
        
            <input className=' text-green-800 border p-4 border-stone-400 w-full' type="text" name="price" placeholder='Enter Product Price' id="" />
            <input className=' text-green-800 border p-4 border-stone-400 w-full' type="text" name="category" placeholder='Enter Product Category' id="" />
            <input className=' text-green-800 border p-4 border-stone-400 w-full' type="text" name="stock" placeholder='Enter Product Stock' id="" />
            <button className='btn btn-success my-3' type='submit'>Submit</button>
        </form>
      
    </div>
  )
}
