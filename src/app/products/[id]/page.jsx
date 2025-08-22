import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function ProductsDetailsPage({params}) {
    const p = await params;
    const productsCollection = dbConnect(collectionNamesObj.productsCollection);
    const data = await productsCollection.findOne({_id: new ObjectId(p.id)})
  return (
<div className="card mx-auto bg-base-100 w-96 shadow-md hover:shadow-lg transition-all duration-300">
  {/* Product Image */}
  <figure className="px-6 pt-6">
    <img
      src={data.image}
      alt={data.name}
      className="rounded-xl h-48 object-cover w-full"
    />
  </figure>

  {/* Card Body */}
  <div className="card-body">
    {/* Title + Category */}
    <h2 className="card-title text-lg font-semibold text-blue-600">
      {data.name}
      <div className="badge badge-secondary">{data.category}</div>
    </h2>

    {/* Price */}
    <p className="text-green-600 font-bold text-xl">${data.price}</p>

    {/* Stock & Rating */}
    <div className="card-actions justify-between mt-2">
      <div className="badge badge-outline">Stock: {data.stock}</div>
      <div className="badge badge-outline">⭐ {data.rating}</div>
    </div>
  </div>
</div>

  )
}
