import React from "react";


const page = () => {
  return (
    <div className="bg-emerald-700 h-screen">
        <h1 className="text-center text-white text-5xl pt-36">Homepage (control caching)</h1>
    </div>
  );
};

export default page;

//controlling cache

//fetch('https...,' options)

//options are:
//fetch('https...,'cache:'force-cache')      //always use the cache data if available and don't get it from the server
//fetch('https...,'cache:'no-store')         //whenever a request is made it always gets a fresh data from the server not from the cache
//fetch('https...,'{next:{revalidate:10}})   //there will be a render delay because based on the value in this instance 10, data will be fetched only until 10 seconds passed, cache data in specified duration mostly seconds
