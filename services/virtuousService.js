// services/virtuousService.js
const axios = require('axios');
const axiosRetry = require('axios-retry');

// Create an Axios instance for Virtuous API
const virtuousApi = axios.create({
  baseURL: process.env.VIRTUOUS_BASE_URL,
  headers: { Authorization: `Bearer ${process.env.VIRTUOUS_API_KEY}` }
});

// Configure retry logic
axiosRetry(virtuousApi, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

// Function to create a contact in Virtuous
async function createContact(contactData) {
  try {
    const response = await virtuousApi.post('/contacts', contactData);
    return response.data;
  } catch (error) {
    console.error('Error creating contact in Virtuous:', error);
    throw error;
  }
}

module.exports = { createContact };
