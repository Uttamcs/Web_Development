// Express MiddleWare

const express = require("express");
const app = express();
const PORT = 8000;
const fs = require("fs");
let users = require("./MOCK_DATA.json");

// MiddleWare plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("Hello from the middleware 1");
    req.myUserName = "XXX";
  next();
});
app.use((req, res, next) => {
    console.log("Hello from the middleware 2", req.myUserName);
    // return res.json(users);
    next();
});
app.use((req, res, next) => {
    fs.appendFile(
        "log.txt",
        `\n${Date.now().toLocaleString()}: ${req.method} ${req.path}`,
        (err, data) => {
            next();
        }
    );
});
    
    
    
    // REST API - JSON
// GET/users = HTML Document Render
// GET/api/users - Get list of all users JSON

app.get("/users", (req, res) => {
    console.log(`Hey ${req.myUserName}, I'm in get route`);
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
    return res.json({ status: "Success", id: users.length });
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
