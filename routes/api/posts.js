const express = require ("express");
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require("../../middleware/auth");

const Post = require('../../models/Post');
const User = require('../../models/User');



// @route   POST api/posts
// @desc    Create a post
// @access  Private 
router.post("/", [auth, [
    check("title", "Title is required").not().isEmpty(),
    check("ingredients", "Ingredients is required").not().isEmpty(),
    check("type", "Type is required").not().isEmpty(),


    ]
],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      
      const newPost = new Post({
        title: req.body.title,
        type: req.body.type,
        ingredients: req.body.ingredients,
        description: req.body.description,
        time: req.body.time,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
        keyword: req.body.keyword
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


// @route   GET api/posts
// @desc    Get all post
// @access  Private 

router.get('/', auth, async(req,res) =>{

    try {
      //  Sort by date 
      const posts = await Post.find().sort({date: -1});
      res.json(posts);
  
  
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


    // @route   DELETE api/posts/:id
    // @desc    Delete post by ID
    // @access  Private 

router.delete('/:id', auth, async(req,res) =>{

    try {
      const post = await Post.findById(req.params.id);
  
      if (!post) {
        return res.status(404).json({msg: 'Post not found'});
      }
  
      // Check on the user
      if (post.user.toString() !== req.user.id) {
        return res.status(401).json({msg: 'User not authorized'});
      }
  
      await post.remove();
      res.json({msg:"Post removed"});
  
    } catch (err) {
      console.error(err.message);
      if(err.kind === "ObjectId"){
        return res.status(404).json({msg: 'Post not found'});
      }
      res.status(500).send('Server Error');
    }
  });


  // @route   PUT api/posts/like/:id
// @desc    Like a post
// @access  Private 
router.put('/like/:id', auth, async(req,res)=>{
    try {
      const post = await Post.findById(req.params.id);
      // Check if the post has already been liked
      if(post.likes.filter(like => like.user.toString()=== req.user.id).length>0){
        return res.status(400).json({msg:"Post already liked"});
      }
      post.likes.unshift({user: req.user.id});
  
      await post.save();
  
      res.json(post.likes);
  
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
  
  // @route   PUT api/posts/unlike/:id
  // @desc    Like a post
  // @access  Private 
  router.put('/unlike/:id', auth, async(req,res)=>{
    try {
      const post = await Post.findById(req.params.id);
      // Check if the post has already been liked
      if(post.likes.filter(like => like.user.toString()=== req.user.id).length === 0){
        return res.status(400).json({msg:"Post has not yet been liked"});
      }
  
      // Get remove index
      const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id);
      post.likes.splice(removeIndex, 1);
  
      await post.save();
  
      res.json(post.likes);
  
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });

  // @route   POST api/posts/review/:id
// @desc    review on a post
// @access  Private 
router.post("/review/:id", [auth, [
    check("text", "Text is required").not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
      const user = await User.findById(req.user.id).select('-password');
      
      const post = await Post.findById(req.params.id);
      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
  
      };

      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      post.reviews.unshift(newComment)
      await post.save();
  
      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
  );
  
  
  // @route   DELETE api/posts/review/:id/:review_id
  // @desc    Delete review
  // @access  Private 
  router.delete('/review/:id/:review_id', auth, async(req,res) =>{
  
  try {
    const post = await Post.findById(req.params.id);
  
    //Pull out comment
    const review= post.reviews.find(review => review.id === req.params.review_id)
    // check if comment exist
    if(!review){
      return res.status(404).json({msg: "review doesn't exist"});
    }
    // Check user 
    if(review.user.toString()!== req.user.id){
      return res.status(401).json({msg: "User not authorized"});
    }
  
  // Get remove index
  const removeIndex = post.reviews.map(review => review.user.toString()).indexOf(req.user.id);
  post.reviews.splice(removeIndex, 1);
  
  await post.save();
  
  res.json(post.reviews);
  
  
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  
  });



module.exports = router;