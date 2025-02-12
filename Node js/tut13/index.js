const express = require("express");
const app = express();
const PORT = 8000;
const connectDB = require("./connection");
const userRouter = require("./routes/user");

// Middleware to parse JSON request body
app.use(express.json());

// Connection
connectDB("mongodb://127.0.0.1:27017/firstDB")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use('/api/users', userRouter);
app.listen(PORT, () => {
  console.log("Server Started at ", PORT);
});
