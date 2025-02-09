const express = require("express");
const app = express();
const PORT = 8000;
const fs = require("fs");
let users = require("./MOCK_DATA.json");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// REST API - JSON
// GET/users = HTML Document Render
// GET/api/users - Get list of all users JSON

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

// Get user by id (Id should be dynamic)
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

// Create a new user
app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({status: "Success", id: users.length});
  });
});

// Edit user details
app.patch("/api/users/:id", (req, res) => {
  // TODO
  res.send({ status: "Pending" });
});

// Delete user with id
app.delete("/api/users/:id", (req, res) => {
  // TODO
  res.send({ status: "Pending" });
});

app.listen(PORT, () => {
  console.log("Server Started");
});
