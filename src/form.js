import { useState } from "react";
import Result from "./components/result"
import Firstname from "./components/firstname";
import Lastname from "./components/lastname";
import Submit from "./components/anssubmit";

function FormName(){

const [fname,setfname]= useState("")
const [lname,setlname] = useState("")
const[result,setresult]= useState('Result')

const firstname= (event)=>{

    setfname (event.target.value)
}

const lastName=(event)=>{

    setlname (event.target.value)
}

const submit =(event)=>{
    event.preventDefault()
    const sum = parseInt(fname) + parseInt(lname);
    setresult(sum);

}
return(
<>
<form>
<Firstname fname = {fname} firstname={firstname} ></Firstname>
<br></br>
<Lastname lname ={lname} lastName={lastName}></Lastname>
<br></br>
<Submit submit = {submit}></Submit>
</form>
<Result result= {result}></Result>



</>

)
}
export default FormName