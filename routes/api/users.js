const express = require ("express");
const router = express.Router();
const config = require("config");

// @route  GET api/ 
// @desc   Test route 
// @access Public
router.get('/', (req,res) => res.send("Users Route"));

module.exports = router;