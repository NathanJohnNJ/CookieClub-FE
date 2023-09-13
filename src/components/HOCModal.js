import Modal from 'react-modal';
import { useState } from "react"
import './HOCModal.css';

const HOCModal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);


    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className='CookieCard' key={props.index}>
            <img className='cookieIMG' src=
                {props.data.recipe.images.SMALL.url}
                alt={props.data.recipe.label}
            // onClick={openModal}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                contentLabel='openCookie'
            >
                <div className="modalContainer">

                    <div className="modalTop">

                        <div className='modalLeft'>
                            <button className="closeBtn" onClick={closeModal}>X</button>
                            <img className='modalIMG' src=
                                {props.data.recipe.images.SMALL.url}
                                alt={props.data.recipe.label}
                                onClick={openModal}
                            />
                            <p className='modalTxt'>{props.data.recipe.label}</p>
                        </div>

                        <div className='modalRight'>
                           
                            <h2 className='IngredHEAD'>Ingredients</h2>
                            {props.data.recipe.ingredients.map((ingredient, index) => (
                                <p className='IngredientTXT' key={index}>{ingredient.text}</p>
                            ))}
                        </div>

                    </div>

                    <h2 className='PrepTXT'>Preparation</h2>
                    <div>
                        <a href={props.data.recipe.shareAs} target="_blank" rel="noreferrer">
                            <button className='methodBtn'>Instructions</button>
                        </a>
                    </div>
                </div>


            </Modal>
            <div className='labelDiv'>
                <p className='recipeTxt'>{props.data.recipe.label}</p>
                <button className='modalBtn' onClick={openModal}>🡲</button>
            </div>
        </div>
    )
}

export default HOCModal;




