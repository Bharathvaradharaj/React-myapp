import { useState } from "react"

function Todolist() {

    const [arrlist, setarrlist] = useState([{ id: 1, name: "Apple" }, { id: 2, name: "orange" }])
    const [inputvalue, setinputvalue] = useState('')



    function deletebtn(removeid) {

        console.log(removeid)

        var temparr = arrlist.filter(function (items) {
            if (items.id == removeid) {
                return false
            }
            else {
                return true
            }

        })
        setarrlist(temparr)
    }

    function inputvalues(event) {

        setinputvalue(event.target.value)
      
    }

    function addbtn() {
        setarrlist([ ...arrlist,  {id: arrlist.length + 1, name: inputvalue }])
        setinputvalue('')

    }

    return (
        <>
            <h1>Todo - List</h1>
            <input onChange={inputvalues} value={inputvalue}></input>
            <button onClick={addbtn}>Add</button>
            <ul>
                {arrlist.map(function (items) {
                    return (
                        <li>{items.name} <button onClick={() => deletebtn(items.id)}>Delete</button></li>)
                })
                }
            </ul>
        </>
    )


}
export default Todolist
