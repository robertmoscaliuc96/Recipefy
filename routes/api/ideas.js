const express = require ("express");
const router = express.Router();


// @route   GET api/ideas
// @desc    Test route
// @access  Public 
router.get("/", (req,res)=> res.send("Ideas route"));


// @route   POST api/posts
// @desc    Create a post
// @access  Private 
router.post("/", [auth, [
    check("search", "Title is required").not().isEmpty(),
    ]
],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newPost = new Post({
        search: req.body.search,
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);



module.exports = router;b  