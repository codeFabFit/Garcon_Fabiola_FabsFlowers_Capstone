import express from 'express';
import User from '../Models/userModel.js';
import bcrypt from 'bcryptjs'
import expressAsyncHandler from 'express-async-handler';
import { isAdmin, generateToken } from '../utils.js';


const userRouter = express.Router();

userRouter.get(
    '/',
    isAdmin,
    expressAsyncHandler(async(req, res) => {
        const user = await User.find({})
        res.send(user)
    })
)

userRouter.post(
    '/signin', 
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        console.log(user)
        if (user) {
            // getting the password
            if (bcrypt.compareSync(req.body.password, user.password)) {
                console.log(user)
                console.log(req.body.email)
                console.log(req.body.password)
                console.log(user.password)


                    res.send({
                        _id: user._id, name: user.name, email: user.email,
                        isAdmin: user.isAdmin,
                        token: generateToken(user),
                    })
            } return ;
            
        }
        res.status(401).send({message: "invalid email and or password"})
    }));

// get post of all signup
    userRouter.post(
        '/signup', 
        expressAsyncHandler(async (req, res) => {
            const user = await new User({ name: req.body.name, email: req.body.email , passwor: bcrypt.hashSync(req.body.password)});
            console.log(user)
            if (user) {
                // getting the password
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    console.log(user)
                    console.log(req.body.email)
                    console.log(req.body.password)
                    console.log(user.password)
    
                        const user = await newUser.save();
                        res.send({
                            _id: user._id, name: user.name, email: user.email,
                            isAdmin: user.isAdmin,
                            token: generateToken(user),
                        })
                } return ;
                
            }
        }));

export default userRouter;