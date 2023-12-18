import React, { useEffect, useState } from 'react';
import '../style/botPartHomePage.css';

const PrecipitationPressure = (props) => {
    const [precipitation, setPrecipitation] = useState(null);
    const [pressure, setPressure] = useState(null);

    useEffect(() => {
        const donnees = props.donnees;

        if (!donnees || !donnees.weather || donnees.weather.length === 0 || !donnees.main || !donnees.main.pressure) {
            return;
        }

        const weatherDescription = donnees.weather[0].description.toLowerCase();
        const hasPrecipitation = weatherDescription.includes('rain') || weatherDescription.includes('drizzle');

        if (hasPrecipitation) {
            setPrecipitation('Precipitation ongoing');
        } else {
            setPrecipitation('None');
        }

        setPressure(donnees.main.pressure);
    }, [props.donnees]);

    return (
        <section className='section_preci_press'>
            <article className="precipitation">
                <p className='preci_name'>Precipitation Rate</p>
                <p className='preci_value'>{precipitation}</p>
            </article>

            <article className="pressure">
                <p className='press_name'>Atmospheric Pressure</p>
                <p className='press_value'>{pressure} hPa</p>
            </article>
        </section>
    );
}

export default PrecipitationPressure;
