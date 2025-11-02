import express from "express";
import userRoutes from './routes/userRoutes.js';
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        status:'success',
        data: 'welcome to server'
    })
});

app.use(userRoutes); // route lai import gareko ho and route lai kaam garaunu ko use bhaye ko xha
app.listen(port, () => {
    console.log('server is running ');
});


