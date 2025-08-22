"use client"
import React from 'react'
import { toast } from 'react-toastify';

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
        const res = await fetch('https://nextjs-task-ruddy.vercel.app/api/items',{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                'Content-type': 'application/json',
            }
        });
        const result = await res.json();
             toast.success("✅ Product added successfully!");
      form.reset(); // clear form after success
        console.log(result)
    }
  return (
   <div className="flex justify-center my-10">
  <form
    onSubmit={handleSubmit}
    className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-gray-200"
  >
    <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
      Add New Product
    </h2>

    {/* Image */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Product Image URL
      </label>
      <input
        className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        type="text"
        name="image"
        placeholder="Enter Product Image URL"
      />
    </div>

    {/* Name */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Product Name
      </label>
      <input
        className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        type="text"
        name="name"
        placeholder="Enter Product Name"
      />
    </div>

    {/* Rating */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Rating
      </label>
      <input
        className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        type="number"
        name="rating"
        placeholder="Enter Product Rating"
        step="0.1"
        min="0"
        max="5"
      />
    </div>

    {/* Price */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Price
      </label>
      <input
        className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        type="number"
        name="price"
        placeholder="Enter Product Price"
      />
    </div>

    {/* Category */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Category
      </label>
      <input
        className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        type="text"
        name="category"
        placeholder="Enter Product Category"
      />
    </div>

    {/* Stock */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Stock
      </label>
      <input
        className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        type="number"
        name="stock"
        placeholder="Enter Product Stock"
      />
    </div>

    {/* Submit */}
    <button
      className="btn btn-success w-full mt-4 text-lg font-semibold"
      type="submit"
    >
      Submit Product
    </button>
  </form>
</div>

  )
}
