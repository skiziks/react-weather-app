import React, { useEffect, useState } from 'react';
import moment from 'moment';
import '../style/botPartHomePage.css';

// images
import sunriseIcon from '../ico/01d.png';
import sunsetIcon from '../ico/03n.png';

const Soleil = (props) => {
    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);

    useEffect(() => {
        const donnees = props.donnees;

        if (!donnees || !donnees.sys || !donnees.sys.sunrise || !donnees.sys.sunset) {
            return;
        }

        // Convert timestamps to local time without seconds
        const sunriseTime = moment.unix(donnees.sys.sunrise).format('h:mm A');
        const sunsetTime = moment.unix(donnees.sys.sunset).format('h:mm A');

        setSunrise(sunriseTime);
        setSunset(sunsetTime);
    }, [props.donnees]);

    return (
        <section className='soleil'>
            <article className="lever_soleil">
                <img className="sunrise" src={sunriseIcon} alt="sunrise icon" />
                <aside>
                    <p className='name_sunrise'>Sunrise</p>
                    <p className='hour_sunrise'>{sunrise}</p>
                </aside>
            </article>

            <article className="coucher_soleil">
                <img className="sunset" src={sunsetIcon} alt="sunset icon" />
                <aside>
                    <p className='name_sunset'>Sunset</p>
                    <p className='hour_sunset'>{sunset}</p>
                </aside>
            </article>
        </section>
    );
}

export default Soleil;
