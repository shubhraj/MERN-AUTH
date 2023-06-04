import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateTokens from "../utils/generateTokens.js";


//@desc     Auth User / Set token 
//@route    POST /api/user/auth
//@access   Public
const authUser = asyncHandler(async (req, res)=> {
    const { email, password } = req.body;
    const user = await User.findOne({email});
   
    if(user && (await user.matchPassword(password))) {
        generateTokens(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid email or Password');
    }

});

//@desc     Register a new User
//@route    POST /api/user/registerUser
//@access   Public
const registerUser = asyncHandler(async (req, res)=> {
    const { name, email, password } = req.body;
   
    const userExist = await User.findOne({ email });
    
    if(userExist) {
        res.status(400);
        throw new Error('User Already Exist');
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if(user) {
        generateTokens(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid User Data');
    }
});


//@desc     Logout User
//@route    POST /api/user/logoutUser
//@access   Public
const logoutUser = asyncHandler(async (req, res)=> {
    res.status(200).json({message : 'Logout User'});
});

//@desc     Get User Profile
//@route    GET /api/user/logoutUser
//@access   Private
const getUserProfile = asyncHandler(async (req, res)=> {
    res.status(200).json({message : 'User Profile'});
});


//@desc     Update User Profile
//@route    PUT /api/user/logoutUser
//@access   Private
const updateUserProfile = asyncHandler(async (req, res)=> {
    res.status(200).json({message : 'Update User Profile'});
});

export { 
    authUser,  
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};