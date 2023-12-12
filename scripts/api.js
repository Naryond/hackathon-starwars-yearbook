// Base url

const url = 'https://swapi.dev/api/';

const people = 'people/';

const requestApi = async () => {
  const response = await axios.get(`${url}${people}`);
  const data = response.data.results;
  console.log(data);
};

requestApi();
