const express = require('express')
const router = express.Router();
const {
    handleAllUsers,
    handleGetUserByID,
    handleUpdateUserByID,
    handleDeleteUserByID,
    handleCreateNewUser,
} = require("../controllers/user");

// REST API Routes
router.route("/").get(handleAllUsers).post(handleCreateNewUser);
router
    .route("/:id")
    .get(handleGetUserByID)
    .patch(handleUpdateUserByID)
    .delete(handleDeleteUserByID);

module.exports = router;
