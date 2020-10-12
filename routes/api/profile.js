const express = require ("express");
const router = express.Router();
const config = require("config");


// @route  GET api/profile
// @desc   Test route 
// @access Public
router.get('/', (req,res) => res.send("Profile Route"));

module.exports = router;