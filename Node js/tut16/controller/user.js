const User = require("../models/user");
const bcrypt = require("bcrypt");

async function handleUserSignUp(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.render("signUp", {
        error: "All fields are required",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.render("login");
  } catch (error) {
    console.error("Signup error:", error);
    return res.render("signUp", {
      error: "Signup failed. Please try again.",
    });
  }
}

async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.render("login", {
        error: "Invalid username or password",
      });
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.render("login", {
          error: "Invalid username or password",
        });
      }
      if (result) {
        let token = jwt.sign({ email: user.email }, "fagagnfadav");
        res.cookie("token", token);
        return res.render("home", { id: user._id, error: null });
      } else {
        return res.render("login", {
          error: "Invalid username or password",
        });
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.render("login", {
      error: "An error occurred. Please try again.",
    });
  }
}

async function handleUserLogout(req, res) {
  res.clearCookie("token", "");
  return res.render("login");
};


module.exports = { handleUserSignUp, handleUserLogin , handleUserLogout};
