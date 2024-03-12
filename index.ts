import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import articleController from "./controllers/articleContoller";
import commentController from "./controllers/commentController";
import bodyParser from 'body-parser';

mongoose.connect("mongodb+srv://kevinvorsmann:qwerty1@cluster0.d40x17p.mongodb.net/");
const database = mongoose.connection;

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', articleController);
app.use('/', commentController);


database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Database Connected');
});

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});
