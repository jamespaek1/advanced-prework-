/*
 * Star Wars Explorer
 *
 * This JavaScript file powers the advanced pre‑work assignment website. It
 * retrieves data from the public swapi.tech API and displays it on the page.
 * The application supports browsing lists of people and films and viewing
 * details for individual entries. Navigation buttons switch between
 * categories, and GET requests are made when the user interacts with the
 * interface.
 */

// Grab references to DOM elements.
const content = document.getElementById('content');
const peopleBtn = document.getElementById('peopleBtn');
const filmsBtn = document.getElementById('filmsBtn');

// Attach event listeners for navigation buttons.
peopleBtn.addEventListener('click', loadPeople);
filmsBtn.addEventListener('click', loadFilms);

/**
 * Fetch and display a list of Star Wars characters.
 */
function loadPeople() {
  content.innerHTML = '<p>Loading people…</p>';
  fetch('https://swapi.tech/api/people?page=1&limit=10')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const results = data.results;
      const list = document.createElement('ul');
      results.forEach((person) => {
        const li = document.createElement('li');
        li.classList.add('list-item');
        li.textContent = person.name;
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => loadPersonDetails(person.uid));
        list.appendChild(li);
      });
      content.innerHTML = '';
      const heading = document.createElement('h2');
      heading.textContent = 'People';
      content.appendChild(heading);
      content.appendChild(list);
    })
    .catch((err) => {
      content.innerHTML = `<p>Unable to load people: ${err.message}</p>`;
    });
}

/**
 * Fetch and display details for a specific person by uid.
 * @param {string} uid - Unique identifier for the person.
 */
function loadPersonDetails(uid) {
  content.innerHTML = '<p>Loading person details…</p>';
  fetch(`https://swapi.tech/api/people/${uid}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const person = data.result.properties;
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${person.name}</h2>
        <p><strong>Birth&nbsp;Year:</strong> ${person.birth_year}</p>
        <p><strong>Gender:</strong> ${person.gender}</p>
        <p><strong>Height:</strong> ${person.height} cm</p>
        <p><strong>Mass:</strong> ${person.mass} kg</p>
        <p><strong>Hair&nbsp;Color:</strong> ${person.hair_color}</p>
        <p><strong>Eye&nbsp;Color:</strong> ${person.eye_color}</p>
      `;
      content.innerHTML = '';
      content.appendChild(div);
      const backBtn = document.createElement('button');
      backBtn.textContent = 'Back to People';
      backBtn.className = 'back-btn';
      backBtn.addEventListener('click', loadPeople);
      content.appendChild(backBtn);
    })
    .catch((err) => {
      content.innerHTML = `<p>Unable to load person details: ${err.message}</p>`;
    });
}

/**
 * Fetch and display a list of Star Wars films.
 */
function loadFilms() {
  content.innerHTML = '<p>Loading films…</p>';
  fetch('https://swapi.tech/api/films')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const results = data.result;
      const list = document.createElement('ul');
      results.forEach((film) => {
        const filmProps = film.properties;
        const li = document.createElement('li');
        li.classList.add('list-item');
        li.textContent = `${filmProps.title} (${filmProps.release_date})`;
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => loadFilmDetails(film.uid));
        list.appendChild(li);
      });
      content.innerHTML = '';
      const heading = document.createElement('h2');
      heading.textContent = 'Films';
      content.appendChild(heading);
      content.appendChild(list);
    })
    .catch((err) => {
      content.innerHTML = `<p>Unable to load films: ${err.message}</p>`;
    });
}

/**
 * Fetch and display details for a specific film by uid.
 * @param {string} uid - Unique identifier for the film.
 */
function loadFilmDetails(uid) {
  content.innerHTML = '<p>Loading film details…</p>';
  fetch(`https://swapi.tech/api/films/${uid}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const film = data.result.properties;
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${film.title}</h2>
        <p><strong>Episode:</strong> ${film.episode_id}</p>
        <p><strong>Director:</strong> ${film.director}</p>
        <p><strong>Producer:</strong> ${film.producer}</p>
        <p><strong>Release&nbsp;Date:</strong> ${film.release_date}</p>
        <p><strong>Opening&nbsp;Crawl:</strong> ${film.opening_crawl}</p>
      `;
      content.innerHTML = '';
      content.appendChild(div);
      const backBtn = document.createElement('button');
      backBtn.textContent = 'Back to Films';
      backBtn.className = 'back-btn';
      backBtn.addEventListener('click', loadFilms);
      content.appendChild(backBtn);
    })
    .catch((err) => {
      content.innerHTML = `<p>Unable to load film details: ${err.message}</p>`;
    });
}