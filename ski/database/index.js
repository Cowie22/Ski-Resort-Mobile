const mysql = require('mysql2/promise');
const config = require('./config.js');

const pool = mysql.createPool(config)

// gets all runs from database using async and await
async function getAllRuns() {
  const queryStr = 'SELECT * FROM runs';
  const result = await pool.query(queryStr);
  return result;
};

// gets all lifts from database using async and await
async function getAllLifts() {
  const queryStr = 'SELECT * FROM lifts';
  const result = await pool.query(queryStr);
  return result;
};

module.exports = {
  getAllRuns, getAllLifts
}