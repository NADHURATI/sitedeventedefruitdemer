const express = require("express");
const axios = require('axios').defaults;

const mysql = require('mysql2')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "Saindoumy15@e",
port:3306,
database:"fruit_de_mer" 
})

module.exports = db;

