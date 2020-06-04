// query database

const express  = require("express");
const Route = express.Router();
const mysqlConnection = require('../connection')

Route.get("/",(req,res)=>{
   mysqlConnection.query("SELECT * from nodejs.express_coba",(err,rows, fields)=>{
      if(!err){
         // res.send(rows);
         res.send(fields);
      }
      else{
         console.log(err);
      }
   })
})
module.exports =Route;