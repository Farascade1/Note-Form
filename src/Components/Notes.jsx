import { useEffect, useState } from "react"
import {toast, Toaster} from "react-hot-toast"


function Notes (){

const [data, setData] = useState([])

useEffect(() => {

    const allNotes = JSON.parse(localStorage.getItem("data")) 

    setData(allNotes)
});

// Delete note starts here

const handleDeleteNote = (id) =>{
const findNote = data.findIndex( (note) => note.id == id  )

if(findNote)
    data.splice(findNote, 1)
localStorage.setItem("data", JSON.stringify(data))

toast.success("Note has been deleted successfulys",{
    posistion: "top-right",
})

}



// console.log(allNotes)

    return <div>
<h1>This is Notes</h1>

        <div className="grid gap-2 grid-cols-[300px_300px_300px] justify-center px-1 py-">

            {
                data.length > 0 ? data.map((Notes) => {
                    return  <div id="box" className="w-full h-[200px] p-3 border-2 border-black ">
                        <h1 className="font-bold"> {Notes.title} </h1>
                        <p> {Notes.description} </p>

                        <button onClick={  () => handleDeleteNote(Notes.id)} id="Btn" className="bg-red-400 w-[80px] mt-24 text-white rounded hidden ">Delete</button>
                    </div>

                  
                }) 

                : 
                <p>Nothing</p>
            }

           
           
        </div>
<Toaster />
    </div>
}

export default Notes