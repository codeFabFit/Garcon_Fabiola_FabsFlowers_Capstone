import express from 'express';
import User from '../Models/userModel.js';
import bcrypt from 'bcryptjs'
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';


const userRouter = express.Router();

userRouter.post(
    '/signin', 
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            // getting the password
            if (bcrypt.compareSync(req.body.password, user.password)) {
                    res.send({
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin,
                        token: generateToken(user),
                    })
            } return ;
            
        }
        res.status(401).send({message: "invalid email and or password"})
    }));

export default userRouter;