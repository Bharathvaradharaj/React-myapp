import { useState } from "react"

function Changecolor(){



    const [currentcolor, setcurrentcolor] = useState(true)

    function changebtn(){

        setcurrentcolor(!currentcolor)
    }

    return (

        <>
        <div style={{backgroundColor: currentcolor?"red":"green", width:"100ox",height:"100px"}}>

        </div>
        <button onClick={changebtn}>Change</button>
        </>
    )
}
export default Changecolor