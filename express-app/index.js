const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://content.guardianapis.com/search?show-fields=all&api-key=647eea2e-e426-4a85-9fc7-4466c09b7447");
    const topTenArticles = response.data.response.results;
        res.json({ message: topTenArticles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error"});
  }
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
