// controllers/syncController.js
const acmeService = require('../services/acmeService');
const virtuousService = require('../services/virtuousService');

// Transform attendee data to contact format
function transformAttendeeToContact(attendee) {
  return {
    firstName: attendee.first_name,
    lastName: attendee.last_name,
    email: attendee.email
  };
}

// Sync attendees from Acme to Virtuous
async function syncAttendees(req, res) {
  // Check API key for security
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.SYNC_API_KEY) {
    return res.status(403).json({ error: 'Forbidden: Invalid API Key' });
  }

  try {
    // Get attendees from Acme
    const attendees = await acmeService.getAttendees();
    const results = [];

    // Create contacts in Virtuous for each attendee
    for (const attendee of attendees) {
      try {
        const contactData = transformAttendeeToContact(attendee);
        const result = await virtuousService.createContact(contactData);
        results.push({ success: true, data: result });
      } catch (error) {
        results.push({ success: false, error: error.message });
      }
    }

    // Return sync results
    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error: 'Sync process failed' });
  }
}

module.exports = { syncAttendees };
