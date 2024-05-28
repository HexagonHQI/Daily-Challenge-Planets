const planets = [
    { name: 'Mercury', color: 'gray', moons: 0 },
    { name: 'Venus', color: 'orange', moons: 0 },
    { name: 'Earth', color: 'blue', moons: 1 },
    { name: 'Mars', color: 'ed', moons: 2 },
    { name: 'Jupiter', color: 'yellow', moons: 79 },
    { name: 'Saturn', color: 'brown', moons: 62 },
    { name: 'Uranus', color: 'green', moons: 27 },
    { name: 'Neptune', color: 'purple', moons: 14 }
  ];
  
  const listPlanetsSection = document.querySelector('.listPlanets');
  
  planets.forEach((planet) => {
    const planetDiv = document.createElement('div');
    planetDiv.className = `planet ${planet.color}`;
    planetDiv.textContent = planet.name;
  
    for (let i = 0; i < planet.moons; i++) {
      const moonDiv = document.createElement('div');
      moonDiv.className = 'oon';
      planetDiv.appendChild(moonDiv);
    }
  
    listPlanetsSection.appendChild(planetDiv);
  });