//here we can specify the route handlers = which support different kind of http methods

//GET: = to get the data on the server

export async function GET(){
    //fetching data from the database
    //return

    return Response.json({'id':1, 'name':'Laptop'})
}

//POST: = to create new data on the server
//PUT: = to update the data on the server
//DELETE: = to delete the data from the server

//install thunder client extension

//http://localhost:3000/api/products