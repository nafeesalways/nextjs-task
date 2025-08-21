import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function ProductsDetailsPage({params}) {
    const p = await params;
    const productsCollection = dbConnect(collectionNamesObj.productsCollection);
    const data = await productsCollection.findOne({_id: new ObjectId(p.id)})
  return (
 <div className="mx-auto bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={data.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {data.name}
      <div className="badge badge-secondary">{data.category}</div>
      <p>${data.price}</p>
    </h2>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{data.stock}</div>
      <div className="badge badge-outline">{data.rating}</div>
    </div>
  </div>
</div>
  )
}
