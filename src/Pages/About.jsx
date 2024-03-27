import React, { useState } from 'react';

function About() {
    const [planetData, setPlanetData] = useState(null);

    const fetchData = () => {
      fetch('https://swapi.dev/api/planets/1/')
        .then(response => response.json())
        .then(data => setPlanetData(data))
        .catch(error => console.error("Fetching error: ", error));
    };
  
    return (
      <div>
        <h1>
            About
        </h1>
        <button onClick={fetchData}>Load Planet Info</button>
        {/* Перевіряєм чи є дата  */}
        {planetData && (
          <div>
            <h2>{planetData.name}</h2>
            <p>Population: {planetData.population}</p>
            <p>Climate: {planetData.climate}</p>
            <div>
              Films:
              <ul>
                {planetData.films.map((film, index) => (
                  <li key={index}>
                    <a href={film} target="_blank" rel="noopener noreferrer">{film}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default About;