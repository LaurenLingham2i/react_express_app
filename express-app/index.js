const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Deck of Cards API");
})

app.get("/api/deck", async (req, res) => {
  try {
    const response = await axios.get("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    const deckId = response.data.deck_id;
    res.json({ message: `Deck ID: ${deckId}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error"});
  }
});

// app.get("/", async (req, res) => {
//   try {
//     const response = await axios.get("https://content.guardianapis.com/search?show-fields=all&api-key=647eea2e-e426-4a85-9fc7-4466c09b7447");
//     console.log(response);
//     // console.log(response.data.response.results[0].webTitle);


//     // const firstArticle = response.results[1].id;
//     // res.json({ message: `First article: ${firstArticle}` });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error"});
//   }
// });

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
