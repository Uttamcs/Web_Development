// What is REST API ?

// REST (Representational State Transfer) is an architectural style for APIs
// Here's a simple example REST API using Express.js

const express = require('express');
const app = express();
const PORT = 8000;
let users = require('./MOCK_DATA.json');

// REST API - JSON
// GET/users = HTML Document Render
// GET/api/users - Get list of all users JSON



// app.get("/users", (req, res) => {
//   const html = `
//     <ul>
//     ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `;
//   res.send(html);
// });


// app.get("/api/users", (req, res) => {
//     return res.json(users);
// })


// Get user by id (Id should be dynamic)
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

// Create a new user
app.post("/api/users", (req, res) => {
    // TODO 
    res.json({ status: "Pending" });
})
// Edit user details
app.patch("/api/users/:id", (req, res) => {
    // TODO
    res.send({ status: "Pending" });
})

// Delete user with id
app.delete("/api/users/:id", (req, res) => {
    // TODO
    res.send({ status: "Pending" });
})

app.listen(PORT, () => {
    console.log("Server Started");
})