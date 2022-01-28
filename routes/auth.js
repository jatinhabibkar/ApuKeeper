const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const auth = require('../middleware/auth')



// @route   GET api/users
// @desc    Register a user
// @access  private
router.get("/",auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password')
      res.json(user)
    } catch (error) {
      console.log(error.message);
      res.status(500).send('server error')
    }
});

// @route   POST api/users
// @desc    AUth user & get token
// @access  Public
router.post("/",[
    body('email','please include a vaild email').isEmail(),
    body('password','password is required').exists()
], 
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const {email,password} = req.body

    try{
        let user = await User.findOne({email}).select('+password')

        if(!user){
            return res.status(401).json({msg:"Invalid credential","status":401})
        }
        const isMatch =await bcrypt.compare(password,user.password)

        if(!isMatch){
          return res.status(401).json({msg:"Invalid credential","status":401})
        }

		const payload = {
			user: {
			  id: user.id,
			}
		  };

		  jwt.sign(payload,config.get("jwtSecret"),{expiresIn: '30d',},
			(err, token) => {
		      if (err) throw err;
			  return res.json({ token });
			})	

    }catch(err){
		console.log(err.message);
		res.status.send("server error noice");
    }
});

module.exports = router;
