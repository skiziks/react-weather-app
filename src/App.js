import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/App.css';

// Components
import Header from './components/header';
import WeatherIcon from './components/weather_icon';
import Soleil from './components/soleil';
import Air from './components/air';
import PrecipitationPressure from './components/precipitationPressure';


const API = "8302539b6ef0b38f78dddf8463540038";
let lieu = "Paris";

function App() {
  const [donnees, setDonnees] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${lieu}&appid=${API}`);
      setDonnees(response.data);
    } catch (erreur) {
      console.error('Erreur lors de la requête API :', erreur);
    }
  };

  useEffect(() => {
    // console.log(donnees);
    fetchData();
  }, []);

  return (
    <div>
      <Header donnees={donnees} />
      <WeatherIcon donnees={donnees} />
      <hr />
      <Soleil donnees={donnees} />
      <hr />
      <Air donnees={donnees} />
      <hr />
      <PrecipitationPressure donnees={donnees} />
    </div>
  );
}

export default App;
