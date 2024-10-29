// services/acmeService.js
const axios = require('axios');
const axiosRetry = require('axios-retry');

// Create an Axios instance for Acme API
const acmeApi = axios.create({
  baseURL: process.env.ACME_BASE_URL,
  headers: { Authorization: `Bearer ${process.env.ACME_API_KEY}` }
});

// Configure retry logic
axiosRetry(acmeApi, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

// Function to fetch attendees from Acme
async function getAttendees() {
  try {
    const response = await acmeApi.get('/attendees');
    return response.data;
  } catch (error) {
    console.error('Error fetching attendees from Acme:', error);
    throw error;
  }
}

module.exports = { getAttendees };
