function Lastname(props) {


    return (

        <>
            <label id="lastname"> Lastname:</label>
            <input id="lastname" type="number" value={props.lname} onChange={props.lastName}></input>
        </>
    )

}


export default Lastname



