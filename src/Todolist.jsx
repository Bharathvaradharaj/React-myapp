
import { useContext } from "react"
import { arrContext } from "./App"
const Todolist = () => {

    var { Todoarr, setTodoarr } = useContext(arrContext)
    return (
        <>
            {
                Todoarr.map(function (items) {

                    return <h1>{items}</h1>
                })

            }
        </>
    )
}
export default Todolist