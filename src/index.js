import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './counter';
import Randomnumber from './randomnum';
import FormName from './form';
import Shoppinglist from './shoppinglist';
import Changecolor from './colorchange';
import Listitems from './listitam';
import List from './list';
import Login from './login';
import Todolist from './Todo';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));


// function Change(){
//  var [myname, setmyname] = useState("John")

//  function change(){

//     setmyname ('Mike')
//  }
//  return(
//     <>
//     <h1>{myname}</h1>
//     <button onClick={change}>Change</button>

//     </>
//  )

// }


root.render(
    <>
        {/* <Counter />
        <Randomnumber />
        <br />

        <FormName />

        <Shoppinglist></Shoppinglist>
        <Changecolor></Changecolor>
        <List></List>
        <Login></Login>
        <Todolist></Todolist> */}

       <App></App>
    </>
)


