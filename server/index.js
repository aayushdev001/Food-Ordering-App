import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/meals.js'
import mongoose from 'mongoose';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
mongoose.connect("mongodb://localhost:27017/foodOrdersDB");

app.use('/', routes);
app.get('/', (req, res)=>{
    res.send("Hello");
})


app.listen(port, ()=>{
    console.log('listening on port '+port);
})
