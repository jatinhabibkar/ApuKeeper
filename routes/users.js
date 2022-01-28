const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { body, validationResult } = require("express-validator");


// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/',[
    body("name",'name is required').not().isEmpty().isLength({
        min:3,
    }),
    body("email","please include a valid email").isEmail(),
    body(
        "password",
        "please enter a password with 6 or more characters"
    ).isLength({
        min:6,
    })
],async(req,res)=>{
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            error:errors.array()
        })
    }

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({email})
        if(user){
            return res.status(409).json({msg:'User already exists',status:409})
        }
        user = new User({name,email,password})
        
        // encrypt password
        const salt =await bcrypt.genSalt(10)

        user.password =await bcrypt.hash(password,salt)

        await user.save()

        const payload={
            user:{
                id:user.id
            }
        }

        jwt.sign(payload,config.get("jwtSecret"),
                {expiresIn: '30d'},
                (err,token)=>{
                    if(err) throw err
                    res.json({token})
                }
        )   
    } catch (error) {
        console.log(err.message);
        res.status.send("server error");
    }
})

module.exports =router