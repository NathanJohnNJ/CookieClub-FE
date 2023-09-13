import Register from './register';
import Login from './login';
import './style.css';

    const LoginOrAcc = (props) => {

            return(
            <div className="loginorreg">
                <Login newUser={props.newUser} setNewUser={props.setNewUser} loginCookie={props.loginCookie} setLoginCookie={props.setLoginCookie} token={props.token} setToken={props.setToken} /> 
                <Register />
            </div>)
            }

    export default LoginOrAcc