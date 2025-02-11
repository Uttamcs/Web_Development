const express = require("express");
let users = require("./MOCK_DATA.json");
const app = express();
const mongoose = require("mongoose");
const PORT = 8000;

// Middleware to parse JSON request body
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));


// Schema
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email must be unique
  },
  job_title: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/firstDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error", err);
  });

// REST API Routes
app.get("/users", (req, res) => {
  const html = `
    <div>
    ${users
      .map(
        (user) => `<li>Name: ${user.first_name} || Email: ${user.email}</li>`
      )
      .join("")}
    </div>
    `;
  res.send(html);
});

app.get("/api/users", async (req, res) => {
  try {
    const allUsers = await User.find(); // MongoDB query to get all users
    return res.json(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res
      .status(500)
      .json({ msg: "Error fetching users", error: error.message });
  }
});

app.get("/api/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id); // MongoDB query to get user by ID
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res
      .status(500)
      .json({ msg: "Error fetching user", error: error.message });
  }
});

// Create a new user
app.post("/api/users", async (req, res) => {
  const body = req.body;
  // Validate if required fields are present
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    // Check if user already exists by email
    const existingUser = await User.findOne({ email: body.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User with this email already exists" });
    }

    // Create new user
    const newUser = new User({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,
    });

    const result = await newUser.save(); // Save user to the database
    console.log("New user created:", result);

    return res
      .status(201)
      .json({ msg: "User created successfully", user: result });
  } catch (error) {
    console.error("Error creating user:", error);
    return res
      .status(500)
      .json({ msg: "Error creating user", error: error.message });
  }
});

// Edit user details (example route)
app.patch("/api/users/:id", async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ msg: "Error updating user", error: error.message });
  }
});

// Delete user with id (example route)
app.delete("/api/users/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json({ msg: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ msg: "Error deleting user", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log("Server Started");
});
