import asyncHandler from "express-async-handler";

//@desc     Auth User / Set token 
//@route    POST /api/user/auth
//@access   Public
const authUser = asyncHandler(async (req, res)=> {
    res.status(200).json({message : 'Auth User'});
});


export { authUser };