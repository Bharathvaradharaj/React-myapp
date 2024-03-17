import { useState } from "react"

const Shoppinglist = () => {


    const [namelist, setnamelist] = useState(["Bharath", "Nithin", "Simran"])
    const [evalue, setevalue] = useState('')


    const entervalue = (event) => {

        setevalue(event.target.value)

    }

    const Add = (event) => {

        setnamelist([...namelist,evalue])
        setevalue('')


    }


    return (
        <>
            <input value={evalue} onChange={entervalue}></input>
            <button onClick={Add}> Add</button>

            <ul>
                {
                    namelist.map(function (items) {
                        return <li>{items}</li>
                    })
                }

            </ul>
        </>
    )
}

export default Shoppinglist