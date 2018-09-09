/*console.log(__dirname +"../public") ;
const path = require('path') ;
const publicPath = path.join(__dirname ,'../public') ;
console.log(publicPath) ; */
const path = require('path') ;
const publicPath = path.join(__dirname ,'../public') ;
const express = require('express') ;
const port = process.env.PORT|| 3000 ;
var app = express() ;
// to configure te static middleware
app.use(express.static(publicPath)) ;
app.listen(port ,()=>{
    console.log("Server on port 3000") ;
}) ;