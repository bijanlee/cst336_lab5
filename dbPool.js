const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "hj4cs76uiuc17hjj",
    password: "epcy3tmj2v1jqque",
    database: "b8fkkkyvt2rsnh2p"
});

module.exports = pool;
