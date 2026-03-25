import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/userRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app=express();


app.use(express.json());
app.use(cors());
app.use(userRoutes);

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log('connected to db'))
.catch(err=>console.log(err));

app.listen(8080,()=>{
    console.log('server is listening on port');
})