// Base url
const url = 'https://swapi.dev/api/';

// Delving into people section
const people = 'people/';

const requestApi = async () => {
  // GET request and stored in the data const
  const response = await axios.get(`${url}${people}`);
  const data = response.data.results;

  console.log(data);

  let cardContainerEl = document.querySelector('.card__container');

  for (let i = 0; i < data.length; i++) {
    // Creating an article for every Character, applying a class to it, append it
    let cardEl = document.createElement('article');
    cardEl.classList.add('card');
    cardContainerEl.appendChild(cardEl);

    // Subcontainers inside the article
    let logoSideEL = document.createElement('div');
    logoSideEL.classList.add('card__logo');
    cardEl.appendChild(logoSideEL);

    let descriptionSideEL = document.createElement('div');
    descriptionSideEL.classList.add('card__description');
    cardEl.appendChild(descriptionSideEL);
  }
};

requestApi();
