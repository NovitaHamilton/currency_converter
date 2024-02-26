import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/currencies';

const getCurrencies = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching currencies:', error);
    throw error;
  }
};

const addCurrency = async (content) => {
  try {
    const response = await axios.post(`${baseUrl}`, content);
    return response.data;
  } catch (error) {
    console.error('Error posting currency:', error);
    throw error;
  }
};

const updateCurrency = async (id, newRate) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}/${newRate}`);
    return response.data;
  } catch (error) {
    console.error('Error updating currency:', error);
    throw error;
  }
};

const deleteCurrency = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting currency:', error);
    throw error;
  }
};

export default { getCurrencies, addCurrency, updateCurrency, deleteCurrency };
