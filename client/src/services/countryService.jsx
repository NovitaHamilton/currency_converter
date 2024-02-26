import axios from 'axios';
const baseUrl = 'http://localhost:3001/api';

const getCountries = async () => {
  try {
    const response = await axios.get(`${baseUrl}/countries`);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

const addCountry = async (content) => {
  try {
    const response = await axios.post(`${baseUrl}/countries`, content);
    return response.data;
  } catch (error) {
    console.error('Error posting country:', error);
    throw error;
  }
};

export default { getCountries, addCountry };
