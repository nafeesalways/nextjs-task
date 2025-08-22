import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function productsPage() {
    const productsCollection = dbConnect(collectionNamesObj.productsCollection);
    const data = await productsCollection.find({}).toArray();

  return (
   <div className="grid grid-cols-12 gap-4 container mx-auto my-10">
      {data.map((item) => {
        return (
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border"
            key={item._id}
          >
            <figure className="w-full h-3/4 flex justify-center items-center">
              <Image
                className="w-full h-full object-fit"
                src={item.image}
                width={314}
                height={108}
                alt={item.name}
              />
            </figure>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h2 className="font-bold text-xl">{item.name}</h2>
                <p className="font-bold text-xl text-green-600">
                  Price : ${item.price}
                </p>
              </div>
              <div>
                <Link
                  href={`/products/${item._id}`}
                  className="text-blue-600"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}
