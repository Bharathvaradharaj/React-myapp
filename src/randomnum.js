import { useState } from "react"

function Randomnumber(){

var [currentNum , setRandomnum] = useState(0)


function random(){
var num = Math.floor(Math.random()*10)
    setRandomnum (num)
}

return(
    <>
    <h1>{currentNum}</h1>
    <button onClick={random}>Randomnumber</button>
    
    </>
)


}

export default Randomnumber