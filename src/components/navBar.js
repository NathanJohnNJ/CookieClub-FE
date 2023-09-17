import './style.css';
import LoginOrAcc from './loginOrAcc';
import Logout from './logout';
import { Outlet, NavLink } from 'react-router-dom';
import logo from "./images/cookie-logo.png";
import { useState, useEffect } from 'react';
import { checkConnection } from '../utils';

const NavBar = (props) => {
    const [connected, setConnected] = useState(false);
    const isConnected = checkConnection();

    useEffect(() => {
        if(isConnected==="API is working"){
            setConnected(true);
        } else{
            setConnected(false);
        }
    })
    
    


    return(
        <>
        <div className="navbarMain">
            <nav className='navbarMainChild'>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/"><img className='logo' src={logo} alt=""></img></NavLink>
                </nav>
                <nav className='navbarMainChild1'>  
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/recipes">RECIPES</NavLink>
            </nav>
                {props.loginCookie
                ?
                <Logout setLoginCookie={props.setLoginCookie} /> 
                 :
                 <LoginOrAcc loginCookie={props.loginCookie} setLoginCookie={props.setLoginCookie} newUser={props.newUser} setNewUser={props.setNewUser} token={props.token} setToken={props.setToken}/> 
                }
            <div className="status">
                {connected
                ?
                <>
                    <div className="notConnected"></div>
                    <div className="backendHint">Not connected to back-end</div>
                </>
                :
                <>
                    <div className="connected"></div>
                    <div className="backendHint">Connected to back-end</div>
                </>
                }
            </div>
            <div className="mainContent">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default NavBar;
