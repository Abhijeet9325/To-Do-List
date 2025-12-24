import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { useState, useEffect, useRef } from "react";


function App() {

  return (
    <>
      <Navbar />
      <div className=" container bg-violet-200 mx-auto my-4 rounded-2xl min-h-[80vh] p-5">
        <div className="todo">
          <h1>Add Todos</h1>
          <input className="bg-white rounded-xs" type="text" />
          <button className="font-semibold py-1 rounded-md mx-2 hover:bg-violet-800 cursor-pointer px-4 w-fit bg-violet-700 text-white">Add</button>
        </div>
        <h2 className="font-semibold my-2">Your Todos</h2>
        <div className="todos flex my-3">
          <div className="text  bg-white text-black font-semibold rounded-sm px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum officia cum.</div>
          <button className="font-semibold py-1 rounded-md mx-1 hover:bg-violet-800 cursor-pointer px-4 w-fit bg-violet-700 text-white">Edit</button>
          <button className="font-semibold py-1 rounded-md mx-1 hover:bg-violet-800 cursor-pointer px-4 w-fit bg-violet-700 text-white">Delete</button>
        </div>
      </div>
    </>
  )
}
export default App
