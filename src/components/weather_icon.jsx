import React from 'react';
import '../style/middlePartHomePage.css';

const WeatherIcon = (props) => {
    const donnees = props.donnees;

    if (!donnees || !donnees.weather || donnees.weather.length === 0) {
        return null;
    }

    const imageUrl = donnees && donnees.weather && donnees.weather[0] && donnees.weather[0].icon;
    const kelvinTemperature = donnees.main.temp;
    const celsiusTemperature = Math.round(kelvinTemperature - 273.15);

    const optionsDate = { weekday: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', optionsDate);

    const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
    const currentTime = new Date().toLocaleTimeString('en-US', optionsTime);

    return (
        <section className='icon'>
            {imageUrl && (
                <div>
                    <article className="icone">
                        <img className="img_middlePart" src={require(`../ico/${imageUrl}.png`)} alt="icone de la météo" />
                    </article>
                    <article className="weather_description_temp">
                        <p className='weather_temp'>{celsiusTemperature}°C</p>
                        <p className='weather_description'>{donnees.weather[0].description}</p>
                        <p className="after">{currentDate} - {currentTime}</p>
                    </article>
                </div>
            )}
        </section>
    );
}

export default WeatherIcon;
