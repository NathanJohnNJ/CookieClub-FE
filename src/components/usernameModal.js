import Modal from 'react-modal';
import { handleEdit } from '../utils';
import { useState } from 'react';
import '../pages/account.css';

const UsernameModal = (props) => {

    const [updateKey, setUpdateKey] = useState('');
    const [updateValue, setUpdateValue] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const usernameHandler = async () => {
        setUpdateKey("username")
        await handleEdit(updateKey, updateValue, props.token)
        setModalIsOpen(false)
}

    return (
        <div>
            <button className='usernameBtn' onClick={() => setModalIsOpen(true)}> Change Username </button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            ariaHideApp={false}
            contentLabel='username'
            >
                <div className="usernameEdit">
                    <h1 className="usernameEditTitle">CHANGE USERNAME</h1>
                    <button className="closeBtn" onClick={() => setModalIsOpen(false)}>X</button>
                    <label className="label" htmlFor="username">CURRENT USERNAME:</label>
                        <p id="username" className="usernameModalTxt" >{props.newUser.username}</p>
                    <form onSubmit = {() => usernameHandler()}>
                        <div className="inputs">
                            <label className="label" htmlFor="newUsername">NEW USERNAME:</label>
                                <input className="newUsername" id="newUsername" onChange= {(e) => setUpdateValue(e.target.value)} required></input>
                        </div>
                        <button type="submit" className="submitBtn">Submit</button>
                    </form>
                </div>
            </Modal>
            </div>
    )
}

export default UsernameModal;