import React from "react";
import { pg1, drake } from "../assets";


const Cardmac = () => (
  <div class="w-5/6  md:w-5/6  md:mr-10 sm:w-1/2  group relative">

    <div class="w-full h-full shadow-2xl subpixel-antialiased rounded bg-black border-black mx-auto block overflow-hidden
    transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 border-2">
    

      <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
        <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
        </div>
        <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
        </div>
        <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
        </div>
      </div>

      <img src={pg1} alt="billing" className="w-full h-ful object-cover h-full" />
      {/* <img src={drake} alt="billing" className="max-w-full h-auto  object-cover sm:h-72" /> */}

    </div>
  </div>

);

export default Cardmac;
