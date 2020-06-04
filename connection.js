// koneksi ke database

const msql = require('mysql');

var mysqlConection = msql.createConnection({
   host  : "localhost",
   user  : "root",
   password : "danuandrean69",
   database : "nodejs",
   multipleStatements :true,
});

mysqlConection.connect((err)=>{
   if(!err){
      console.log("connected");
   }
   else{
      console.log("connection failed");
   }
});
module.exports = mysqlConection;