import { useContext, useState } from "react"
import { arrContext } from "./App"
const Addinput = () => {
    const [evalue, setevalue] = useState("")
    var { Todoarr, setTodoarr } = useContext(arrContext)
    // console.log(Todoarr)
    // console.log(setTodoarr)
  

    function handleinput(event) {

        setevalue(event.target.value)
    }


    function addbtn() {
        setTodoarr([...Todoarr, evalue])
     
        setevalue("")
    }
    return (
        <div>
            <input onChange={handleinput} value={evalue}></input>
            <button onClick={addbtn}>Add</button>
        </div>
    )
}

export default Addinput