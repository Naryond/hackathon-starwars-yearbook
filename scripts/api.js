// Base url

const url = 'https://swapi.dev/api';

const people = 'people.results';

const requestApi = async () => {
  const response = await axios.get(`${url}${people}`);
  console.log(response);
};

requestApi();
