import express from 'express';
import mongoose from 'mongoose';
import productRoute from './routes/productRoute.js';
const app = express();
const port = 5000;

const db_connect = mongoose.connect('mongodb+srv://Anuj:Anuj2005@anujapi.pcejgp8.mongodb.net/user').then(()=>{
    app.listen(port,()=>{
    console.log('server is running');
})
}).catch((err)=>{
    console.log(err)
})

app.get('/',(req,res)=>{
    return res.status(200).json({
        data:'server is connect'
    })
})

app.use(express.json());
app.use(productRoute)

