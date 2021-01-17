import React from 'react';
import api from '../utils/Api';
import Card from './Card'

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] =  React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(_ => {
        api
        .getInfo()
        .then(userData => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
        })
        .catch(error => console.log(error));
    }, []);


    React.useEffect(_ => {
        api
        .receiveCardsInServer()
        .then(data => {
            setCards(data);
        })
        .catch(error => console.log(error));
    }, []);

    return (
    <main className="main">
        <section className="profile">
            <div className="profile__avatar_box">
                <img className="profile__image" src={userAvatar} alt="Аватар"></img>
                <button className="profile__avatar" onClick={props.onEditAvatar}></button>
            </div>
            <div className="profile__info">
                <div className="profile__button">
                    <h1 className="profile__author">{userName}</h1>
                    <button className="profile__edit profile__edit_open_popup" type="button" onClick={props.onEditProfile}></button>
                </div>
                <p className="profile__description">{userDescription}</p>
            </div>
            <button className="profile__add" type="button" onClick={props.onAddPlace}></button>
        </section>
        <section className="cards">
            {
                cards.map(card => {
                    return (
                        <Card card={card} onCardClick={props.onCardClick}/>
                    );
                })
            }
        </section>
    </main>
    );
}

export default Main;