import React, { useEffect, useState } from 'react';
import '../style/botPartHomePage.css';

const Air = (props) => {
    const [windSpeed, setWindSpeed] = useState(null);
    const [humidity, setHumidity] = useState(null);

    useEffect(() => {
        const donnees = props.donnees;

        if (!donnees || !donnees.wind || !donnees.wind.speed || !donnees.main || !donnees.main.humidity) {
            return;
        }

        const windSpeedKmH = (donnees.wind.speed * 3.6).toFixed(2); // Conversion from m/s to km/h

        setWindSpeed(windSpeedKmH);
        setHumidity(donnees.main.humidity);
    }, [props.donnees]);

    return (
        <section className='section_air'>
            <article className="air">
                <p className='wind_name'>Wind Speed</p>
                <p className='wind_value'>{windSpeed} km/h</p>
            </article>

            <article className="humidity">
                <p className='humidity_name'>Humidity</p>
                <p className='humidity_value'>{humidity}%</p>
            </article>
        </section>
    );
}

export default Air;
