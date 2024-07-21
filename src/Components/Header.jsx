import { useState } from "react"
import Form from "./Form"


function Header (){

    const[isOpen, setIsOpen] = useState(false)

    // handleOpenForm

    const handleOpenForm = () =>{
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return <div>
     
     <div className="bg-secondaryColor px-4 sm:px-10 h-[70px] flex justify-between text-white">
     <h1 className="text-2xl sm:text-4xl font-bold mt-4">Nooty</h1>
        <button onClick={handleOpenForm} className="bg-white h-[40px] w-[120px] rounded mt-4 text-secondaryColor hover:bg-secondaryColor hover:text-white hover:border-2 border-white">Add Note</button>
   
    </div>
    {
        isOpen == true ?  <Form isClose={isOpen} handle={handleClose} /> : ""
    }

    </div>
}


export default Header