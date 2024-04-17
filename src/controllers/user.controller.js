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
            return res.status(StatusCodes.OK).json({
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



module.exports = {
    registerUser
}