import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import {errorHandler} from '../utils/error.js'
export const signup = async(req, res, next) =>{
   const{username, email, password} = req.body;
   const hashedPassword = bcrypt.hashSync(password,10);
   const user = new User({username, email, password: hashedPassword}); // Use hashed password here
   try{
   await user.save()
   res.status(201).json({message:'User created sucessfully',});
   }catch(error){
    next(error);
   }

}