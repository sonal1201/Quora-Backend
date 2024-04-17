const express = require('express');

const userRouter = require('./user.route');

const apiRouter = express.Router();

// If any request comes and route continues with /problems, we map it to problemRouter
apiRouter.use('/user', userRouter);

module.exports = apiRouter;