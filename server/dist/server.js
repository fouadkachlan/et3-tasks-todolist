"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
//import studentRoutes from './Routes/studentRoutes';
const courseRoutes_1 = __importDefault(require("./Routes/courseRoutes"));
//import gradeRoutes from './Routes/gradeRoutes';
const database_1 = require("./utils/database");
const cors = require('cors');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(body_parser_1.default.json());
//app.use('/students' , studentRoutes);
app.use('/courses', courseRoutes_1.default);
//app.use('/grades' , gradeRoutes);
(0, database_1.connectDB)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Unable to connect to the database', error);
});
