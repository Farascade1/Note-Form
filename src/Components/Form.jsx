import { useState } from "react"
import Header from "./Header"


function Form ({isClose, handle}){

  return( <div style={{display: isClose == false ? "block" : ""}}  className="bg-black w-full h-[100vh] absolute top-0">
    <div  className="flex justify-center  mt-10 ">

        
        <form className=" bg-white h-[430px]  sm:h-[480px] p-8 w-[320px] sm:w-[400px]">
        <i onClick={handle}  class="fa-solid fa-x text-2xl ml-[220px] sm:ml-[320px] "></i>
            <br />
            <br />
            <input className=" w-[250px] sm:w-[300px] h-[40px] border-4 border-black mb-5" type="text" placeholder="Enter title" /> <br/>
            <input className="w-[250px] sm:w-[300px] h-[200px] pb-40 border-4 border-black" type="text" placeholder="Enter title" />
            
        <button className="bg-black mt-5 w-[250px] sm:w-[300px]  h-[40px] text-white text-2xl rounded">Save</button>
        </form>
    
    </div>
     
    </div>
    )
}

export default Form