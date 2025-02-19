// Link Shortener
const express = require("express");
const app = express();
const PORT = 3000;

const path = require("path");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const connectToDB = require("./connection");
const url = "mongodb://localhost:27017/short-url";
const staticRoute = require("./routes/staticRouter");
// EJS Template Engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));


// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connect to MongoDB
connectToDB(url);

// Route for shortening URLs
app.use("/url", urlRoute);
app.use("/", staticRoute);
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
    { new: true } 
  );

  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  res.redirect(entry.redirectURL);
});
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
