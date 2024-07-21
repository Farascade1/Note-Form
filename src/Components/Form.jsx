 import { useState } from "react"
 import {toast, Toaster} from "react-hot-toast"

function Form ({isClose, handle}){
       
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false)

    // handleForm
    const handleForm = (event) => {
        event.preventDefault()

        if(title == "" && description == "" ){
            
            setError(true)
           
            setTimeout(() => {
                setError(false)
            }, 4000);
        }
        toast.success("Note has been saved successfulys",{
            posistion: "top-right",
        })
        const newNote = {
            id: Date.now(),
            title: title,
            description: description
        }
       
        const getData = localStorage.getItem("data")
        let checkData = getData ? JSON.parse(getData) : []
        checkData = [...checkData, newNote]
        localStorage.setItem("data", JSON.stringify(checkData))


      


    }
  


  return( <div style={{display: isClose == false ? "block" : ""}}  className="bg-black w-full h-[100vh] absolute top-0">
    <div  className="flex justify-center  mt-10 ">

        
        <form className=" bg-white h-[430px]  sm:h-[480px] p-8 w-[320px] sm:w-[400px]">
        <i onClick={handle}  class="fa-solid fa-x text-2xl ml-[220px] sm:ml-[320px] "></i>

{
    error == true ? <p className="  text-red-500"> Fadlan Form ka soo buuxi</p> : ""
}

            <br />
            <br />
            <input onChange={ (event) => {
                setTitle(event.target.value)
            } } value={title} className=" w-[250px] sm:w-[300px] h-[40px] border-4 border-black mb-5" type="text" placeholder="Enter title" /> <br/>
            <textarea onChange={ (event) => {
                setDescription(event.target.value)
            } } value={description} className="w-[250px] sm:w-[300px] h-[200px] pb-40 border-4 border-black" type="text" placeholder="Enter title" />
            
        <button onClick={handleForm} className="bg-black mt-5 w-[250px] sm:w-[300px]  h-[40px] text-white text-2xl rounded">Save</button>
        </form>
    
    </div>
     <Toaster/>
    </div>
    )
}

export default Form