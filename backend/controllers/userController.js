import asyncHandler from "express-async-handler";

//@desc     Auth User / Set token 
//@route    POST /api/user/auth
//@access   Public
const authUser = asyncHandler(async (req, res)=> {
    res.status(200).json({message : 'Auth User'});
});

//@desc     Register a new User
//@route    POST /api/user/registerUser
//@access   Public
const registerUser = asyncHandler(async (req, res)=> {
    res.status(200).json({message : 'Register User'});
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