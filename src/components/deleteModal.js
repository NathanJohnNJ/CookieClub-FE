import Modal from 'react-modal';
import { handleDelete } from '../utils';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import '../pages/account.css';

const DeleteModal = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

function openModal() {
    setModalIsOpen(true);
}
function closeModal() {
    setModalIsOpen(false);
}
const deleteFunc = async () => {
    await handleDelete(props.token)
}

    return (
        <>
        <div>
            <button className="deleteBtn" onClick={() => openModal()}> DELETE </button> 
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel='delete'
            >
                <div>
                    <h1 className="miss">We'll miss you!</h1>
                    <button className="closeBtn" onClick={() => closeModal()}>X</button>
                    <p className="deleteConfirm">Are you sure you want to delete your account?</p>
                    <NavLink type="submit" className="deleteAcc" to="/" onClick={deleteFunc}>DELETE MY ACCOUNT</NavLink>
                    <button className="keepAccount" onClick={() => closeModal()}>I STILL LOVE COOKIES</button>
                </div>
            </Modal>
        </div> 
   </>
    )
}

export default DeleteModal;