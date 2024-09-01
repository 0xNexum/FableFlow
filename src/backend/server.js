// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Loads environment variables from the .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from your React frontend (CORS)
app.use(cors());
app.use(express.json());

// API endpoint to get AI suggestions
app.post('/api/ai-suggestions', async (req, res) => {
  const { storyContext } = req.body; // Get the story context from the request body

  try {
    // Send a request to Galadriel AI API
    const response = await axios.post(
      process.env.GALADRIEL_API_URL, // Galadriel API URL
      {
        context: storyContext, // Send the story context to the AI service
        // Add any other necessary parameters here, depending on the API's requirements
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GALADRIEL_API_KEY}`, // Use your API key for authorization
          'Content-Type': 'application/json',
        },
      }
    );

    // Assuming the API returns suggestions in response.data.suggestions
    res.json({ suggestions: response.data.suggestions }); // Send the suggestions back to the frontend
  } catch (error) {
    console.error('Error fetching AI suggestions:', error.message);
    res.status(500).json({ error: 'Failed to fetch AI suggestions' }); // Send an error response if something goes wrong
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
