import express, {Request , Response , NextFunction } from 'express';
import bodyParser from 'body-parser';
import studentRoutes from "./Controllers/StudentController/index"
import { connectDB } from './utils/database';
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api' , studentRoutes);



connectDB().then(() => {
  app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
  });
}).catch((error) => {
  console.error('Unable to connect to the database',error);
});
