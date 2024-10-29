// services/virtuousService.js
const axios = require('axios');

// Create an Axios instance for Virtuous API
const virtuousApi = axios.create({
  baseURL: process.env.VIRTUOUS_BASE_URL,
  headers: { Authorization: `Bearer ${process.env.VIRTUOUS_API_KEY}` },
});

// Function to get a list of donors
async function getDonors(params) {
  try {
    const response = await virtuousApi.get('/donors', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching donors:', error);
    throw error;
  }
}

// Function to get a specific donor by ID
async function getDonorById(donorId) {
  try {
    const response = await virtuousApi.get(`/donors/${donorId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching donor with ID ${donorId}:`, error);
    throw error;
  }
}

// Function to create a new donor
async function createDonor(donorData) {
  try {
    const response = await virtuousApi.post('/donors', donorData);
    return response.data;
  } catch (error) {
    console.error('Error creating donor:', error);
    throw error;
  }
}

// Function to update a donor
async function updateDonor(donorId, donorData) {
  try {
    const response = await virtuousApi.put(`/donors/${donorId}`, donorData);
    return response.data;
  } catch (error) {
    console.error(`Error updating donor with ID ${donorId}:`, error);
    throw error;
  }
}

// Function to delete a donor
async function deleteDonor(donorId) {
  try {
    await virtuousApi.delete(`/donors/${donorId}`);
    return { message: 'Donor deleted successfully' };
  } catch (error) {
    console.error(`Error deleting donor with ID ${donorId}:`, error);
    throw error;
  }
}

// Function to get donations
async function getDonations(params) {
  try {
    const response = await virtuousApi.get('/donations', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching donations:', error);
    throw error;
  }
}

// Function to get a specific donation by ID
async function getDonationById(donationId) {
  try {
    const response = await virtuousApi.get(`/donations/${donationId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching donation with ID ${donationId}:`, error);
    throw error;
  }
}

// Function to create a new donation
async function createDonation(donationData) {
  try {
    const response = await virtuousApi.post('/donations', donationData);
    return response.data;
  } catch (error) {
    console.error('Error creating donation:', error);
    throw error;
  }
}

// Add more functions for other endpoints as needed based on the documentation...

module.exports = {
  getDonors,
  getDonorById,
  createDonor,
  updateDonor,
  deleteDonor,
  getDonations,
  getDonationById,
  createDonation,
  // Export other functions here...
};
