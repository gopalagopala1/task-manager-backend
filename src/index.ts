import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import errorHandler from './middleware/error';

// for accessing the environment variables
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

//TODO: have to figure out more cors configuration
app.use(cors());
//TODO: have to check how exactly the json payloads are parsed
// How they look before and after parsing
app.use(express.json()); // parsing this incoming requests with json payloads

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
