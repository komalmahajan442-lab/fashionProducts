import jwt from 'jsonwebtoken'

 const auth=(req,res,next)=>{

    try{
    const authHeader=req.headers.authorization;

    if(!authHeader){
        return res.json({message:'token not found'})
    }

const token=authHeader.split(' ')[1];
if(!token){
    return res.json({message:"Invalid token format"});
}

const decode=jwt.verify(token,process.env.SECRET_KEY);

req.user=decode;

next();
    }catch(err){
return res.status(401).json({message:err.message})
}
}

export default auth;