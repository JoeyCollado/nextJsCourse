import React from "react";


const page = () => {
  return (
    <div className="bg-emerald-700 h-screen">
        <h1 className="text-center text-white text-5xl pt-36">Homepage (caching)</h1>
    </div>
  );
};

export default page;

//caching = is like a quick access storage space for information that you might need again soon
//          its designed to make retrieving that information faster the next time you make a request
//          speed up the process by storing frequently used data
//          reduced the need to fetch some information repeadtedly from the source (server)

