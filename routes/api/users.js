const express = require ("express");
const router = express.Router();
const bcrypt = require ("bcryptjs");
const config = require("config");
const {check, validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");


// @route  GET api/ 
// @desc   Test route 
// @access Public
router.post('/',[
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password with 7 or more characters").isLength({min: 7})
    ], async(req,res) => {

    console.log(req.body);


    //Find the validation errors in  this request and wraps them in an object 
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {name, email, password} = req.body;

    try {

        let user = await User.findOne({email});

        if(user){
            return res.status(400).json({errors:[{msg:"User already exists"}] });
        }
        // create user
        user = new User({
            name,
            email,
            password,
        });
        
    // Encrypt password (hash)
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

    // save user in DB    
        await user.save();

    // Return jsonwebtoken
        const payload = {
            user:{
                id: user.id
            }
        };
        jwt.sign(payload, config.get("jwtToken"),{expiresIn: 360000}, 
        (err, token) =>{
            if(err) throw err;
            res.json({ token });
        });
        
    } catch (err) {
        console.error(err.message);
        res.status(500).sent("Server error");
    }

});

module.exports = router;