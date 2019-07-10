const mysql = require('mysql2/promise');
const config = require('./config.js');

const pool = mysql.createPool(config)

// Gets all runs from database using async and await
async function getAllRuns() {
  const queryStr = 'SELECT * FROM runs';
  const result = await pool.query(queryStr);
  return result;
};

// Gets all lifts from database using async and await
async function getAllLifts() {
  const queryStr = 'SELECT * FROM lifts';
  const result = await pool.query(queryStr);
  return result;
};

// Gets one run from database depending on user click
async function getOneRun(id) {
  const queryStr = `SELECT * FROM runs WHERE id = ${id}`
  const result = await pool.query(queryStr);
  return result;
}

// Gets one place from database depending on user click
async function getOnePlace(id) {
  const queryStr = `SELECT * FROM places WHERE id = ${id}`
  const result = await pool.query(queryStr);
  return result;
}

module.exports = {
  getAllRuns, getAllLifts, getOneRun, getOnePlace
}