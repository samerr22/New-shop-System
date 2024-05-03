import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import beauty from './routes/Beauty.route.js';
import book from './routes/bookshop.route.js';
import cloth from './routes/cloth.route.js';
import product from './routes/product.rotue.js';
dotenv.config();



import cookieParser from 'cookie-parser';

dotenv.config();






mongoose.connect(process.env.MONGO).then(() => {
    console.log('is connected');
})
.catch((err) => {
    console.log(err);
})

const app = express();


app.use(express.json());
app.use(cookieParser());


app.listen(3000, ()=> {
    console.log('Server listening on port 3000');
});

app.use('/api/beauty', beauty);
app.use('/api/book', book);
app.use('/api/cloth', cloth);
app.use('/api/product', product);


app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})