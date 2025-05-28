import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { HiOutlineSun } from "react-icons/hi";
import { IoMoonSharp } from "react-icons/io5";
import { RxReload } from "react-icons/rx";

const App = () => {
   let [counter , setCounter ] = useState(0);
   let [theme , setTheme] = useState(true);
  return (
    <div className={`h-screen flex justify-center items-center overflow-hidden ${theme ? 'bg-zinc-900 ' : 'bg-white text-black'} `}>
      <div className=" absolute top-1.5 right-1.5 text-3xl" onClick={()=> setTheme(!theme)}>{ theme ? <HiOutlineSun /> : <IoMoonSharp />}</div>
      <div className=" w-1/5 h-1/2 text-center shadow-2xl shadow-amber-600  rounded-2xl">
        <div className=" pt-10 text-4xl"> {counter} </div>
        <div className="pt-40 flex justify-around text-2xl ">
          <button type="button" onClick={()=> setCounter( counter + 1)}> <FaPlus/></button>
          <button type="button" onClick={()=> counter > 0 ? setCounter( counter - 1) : setCounter(counter = 0)}> <FaMinus/></button>
          <button type="button" onClick={()=> setCounter( counter = 0)}> <RxReload/></button>
        </div>
      </div>
    </div>
  );
};

export default App;
