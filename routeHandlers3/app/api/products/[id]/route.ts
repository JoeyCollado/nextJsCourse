import { products } from "@/app/data/productData";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest, {params}:{params:{id:string}}){ //specify type of id
       //grab data
       const body = await req.json()
       const {id, title, description, price, category, image} = body;

       //find product that is needed to be updated
       const productIndex = products.findIndex(products => products.id == parseInt(params.id));

products[productIndex] = {
    id,
    title,
    description,
    price,
    category,
    image
}

return Response.json(products[productIndex], {status: 200}) 
}


export async function DELETE(req: NextRequest, {params}:{params:{id:string}}){
    const productIndex = products.findIndex(product => product.id == parseInt(params.id));
    products.splice(productIndex, 1)[0]

    return Response.json("Deleted successfully", {status:200})
}