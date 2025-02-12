const User = require("../models/user");
async function handleAllUsers(req, res) {
  try {
    const allDbUsers = await User.find({});
    return res.status(200).json(allDbUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleGetUserByID(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
async function handleUpdateUserByID(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body, // Accepting dynamic fields
        { new: true, runValidators: true } // Returns updated user
      );

      if (!updatedUser)
        return res.status(404).json({ error: "User not found" });

      return res
        .status(200)
        .json({ msg: "User updated successfully", user: updatedUser });
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function handleDeleteUserByID(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);

      if (!deletedUser)
        return res.status(404).json({ error: "User not found" });

      return res
        .status(200)
        .json({ msg: "User deleted successfully", user: deletedUser });
    } catch (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function handleCreateNewUser(req, res) {
   const { first_name, last_name, email, gender, job_title } = req.body;

   if (!first_name || !last_name || !email || !gender || !job_title) {
     return res.status(400).json({ error: "All fields are required" });
   }

   try {
     const existingUser = await User.findOne({ email });
     if (existingUser) {
       return res
         .status(400)
         .json({ error: "User with this email already exists" });
     }

     const newUser = new User({
       first_name,
       last_name,
       email,
       gender,
       job_title,
     });
     const savedUser = await newUser.save();

     return res
       .status(201)
       .json({ msg: "User created successfully", user: savedUser });
   } catch (error) {
     console.error("Error creating user:", error);
     return res.status(500).json({ error: "Internal Server Error" });
   }
}
module.exports = {
  handleAllUsers,
  handleGetUserByID,
  handleUpdateUserByID,
    handleDeleteUserByID,
  handleCreateNewUser,
};
