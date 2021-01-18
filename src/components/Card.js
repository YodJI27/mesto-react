import React from 'react';

function Card(props) {
    function handleClick() {
        props.CardClick(props.card);
    }
    return (
        <div className="cards__item">
            <img className="cards__image" src={props.card.link} alt="" onClick={handleClick}></img>
            <button className="cards__delete" type="button"></button>
            <div className="cards__info"> 
                <h2 className="cards__text">{props.card.name}</h2>
                <div className="cards__container">
                    <button className="cards__like" type="button"></button>
                    <p className="cards__like_count">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    );
}
export default Card;