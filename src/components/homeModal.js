import Modal from 'react-modal';
import { useState } from "react";
import './modal.css';

const CookieModal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const ingreds = props.cookie.cookieIngredients.map((ingredient, index) => {
        return <p key={index} className="ingreds">{ingredient.ingredient}</p>
    })
    return (
        <>
        <div className="carouselItem">
        <img key={props.index} id="slides" className="img" src={props.cookie.cookieImage} alt="Cookies" onClick={() => setModalIsOpen(true)}></img>
        <div className="right">
            <h1 className="name">{props.cookie.cookieName}</h1>
            <div className="ingredients">{ingreds}</div>
        </div>
        <button className="recipeBtn" onClick={() => setModalIsOpen(true)}>RECIPE</button>
        </div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            ariaHideApp={false}
            contentLabel='Recipe'
            >
            <div className="recipeContainer">
                <button className="close" onClick={() => setModalIsOpen(false)}>X</button>
                <h1 className="recipeTitle">{props.cookie.cookieName}</h1>
                <div className="ingreds">{ingreds}</div>
                <div className="site">
                <iframe className="embed" title={props.cookie.id} src={props.cookie.cookieUrl} width="800" height="500"></iframe>
                </div>
            </div>
        </Modal>
        </>
    )
}

export default CookieModal;