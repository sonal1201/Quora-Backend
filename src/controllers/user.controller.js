const userModel = require('../models/user.model');
const { StatusCodes } = require('http-status-codes');


//Register User
async function registerUser(req, res, next) {
    try {
        const userData = req.body;
        // Check if user exists
        const existingUser = await userModel.findOne({
            username: userData.username,
            email: userData.email
        });

        if (existingUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'User already exists'
            });
        }
        else {
            const newPerson = new userModel(userData);
            await newPerson.save();
            return res.status(StatusCodes.CREATED).json({
                success: true,
                message: 'User created successfully',
                error: {},
                data: newPerson
            });
        }
    } catch (error) {
        next(error);
    }
}

//LOGIN USER
async function loginUser(req, res, next) {
    try {
        const { username, email } = req.body;

        //if user and email is empty
        if (!username) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: false,
                message: 'Username cannot be Empty'
            });
        }
        if (!email) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: false,
                message: 'Email cannot be Empty'
            });
        }

        ////finding user's details in db
        const finduser = await userModel.findOne({ username })
        const findemail = await userModel.findOne({ email })

        if (!finduser) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: false,
                message: 'Username not exist'
            });
        }
        if (!findemail) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: false,
                message: 'Gmail not exist'
            });
        }

        return res.status(StatusCodes.OK).json({
            message: "login sucessfully"

        })

    } catch (error) {
        next(error)
    }
}

//User profile
async function userProfile(req, res, next) {

    try {
        const userId = req.params.id

        const findUserProfile = await userModel.findOne({ _id: userId });

        if (!findUserProfile) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: false,
                message: "Profile Not Found "
            })
        }
        return res.status(StatusCodes.OK).json({
            status: true,
            message: "Profile data found",
            data: findUserProfile
        })
    } catch (error) {
        next(error);
    }

}

module.exports = {
    registerUser,
    loginUser,
    userProfile
}