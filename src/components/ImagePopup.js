import React from 'react';

function ImagePopup(props) {
    return (
    <section className={`popup photo ${props.card ? 'popup_opened' : ''}`}>
        <div className="photo__container">
            <img className='photo__image' src={props.card} alt=""></img>
            <p className="photo__text"></p>
            <button type="reset" className="popup__close photo__close" onClick={props.onClose}></button>
        </div>
    </section>
    );
}

export default ImagePopup;