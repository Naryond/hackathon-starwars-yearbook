// Base url

const url = 'https://swapi.dev/api/';

const people = 'people/';

const requestApi = async () => {
  const response = await axios.get(`${url}${people}`);
  const data = response.data.results;
  console.log(data);

  let cardContainerEl = document.querySelector('.card__container');
  for (let i = 0; i < data.length; i++) {
    let cardEl = document.createElement('article');
    cardEl.classList.add('card');
    cardContainerEl.appendChild(cardEl);
  }
};

requestApi();
