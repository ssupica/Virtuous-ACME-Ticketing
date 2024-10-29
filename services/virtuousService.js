// services/virtuousService.js
const axios = require('axios');

// Create an Axios instance for Virtuous API
const virtuousApi = axios.create({
  baseURL: process.env.VIRTUOUS_BASE_URL,
  headers: { Authorization: `Bearer ${process.env.VIRTUOUS_API_KEY}` }
});

// Function to fetch donors from Virtuous
async function getDonors() {
  try {
    const response = await virtuousApi.get('/donors');
    return response.data;
  } catch (error) {
    console.error('Error fetching donors from Virtuous:', error);
    throw error;
  }
}

module.exports = { getDonors };
