const express = require ("express");
const router = express.Router();
const config = require("config");


// @route  GET api/posts
// @desc   Test route 
// @access Public
router.get('/', (req,res) => res.send("Posts Route"));

module.exports = router;