import { useState } from "react"
import Listitems from "./listitam"

function List() {


    const listact = ["Wake up at 8", "Going to school", "Return Home"]

    return (

        <>
            <h1>List of Activites</h1>

            {

                listact.map(function (items) {

                    return (

                        <Listitems activity={items}></Listitems>
                    )
                })
            }

        </>

    )

} export default List