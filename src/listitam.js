import { useState } from "react"

function Listitems(props) {
   

    const [checked, setchecked] = useState(false)

    const check = () => {

        setchecked(!checked)
    }



    return (
        <>
        <div>
            <input type="checkbox" onChange={check} ></input>
            <span style={{ textDecoration: checked ? "line-through" : "none" }}>{props.activity}</span>
            </div>
        </>)
}

export default Listitems