// services/acmeService.js
const axios = require('axios');

// Set up Acme API base URL and authorization headers
const acmeBaseUrl = process.env.ACME_BASE_URL;
const acmeApiKey = process.env.ACME_API_KEY;

// Create an Axios instance for the Acme API
const acmeApi = axios.create({
  baseURL: acmeBaseUrl,
  headers: { Authorization: `Bearer ${acmeApiKey}` }
});

// Function to get all attendees
async function getAttendees() {
  const response = await acmeApi.get('/api/attendees');
  return response.data;
}

// Function to get a specific attendee by ID
async function getAttendeeById(attendeeId) {
  const response = await acmeApi.get(`/api/attendees/${attendeeId}`);
  return response.data;
}

// Function to create a new attendee
async function createAttendee(attendeeData) {
  const response = await acmeApi.post('/api/attendees', attendeeData);
  return response.data;
}

// Function to update an existing attendee by ID
async function updateAttendee(attendeeId, attendeeData) {
  const response = await acmeApi.put(`/api/attendees/${attendeeId}`, attendeeData);
  return response.data;
}

// Function to delete an attendee by ID
async function deleteAttendee(attendeeId) {
  const response = await acmeApi.delete(`/api/attendees/${attendeeId}`);
  return response.data;
}

// Function to get all events
async function getEvents() {
  const response = await acmeApi.get('/api/events');
  return response.data;
}

// Function to get a specific event by ID
async function getEventById(eventId) {
  const response = await acmeApi.get(`/api/events/${eventId}`);
  return response.data;
}

// Function to create a new event
async function createEvent(eventData) {
  const response = await acmeApi.post('/api/events', eventData);
  return response.data;
}

// Function to update an existing event by ID
async function updateEvent(eventId, eventData) {
  const response = await acmeApi.put(`/api/events/${eventId}`, eventData);
  return response.data;
}

// Function to delete an event by ID
async function deleteEvent(eventId) {
  const response = await acmeApi.delete(`/api/events/${eventId}`);
  return response.data;
}

// Function to get all orders
async function getOrders() {
  const response = await acmeApi.get('/api/orders');
  return response.data;
}

// Function to get a specific order by ID
async function getOrderById(orderId) {
  const response = await acmeApi.get(`/api/orders/${orderId}`);
  return response.data;
}

// Function to create a new order
async function createOrder(orderData) {
  const response = await acmeApi.post('/api/orders', orderData);
  return response.data;
}

// Function to update an existing order by ID
async function updateOrder(orderId, orderData) {
  const response = await acmeApi.put(`/api/orders/${orderId}`, orderData);
  return response.data;
}

// Function to delete an order by ID
async function deleteOrder(orderId) {
  const response = await acmeApi.delete(`/api/orders/${orderId}`);
  return response.data;
}

// Additional API endpoints would be added here as per the Acme API documentation
// (e.g., managing tickets, sessions, or customer data if available)

// Export all functions
module.exports = {
  getAttendees,
  getAttendeeById,
  createAttendee,
  updateAttendee,
  deleteAttendee,
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
