import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import articleController from "./controllers/articleContoller";
import bodyParser from 'body-parser';

mongoose.connect("mongodb+srv://kevinvorsmann:qwerty1@cluster0.d40x17p.mongodb.net/");
const database = mongoose.connection;

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define your routes
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', articleController);

// Database connection handling
database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Database Connected');
});

// Start the server
app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});
