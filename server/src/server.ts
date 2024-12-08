import express, {Request , Response , NextFunction } from 'express';
import bodyParser from 'body-parser';
//import studentRoutes from './Routes/studentRoutes';
import courseRoutes from './Routes/courseRoutes';
//import gradeRoutes from './Routes/gradeRoutes';
import { connectDB } from './utils/database';
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());




//app.use('/students' , studentRoutes);
app.use('/courses' , courseRoutes);
//app.use('/grades' , gradeRoutes);



connectDB().then(() => {
  app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
  });
}).catch((error) => {
  console.error('Unable to connect to the database',error);
});
