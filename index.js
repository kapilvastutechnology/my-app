import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
const app = express();
const port = 5000;

app.use(express.json());
app.use(userRoutes);

mongoose.connect('mongodb+srv://Anuj:Anuj2005@anujapi.pcejgp8.mongodb.net/users').then((val)=>{
    app.listen(port, () => {
    console.log(' mongoose connected and  server is running');
});
}).catch((err)=>{
    console.log(err);
})


app.get('/',(req, res)=>{
    return res.status(200).json({
        data: 'welcome to server'
    })
})




