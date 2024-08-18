import React,{useState} from 'react';
let red=0;
let green=200;
let blue=150;
const loggedStyle={
    backgroundColor:`rgb(${red},${green},${blue})`,
    color:'White',
    fontWeight:'bold'
};

const unloggedStyle={
    backgroundColor:'tomato',
    color:'white',
    fontWeight:'bold'
}
//Login / logout buttons
const LoginButton=({loginAction,propStyle})=>{
    return(
        <button style={propStyle} onClick={loginAction}>Login</button>
    )   
}

const LogoutButton=({logoutAction,propStyle})=>{
    return(
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )   
}
//? (expresion true )&& expresion => se redenderiza la expresion
//? (expresion false )&& expresion => no se redenderiza la expresion
//? estilo para usuario logueado



const OptionalRender = () => {
    const [access, setAccess] = useState(false);
    const[nMessages,setNMessages]=useState(0);

    // const udateAccess=()=>{
    //     setAccess(!access);
    // }

    const loginAction=()=>{
        setAccess(true)
    }

    const logoutAction=()=>{
        setAccess(false)
    }

    let optionalButton;
    // if (access) {
    //     optionalButton = <button onClick={udateAccess}>Logout</button>;
    // }else{
    //     optionalButton = <button onClick={udateAccess}>Login</button>;
    // }
  

    if(access){
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>;
    }else{
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>;
    }

    // unread messages
    let addMessages=()=>{
        setNMessages(nMessages+1)
    }
    return (
        <div>
        {/* optional button */}
            
            {optionalButton}
            {/* n messagges unread */}
            {/* {nMessages>0 && nMessages===1 && <p>You have {nMessages} new messagge...</p>}
            {nMessages>1 &&<p>You have {nMessages} new messagges...</p>}
            {nMessages===0 && <p>There are no new messages</p>} */}

            {/* operador ternario */}
            {access ?(<div>
                {nMessages>0 ? 
                <p>You have {nMessages} new message {nMessages> 1 ?'s':null }...</p>:
                <p>There are no new messages</p>
            }
            <button onClick={addMessages}>Add new Message</button>
            </div>):null}
            
            
        </div>
    );
}

export default OptionalRender;

