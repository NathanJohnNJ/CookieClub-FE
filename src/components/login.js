import './style.css';
import Modal from 'react-modal';
import { loginUser } from "../utils";
import { useState } from "react";

const Login = (props) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const submitHandler = async (e) => {
        e.preventDefault()
        console.log("username = ", username)
        console.log("password = ", password)
        const data = await loginUser(username, password, props.setNewUser, props.setLoginCookie, props.setToken)
        setTimeout(() => closeModal(), 4000)
    }
    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }
    return(
        <div className="loginMain">
            <button className="lrbtn" onClick={openModal}>LOGIN</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel='Login'
        >
          <div className="loginContainer">
          <button className="closeBtn" onClick={closeModal}>X</button>
            <h1 className='PlzLogin'>Please login:</h1>
            <form onSubmit={submitHandler} name="loginForm">
                <div className="inputsleft">
                <label className="loginLabel">USERNAME:
                    <input className="loginInput" type="username" id="username" autoComplete="username" onChange= {(e) => setUsername(e.target.value)}></input>
                </label>
            <br></br>
                <label className="loginLabel">PASSWORD:
                    <input type="password" className="loginInput" id="password" autoComplete="current-password"  onChange= {(e) => setPassword(e.target.value)}></input>
                </label>
                </div>
            <br></br>
                <button className="loginBtn" type="submit">LOGIN</button>
            </form>
        </div>
        </Modal>
        </div>
    )
}

export default Login;