import Modal from 'react-modal';
import { handleUpdatePassword } from '../utils';
import { useState } from 'react';
import '../pages/account.css';

const PasswordModal = (props) => {
    const [updateValue, setUpdateValue] = useState('');
    const [checkValue, setCheckValue] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

const passwordHandler = async () => {
    (updateValue===checkValue)
    ?
    await submitPassword()
    :
    await noMatch()

}

async function submitPassword(){
    await handleUpdatePassword(updateValue, props.setNewUser, props.token)
    setModalIsOpen(false)
}
function noMatch(){
    setModalIsOpen(false)
}

    return (
        <div>
            <button className='passwordBtn' onClick={() => setModalIsOpen(true)}> Change Password </button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            ariaHideApp={false}
            contentLabel='password'
            >
                <div className="passwordEdit">
                    <h1 className="passwordEditTitle">CHANGE PASSWORD</h1>
                    <button className="closeBtn" onClick={() => setModalIsOpen(false)}>X</button>
                    <form onSubmit = {() => passwordHandler()}>
                        <div className="inputs">
                            <label className="label" htmlFor="newPassword">NEW PASSWORD:</label>
                                <input type="password" autoComplete="new-password"  className="newPassword" id="newPassword" onChange= {(e) => setUpdateValue(e.target.value)} required></input>
                            <label className="label" htmlFor="repeatPassword">TYPE PASSWORD AGAIN:</label>
                                <input type="password" autoComplete="new-password"  className="newPassword" id="repeatPassword" onChange= {(e) => setCheckValue(e.target.value)} required></input>
                        </div>
                        <button type="submit" className="submitBtn">Submit</button>
                    </form>
                </div>
            </Modal>
            </div>
    )
}

export default PasswordModal;
