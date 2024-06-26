"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.executeQuery = exports.db = void 0;
// import mysql from 'mysql2/promise';
const mysql_1 = require("mysql");
exports.db = ({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Student-Management-system',
});
const pool = (0, mysql_1.createPool)(exports.db);
const executeQuery = async (query, params) => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (err, rows) => {
            if (err) {
                console.log(`Error executing query: ${err}`);
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
};
exports.executeQuery = executeQuery;
const connectDB = async () => {
    try {
        pool.getConnection((err, connection) => {
            if (err) {
                console.error('Unable to connect to the MySQL database:', err);
                throw err;
            }
            console.log("Connected to the MySQL database");
            connection.release();
        });
    }
    catch (error) {
        console.error('Unable to connect to the MySQL database:', error);
        throw error;
    }
};
exports.connectDB = connectDB;
