const express = require('express');
const path = require('path');
const cors= require("cors")
const bodyParser = require('body-parser');
const { Language: LM } = require('next-token-prediction');
const OpenSourceBooksDataset = require('./training/datasets/OpenSourceBooks');

const app = express();

const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// Create language model agent
let agent;
(async () => {
  agent = await LM({ dataset: OpenSourceBooksDataset });
})();

// API endpoint for token prediction
app.post("/api/token-prediction", (req, res) => {
  const { token } = req.body;
console.log(req.body)
  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  try {
    const prediction = agent.getTokenPrediction(token);
    return res.json(prediction);
  } catch (error) {
    return res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
