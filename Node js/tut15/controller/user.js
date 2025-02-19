const User = require("../models/user");

async function handleUserSignUp(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.render("signUp", { error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render("signUp", { error: "Email already in use." });
    }

    await User.create({ name, email, password });

    return res.redirect("/login");
  } catch (error) {
    console.error("Signup error:", error);
    return res.render("signUp", { error: "Signup failed. Please try again." });
  }
}

async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.render("login", { error: "Invalid username or password" });
    }

    return res.redirect("/");
  } catch (error) {
    console.error("Login error:", error);
    return res.render("login", {
      error: "An error occurred. Please try again.",
    });
  }
}

module.exports = { handleUserSignUp, handleUserLogin };
