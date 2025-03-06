//here we can specify the route handlers = which support different kind of http methods

import { products } from "@/app/data/productData";
import { NextRequest } from "next/server";

//GET: = to get the data on the server

export async function GET(){ //get api object (data) from database
    //fetching data from the database
    //return

    return Response.json(products)
}

export async function POST(req:NextRequest){ //adding api object (data) to database
   const body = await req.json()

   const newProduct = { //create new product 
    "id": products.length + 1, //get length of array of products
    "title": body.title,
    "description": body.description,
    "price": body.price,
    "category": body.category,
    "image": body.image
   }

   products.push(newProduct); //added new product
   return Response.json(newProduct, {status:201});
}

//POST: = to create new data on the server
//PUT: = to update the data on the server
//DELETE: = to delete the data from the server

//install thunder client extension

//http://localhost:3000/api/products