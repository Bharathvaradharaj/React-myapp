import { useState } from "react"

function Login() {
    const [ename, setename] = useState("")
    const [epass, setepass] = useState("")
    const [login, setlogin] = useState(false)


    function eusername(event) {
        setename(event.target.value)

    }
    function epassword(event) {
        setepass(event.target.value)

    }

    function Sumbitbtn() {

        var username = "Bharath"
        var password = "12345"
        if (username == ename && password == epass) {

            setlogin(true)
        }


    }

    return (
        <>
            <h1>Login</h1>

            {
                login ? <h1>Login Successfully</h1> :
                    <div>
                        <input placeholder="Enter User name" value={ename} onChange={eusername}></input>
                        <br></br>
                        <input placeholder="Enter Password" value={epass} onChange={epassword}></input>
                        <br></br>
                        <button onClick={Sumbitbtn}>Submit</button>
                    </div>
            }


        </>
    )


}

export default Login