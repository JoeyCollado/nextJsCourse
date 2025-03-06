import React from "react";


const page = () => {
  return (
    <div className="bg-emerald-700 h-screen">
        <h1 className="text-center text-white text-5xl pt-36">Database Integration (Prisma MySQL)</h1>
    </div>
  );
};

export default page;

//Prisma = Object relational mappin (ORM) = open source database toolkit designed for developer working 
//         with relational database
//         it provides a typescript database client and schema migration tools to simplify database interaction
//Features
//Prisma client = typescript database client that generates queries based on your database schema making
//                database operation more reliable and reducing the risk of the runtime errors
//Prisma migrate = tool for managing schema changes and migration allowing you to define and apply schema changes
//                 in structured and version control manner
//Prisma studio  = graphical user interface for viewing and editing database content 
//                 which is helpful for debugging and data management 
//Prisma = popular for nextjs and typescript


//for database engine = we can use
//                      MySQL
//                      PostgreSQL
//                      SQL server

//CRUD Operation = example

//Prisma = sit between nextjs and database
//         allow us to interact in database and perform operations 

//to setup prisma with nextjs
//do command
//npm i prisma 

//prisma commands
//npx prisma = generate client/migration/data model
//npx prisma init = to initialize

/*
                init   Set up Prisma for your app
            generate   Generate artifacts (e.g. Prisma Client)
                  db   Manage your database schema and lifecycle
             migrate   Migrate your database
              studio   Browse your data with Prisma Studio
            validate   Validate your Prisma schema
              format   Format your Prisma schema
             version   Displays Prisma version info
               debug   Displays Prisma debug info

    Flags

         --preview-feature   Run Preview Prisma commands
         --help, -h          Show additional information about a command

    Examples

      Set up a new Prisma project
      $ prisma init

      Generate artifacts (e.g. Prisma Client)
      $ prisma generate

      Browse your data
      $ prisma studio

      Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
      $ prisma migrate dev

      Pull the schema from an existing database, updating the Prisma schema
      $ prisma db pull

      Push the Prisma schema state to the database
      $ prisma db push

      Validate your Prisma schema
      $ prisma validate

      Format your Prisma schema
      $ prisma format

      Display Prisma version info
      $ prisma version

      Display Prisma debug info
      $ prisma debug

*/