const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    return res.render("home", { id: null, error: null });
})

module.exports = router;