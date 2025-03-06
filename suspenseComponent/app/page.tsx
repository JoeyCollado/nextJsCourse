import React from "react";


const page = () => {
  return (
    <div className="bg-emerald-700 h-screen">
        <h1 className="text-center text-white text-5xl pt-36">Suspense Component (creating loading UI)</h1>
    </div>
  );
};

export default page;

//Loading UI = what users see whilt they're waiting for a webpage or part of a webpage to finish loading

//you can apply it two ways
//<suspense><suspense/> = per route or per segment
//creating loadingUI.tsx = globally
