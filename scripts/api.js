// Base url
const url = 'https://swapi.dev/api/';

// Delving into people section
const people = 'people/';

class StarWarsApi {
  constructor(url, people) {
    this.url = url;
    this.people = people;
  }

  requestApi = async () => {
    // GET request and stored in the data const
    const response = await axios.get(`${this.url}${this.people}`);
    const data = response.data.results;

    let cardContainerEl = document.querySelector('.card__container');

    for (let i = 0; i < data.length; i++) {
      // Creating an article for every Character, applying a class to it, append it
      let cardEl = document.createElement('article');
      cardEl.classList.add('card');
      cardContainerEl.appendChild(cardEl);

      let nameEl = document.createElement('h3');
      nameEl.classList.add('card__name');
      nameEl.innerHTML = data[i].name;
      cardEl.appendChild(nameEl);

      // Subcontainers inside the article
      let subcontainerEl = document.createElement('div');
      subcontainerEl.classList.add('card__subcontainer');
      cardEl.appendChild(subcontainerEl);

      let logoSideEL = document.createElement('div');
      logoSideEL.classList.add('card__logo');
      subcontainerEl.appendChild(logoSideEL);

      let descriptionSideEL = document.createElement('div');
      descriptionSideEL.classList.add('card__description');
      subcontainerEl.appendChild(descriptionSideEL);

      // Subcontainers inside the logo
      let photoEl = document.createElement('img');
      photoEl.classList.add('card__logo-image');
      photoEl.setAttribute('src', `../assets/images/people/${i + 1}.jpg`);
      logoSideEL.append(photoEl);

      // Dividing the description block

      let genderEl = document.createElement('p');
      genderEl.classList.add('card__description-gender');
      genderEl.innerHTML = `Gender: ${data[i].gender}`;
      descriptionSideEL.append(genderEl);

      let birthdayEl = document.createElement('p');
      birthdayEl.classList.add('card__description-birth');
      birthdayEl.innerHTML = `Year of Birth: ${data[i].birth_year}`;
      descriptionSideEL.append(birthdayEl);
    }
  };
}

const starWars = new StarWarsApi(url, people);

starWars.requestApi();

// Scrolling function
const cardContainerID = document.getElementById('scrollMe');
setTimeout(() => {
  cardContainerID.scrollIntoView({ behavior: 'smooth' });
}, 2000);
