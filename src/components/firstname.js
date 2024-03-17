function Firstname(props) {

    
    return (

        <>
            <label id="firstname">  Firstname:</label>
            <input type="number" id="firstname" value={props.fname} onChange={props.firstname}></input>
        </>
    )

}


export default Firstname