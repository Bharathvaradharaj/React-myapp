import { useState } from "react"

function Counter(){

 var[currentNum, setnum] = useState(0)

 function   Incnum(){

    setnum(currentNum+1)
 }
 function   Decnum(){

    setnum(currentNum-1)
 }

    return(
        <>
        <h1>{currentNum}</h1>
        <button onClick={Incnum}>Inc</button>
        <button onClick={Decnum}>Dec</button>
        </>
    )
}
export default Counter