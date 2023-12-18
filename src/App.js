// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/App.css';

// Components
import Header from './components/header';
import WeatherIcon from './components/weather_icon';
import Soleil from './components/soleil';
import Air from './components/air';
import PrecipitationPressure from './components/precipitationPressure';
import SearchEngine from './components/searchEngine';

const API = "8302539b6ef0b38f78dddf8463540038";

function App() {
  const [donnees, setDonnees] = useState(null);
  const [lieu, setLieu] = useState("Paris");

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${lieu}&appid=${API}`);
      setDonnees(response.data);
    } catch (erreur) {
      alert("Cette ville n'existe pas, veuillez réessayer.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [lieu]); // Mettez lieu comme dépendance pour refetcher les données lorsque la ville change

  return (
    <main>
      <SearchEngine setLieu={setLieu} />
      <Header donnees={donnees} />
      <WeatherIcon donnees={donnees} />
      <hr />
      <Soleil donnees={donnees} />
      <hr />
      <Air donnees={donnees} />
      <hr />
      <PrecipitationPressure donnees={donnees} />
    </main>
  );
}

export default App;
