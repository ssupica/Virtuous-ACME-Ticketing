const axios = require('axios');
const acmeApi = axios.create({
  baseURL: process.env.ACME_BASE_URL,
  headers: { Authorization: `Bearer ${process.env.ACME_API_KEY}` }
});

// Function to fetch attendees
async function getAttendees() {
  const response = await acmeApi.get('/attendees');
  return response.data;
}

// Function to fetch an attendee by ID
async function getAttendeeById(attendeeId) {
  const response = await acmeApi.get(`/attendees/${attendeeId}`);
  return response.data;
}

// Function to create a new attendee
async function createAttendee(attendeeData) {
  const response = await acmeApi.post('/attendees', attendeeData);
  return response.data;
}

// Function to update an attendee
async function updateAttendee(attendeeId, attendeeData) {
  const response = await acmeApi.put(`/attendees/${attendeeId}`, attendeeData);
  return response.data;
}

// Function to delete an attendee
async function deleteAttendee(attendeeId) {
  await acmeApi.delete(`/attendees/${attendeeId}`);
}

// Function to fetch events
async function getEvents() {
  const response = await acmeApi.get('/events');
  return response.data;
}

// Function to fetch an event by ID
async function getEventById(eventId) {
  const response = await acmeApi.get(`/events/${eventId}`);
  return response.data;
}

// Function to create a new event
async function createEvent(eventData) {
  const response = await acmeApi.post('/events', eventData);
  return response.data;
}

// Function to update an event
async function updateEvent(eventId, eventData) {
  const response = await acmeApi.put(`/events/${eventId}`, eventData);
  return response.data;
}

// Function to delete an event
async function deleteEvent(eventId) {
  await acmeApi.delete(`/events/${eventId}`);
}

// Function to fetch orders
async function getOrders() {
  const response = await acmeApi.get('/orders');
  return response.data;
}

// Function to fetch an order by ID
async function getOrderById(orderId) {
  const response = await acmeApi.get(`/orders/${orderId}`);
  return response.data;
}

// Function to create a new order
async function createOrder(orderData) {
  const response = await acmeApi.post('/orders', orderData);
  return response.data;
}

// Function to update an order
async function updateOrder(orderId, orderData) {
  const response = await acmeApi.put(`/orders/${orderId}`, orderData);
  return response.data;
}

// Function to delete an order
async function deleteOrder(orderId) {
  await acmeApi.delete(`/orders/${orderId}`);
}

// Exporting all functions
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
