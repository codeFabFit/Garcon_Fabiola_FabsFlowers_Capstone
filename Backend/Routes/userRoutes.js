import express from 'express';
import User from '../Models/userModel';
import bcrypt from 'bcrypt.js'

const useRouter = express.Router();

userRouter.post(
    '/signin', 
    expressAsyncHandler(async (req, res) =>{
        const user = await User.findOne({ email: req.body.email});
        if (user) {
            // getting the password
            if (bcrypt.compareSync(req.body.password, user.password)) {
                    res.send({
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin,
                    })
            }
        }
        res.status(401).send({message: "invalid emaild and or password"})
    })
)