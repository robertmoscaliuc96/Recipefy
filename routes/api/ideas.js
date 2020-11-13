const express = require ("express");
const router = express.Router();


// @route   GET api/ideas
// @desc    Test route
// @access  Public 
router.get("/", (req,res)=> res.send("Ideas route"));


module.exports = router;b  