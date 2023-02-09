const express = require('express');
const mysql = require('mysql2');
const consoleTable = require('console.table');
const runPrompts = require("./utils/prompts");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

runPrompts();

// default response
app.use((req, res) => {
    res.status(404).end();
});

// listening
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});