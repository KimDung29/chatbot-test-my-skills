import express from 'express'
import viewEngine from './config/viewEngine';
import messageRouter from './routes/web';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
// config view engine
viewEngine(app);

// parse request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// init web routes
app.use('/', messageRouter)

const port = process.env.PORT || 8080;
app.listen(port, () => {  
    console.log(`Backend is running at ${port}`)
})