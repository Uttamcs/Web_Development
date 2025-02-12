// Link Shortener

const express = require("express");
const app = express();
const PORT = 3000;
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const connectToDB = require("./connection");
const url = "mongodb://localhost:27017/short-url";
// Middleware to parse JSON
app.use(express.json());
// Connect to MongoDB
connectToDB(url);

// Route for shortening URLs
app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true } // Return the updated document
  );

  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  res.redirect(entry.redirectURL);
});
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
