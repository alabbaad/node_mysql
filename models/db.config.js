const sql = require('mysql');
let dbname = "portfolio"
const conn = sql.createConnection({
     host: "localhost",
     user: "root",
     password: "alabbaad",
     database: dbname,
     });

     conn.connect(function(err){
        if (err) throw err.code; 
         console.log("Connected successfully");
         
         conn.query("CREATE DATABASE IF NOT EXISTS dbname", (err, result)=>{
         })
         create_table = "CREATE TABLE IF NOT EXISTS customers (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, email varchar(255) NOT NULL, name varchar(255) NOT NULL)"
         conn.query(create_table, (err,result)=>{
             if (err) throw err;
             console.log("Table created")
         })

     });