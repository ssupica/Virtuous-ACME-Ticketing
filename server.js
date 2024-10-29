// server.js
require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const cron = require('node-cron');
const winston = require('winston');
const syncController = require('./controllers/syncController');
const app = express();

// Middleware for JSON requests
app.use(express.json());

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/server.log' })
  ]
});

app.set('logger', logger);

// Rate limiter to prevent excessive requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});
app.use('/sync-attendees', limiter);

// Sync route with logging
app.post('/sync-attendees', syncController.syncAttendees);

// Scheduled sync job (runs every hour)
cron.schedule('0 * * * *', () => {
  logger.info('Starting scheduled sync job...');
  syncController.syncAttendees({ headers: { 'x-api-key': process.env.SYNC_API_KEY } });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
