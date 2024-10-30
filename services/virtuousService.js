// services/virtuousService.js
const axios = require('axios');

// Set up Virtuous base URL
const virtuousBaseUrl = process.env.VIRTUOUS_BASE_URL;

// Create an Axios instance for Virtuous API
const virtuousApi = axios.create({
  baseURL: virtuousBaseUrl,
  headers: { Authorization: `Bearer ${process.env.VIRTUOUS_API_KEY}` }
});

// Function to create a new contact
async function createContact(contactData) {
  const response = await virtuousApi.post('/api/contacts', contactData);
  return response.data;
}

// Function to get a contact by ID
async function getContactById(contactId) {
  const response = await virtuousApi.get(`/api/contacts/${contactId}`);
  return response.data;
}

// Function to update a contact
async function updateContact(contactId, contactData) {
  const response = await virtuousApi.put(`/api/contacts/${contactId}`, contactData);
  return response.data;
}

// Function to delete a contact
async function deleteContact(contactId) {
  const response = await virtuousApi.delete(`/api/contacts/${contactId}`);
  return response.data;
}

// Function to get all donations
async function getDonations() {
  const response = await virtuousApi.get('/api/donations');
  return response.data;
}

// Function to create a new donation
async function createDonation(donationData) {
  const response = await virtuousApi.post('/api/donations', donationData);
  return response.data;
}

// Function to get donation by ID
async function getDonationById(donationId) {
  const response = await virtuousApi.get(`/api/donations/${donationId}`);
  return response.data;
}

// Function to update a donation
async function updateDonation(donationId, donationData) {
  const response = await virtuousApi.put(`/api/donations/${donationId}`, donationData);
  return response.data;
}

// Function to delete a donation
async function deleteDonation(donationId) {
  const response = await virtuousApi.delete(`/api/donations/${donationId}`);
  return response.data;
}

// Function to get all campaigns
async function getCampaigns() {
  const response = await virtuousApi.get('/api/campaigns');
  return response.data;
}

// Export the functions
module.exports = {
  createContact,
  getContactById,
  updateContact,
  deleteContact,
  getDonations,
  createDonation,
  getDonationById,
  updateDonation,
  deleteDonation,
  getCampaigns
};
