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
        const data = await loginUser(username, password, props.setNewUser, props.setLoginCookie, props.setToken)
        console.log("login data = ", data)
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
            <form onSubmit={submitHandler}>
                <div className="inputsleft">
                <label className="loginLabel">USERNAME:
                    <input className="loginInput" onChange= {(e) => setUsername(e.target.value)}></input>
                </label>
            <br></br>
                <label className="loginLabel">PASSWORD:
                    <input type="password" className="loginInput" onChange= {(e) => setPassword(e.target.value)}></input>
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