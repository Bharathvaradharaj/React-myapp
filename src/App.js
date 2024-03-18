import { createContext, useState } from "react"
import Todolist from "./Todolist"
import Addinput from "./Addinput"
const arrContext = createContext()

const App = () => {

    const [Todoarr, setTodoarr]= useState([""])
 

    return (
        <>
        <arrContext.Provider value={{Todoarr,setTodoarr}}>
            <Addinput></Addinput>
           <Todolist></Todolist>
            </arrContext.Provider>
        </>
    )
}

export default App
export {arrContext}

