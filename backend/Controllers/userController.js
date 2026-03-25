import User from "../Model/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup=async (req,res)=>{
try{
const {name,email,password}=req.body;
if(!name || !email ||!password){
    return res.status(400).json({message:"Some fields are missing"});
}

const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

const hashedPassword=await bcrypt.hash(password,10);
const user=new User({
    name,email,password:hashedPassword
});

const token=jwt.sign(
{id:user._id},
process.env.SECRET_KEY,
{expiresIn:'1d'}
)

await user.save();

res.status(201).json({message:"User rgistered successfully",token});
}catch(err){
return res.status(500).json({message:err.message})
}
}

export const login=async(req,res)=>{
try{
const {email,password}=req.body;

if(!email || !password){
 return res.status(400).json({message:"Some fields are missing"});
}

const user=await User.findOne({email});

if(!user){
    return res.status(404).json({message:'User not found'})
}

const matchPassword=await bcrypt.compare(password,user.password);

if(!matchPassword){
    return res.json({message:"Invalid password"});
}

const token=jwt.sign(
{id:user._id},
process.env.SECRET_KEY,
{expiresIn:'1d'}
)

return res.status(200).json({message:"User login successfully",token});
}catch(err){
return res.status(500).json({message:err.message})
}
}