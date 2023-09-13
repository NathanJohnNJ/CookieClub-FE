import Modal from 'react-modal';
import { handleEdit } from '../utils';
import { useState } from 'react';
import '../pages/account.css';

const EmailModal = (props) => {

    const [updateKey, setUpdateKey] = useState('');
    const [updateValue, setUpdateValue] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const emailHandler = async () => {
        setUpdateKey("email")
        await handleEdit(updateKey, updateValue, props.newUser.id, props.setNewUser, props.token)
        setModalIsOpen(false)
}
function openModal() {
    setModalIsOpen(true);
}
function closeModal() {
    setModalIsOpen(false);
}

    return (
        <div>
            <button className='emailBtn' onClick={openModal}> Change Email </button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel='email'
            >
                <div className="emailEdit">
                    <h1 className="emailEditTitle">CHANGE EMAIL</h1>
                    <button className="closeBtn" onClick={closeModal}>X</button>
                    <label className="label" htmlFor="email">CURRENT EMAIL:</label>
                        <p id="email" className="emailLabelTxt" >{props.newUser.email}</p>
                    <form onSubmit = {() => emailHandler()}>
                        <div className="inputs">
                            <label className="label" htmlFor="newEmail">NEW EMAIL:</label>
                                <input className="newEmail" id="newEmail" onChange= {(e) => setUpdateValue(e.target.value)} required></input>
                        </div>
                        <button type="submit" className="submitBtn">Submit</button>
                    </form>
                </div>
            </Modal>
            </div>
    )
}

export default EmailModal;