import React from "react";
import Modal from 'react-modal';
import { registerUser } from "../utils";
import { useState } from "react";
import './style.css';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modal2IsOpen, setModal2IsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }
    function openModal2() {
        setModal2IsOpen(true);
    }
    function closeModal2() {
        setModal2IsOpen(false);
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        if(passwordCheck === password){
            await registerUser(firstName, lastName, username, email, password)
        setTimeout(() => closeModal(), 4000)
        } else{
            openModal2()
        }
    }

    return(
        <div className="registerMain">
            <button className="lrbtn" onClick={openModal}>SIGN UP</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel='Register'
        >
          <div className="registerContainer">
          <button className="closeBtn" onClick={closeModal}>X</button>
          <h1 className="registerHeader">What are you waiting for? <br  /> Become a Cookie Connoisseur today!</h1>
            <form onSubmit = {submitHandler}>
            <div className="inputs">
            <div className="left">
                <label className="label">FIRST NAME:
                    <input className="input" onChange= {(e) => setFirstName(e.target.value)} required></input>
                </label>
            <br></br>
                <label className="label">USERNAME:
                    <input className="input" onChange= {(e) => setUsername(e.target.value)} required></input>
                </label>
            <br></br>
                <label className="label">PASSWORD:
                    <input className="input" type="password" onChange= {(e) => setPassword(e.target.value)} required></input>
                </label>
            </div>
            <div className="right">
                <label className="label">LAST NAME:
                    <input className="input" onChange= {(e) => setLastName(e.target.value)} required></input>
                </label>
            <br></br>
                <label className="label">EMAIL:
                    <input className="input" onChange= {(e) => setEmail(e.target.value)} required></input>
                </label>
            <br></br>
                <label className="label">TYPE PASSWORD AGAIN:
                    <input className="input" type="password" onChange= {(e) => setPasswordCheck(e.target.value)} required></input>
                </label>
            </div>
            </div>
                <label className="tsandcs">
                   <p> <input type="checkbox" id="checkbox" name="tsandcs" value="Agree"></input>
                    <span className="text">I have read and agree to the <a className="tandc" href="/"> terms & conditions</a> of The Cookie Club.</span></p>
                </label>
            <br></br>
                <button type="submit" className="registerBtn">Click to register</button>
            </form>
          </div>
        </Modal>
        <Modal
          isOpen={modal2IsOpen}
          onRequestClose={closeModal2}
          ariaHideApp={false}
          contentLabel='Register'
        >
            <h1> Passwords did not match! Please try again... </h1>
            <h3>
               Click outside of the dialog to close the Dialog box.
            </h3>
         </Modal>
        </div>
    )
}

export default Register;