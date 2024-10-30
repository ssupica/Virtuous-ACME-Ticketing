const axios = require('axios');

// Set up Virtuous base URL
const virtuousBaseUrl = process.env.VIRTUOUS_BASE_URL;

// Create an Axios instance for Virtuous API
const virtuousApi = axios.create({
  baseURL: virtuousBaseUrl,
  headers: { Authorization: `Bearer ${process.env.VIRTUOUS_API_KEY}` }
});

/*------------------- Contacts -------------------*/

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

/*------------------- Donations -------------------*/

async function getDonations() {
  const response = await virtuousApi.get('/api/donations');
  return response.data;
}

async function createDonation(donationData) {
  const response = await virtuousApi.post('/api/donations', donationData);
  return response.data;
}

async function getDonationById(donationId) {
  const response = await virtuousApi.get(`/api/donations/${donationId}`);
  return response.data;
}

async function updateDonation(donationId, donationData) {
  const response = await virtuousApi.put(`/api/donations/${donationId}`, donationData);
  return response.data;
}

async function deleteDonation(donationId) {
  const response = await virtuousApi.delete(`/api/donations/${donationId}`);
  return response.data;
}

/*------------------- Campaigns -------------------*/

async function getCampaigns() {
  const response = await virtuousApi.get('/api/campaigns');
  return response.data;
}

/*------------------- Webhooks -------------------*/

// Function to create a new webhook
async function createWebhook(webhookData) {
  const response = await virtuousApi.post('/api/Webhook', webhookData);
  return response.data;
}

// Function to get a webhook by ID
async function getWebhookById(webhookId) {
  const response = await virtuousApi.get(`/api/Webhook/${webhookId}`);
  return response.data;
}

// Function to update a webhook
async function updateWebhook(webhookId, webhookData) {
  const response = await virtuousApi.put(`/api/Webhook/${webhookId}`, webhookData);
  return response.data;
}

// Function to delete a webhook
async function deleteWebhook(webhookId) {
  const response = await virtuousApi.delete(`/api/Webhook/${webhookId}`);
  return response.data;
}

// Function to set a webhook's active state
async function setWebhookActiveState(webhookId, active) {
  const response = await virtuousApi.put(`/api/Webhook/${webhookId}/Active`, { active });
  return response.data;
}

/*------------------- Projects -------------------*/

async function createProject(projectData) {
  const response = await virtuousApi.post('/api/projects', projectData);
  return response.data;
}

async function getProjectById(projectId) {
  const response = await virtuousApi.get(`/api/projects/${projectId}`);
  return response.data;
}

async function updateProject(projectId, projectData) {
  const response = await virtuousApi.put(`/api/projects/${projectId}`, projectData);
  return response.data;
}

async function deleteProject(projectId) {
  const response = await virtuousApi.delete(`/api/projects/${projectId}`);
  return response.data;
}

/*------------------- Pledges -------------------*/

async function createPledge(pledgeData) {
  const response = await virtuousApi.post('/api/pledges', pledgeData);
  return response.data;
}

async function getPledgeById(pledgeId) {
  const response = await virtuousApi.get(`/api/pledges/${pledgeId}`);
  return response.data;
}

async function updatePledge(pledgeId, pledgeData) {
  const response = await virtuousApi.put(`/api/pledges/${pledgeId}`, pledgeData);
  return response.data;
}

async function deletePledge(pledgeId) {
  const response = await virtuousApi.delete(`/api/pledges/${pledgeId}`);
  return response.data;
}

/*------------------- Contact Notes -------------------*/

async function createContactNote(contactId, noteData) {
  const response = await virtuousApi.post(`/api/contacts/${contactId}/notes`, noteData);
  return response.data;
}

async function getContactNotes(contactId) {
  const response = await virtuousApi.get(`/api/contacts/${contactId}/notes`);
  return response.data;
}

async function updateContactNote(contactId, noteId, noteData) {
  const response = await virtuousApi.put(`/api/contacts/${contactId}/notes/${noteId}`, noteData);
  return response.data;
}

async function deleteContactNote(contactId, noteId) {
  const response = await virtuousApi.delete(`/api/contacts/${contactId}/notes/${noteId}`);
  return response.data;
}

/*------------------- Forms -------------------*/

async function getForms() {
  const response = await virtuousApi.get('/api/forms');
  return response.data;
}

async function getFormById(formId) {
  const response = await virtuousApi.get(`/api/forms/${formId}`);
  return response.data;
}

/*------------------- Exports -------------------*/

module.exports = {
  // Contacts
  createContact,
  getContactById,
  updateContact,
  deleteContact,
  
  // Donations
  getDonations,
  createDonation,
  getDonationById,
  updateDonation,
  deleteDonation,
  
  // Campaigns
  getCampaigns,

  // Webhooks
  createWebhook,
  getWebhookById,
  updateWebhook,
  deleteWebhook,
  setWebhookActiveState,

  // Projects
  createProject,
  getProjectById,
  updateProject,
  deleteProject,

  // Pledges
  createPledge,
  getPledgeById,
  updatePledge,
  deletePledge,

  // Contact Notes
  createContactNote,
  getContactNotes,
  updateContactNote,
  deleteContactNote,

  // Forms
  getForms,
  getFormById
};
