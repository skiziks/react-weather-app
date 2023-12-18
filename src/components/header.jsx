import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import '../style/header.css';

function Header(props) {
    const donnees = props.donnees;

    // console.log(donnees);

    let Hello_message = "";
    let date = new Date();
    switch (true) {
        case date.getHours() < 12:
            Hello_message = "Good Morning";
            break;
        case date.getHours() >= 12 && date.getHours() < 19:
            Hello_message = "Good Afternoon";
            break;
        case date.getHours() >= 19:
            Hello_message = "Good Evening";
            break;
        default:
            Hello_message = "Hello";
    };

    return (
        <header>
            <section className="container">
                {donnees && (
                    <>
                        <p className='city'>{donnees.name} <FaMapMarkerAlt /></p>
                        <p className='hello'>{Hello_message}</p>
                    </>
                )}
            </section>
        </header>
    );
}

export default Header;
