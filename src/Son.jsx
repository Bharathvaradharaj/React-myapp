import { NameContext } from "./App"
import { useContext } from "react"

const Son = ()=>{
 var data = useContext(NameContext)
    return (
        <h1>My name is {data.name}</h1>
    )
}

export default Son