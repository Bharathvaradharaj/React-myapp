import { useContext } from "react"
import { NameContext } from "./App"
const Father = ()=>{
var data = useContext(NameContext)
    return (

        <h1>My Son name is {data.name} and He age is {data.age}</h1>
    )
}

export default Father