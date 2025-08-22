import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export async function POST(req) {
  const postedData = await req.json();
  const result = await dbConnect(collectionNamesObj.productsCollection).insertOne(postedData);
  return Response.json(result);
}