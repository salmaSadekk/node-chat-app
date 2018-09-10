/*console.log(__dirname +"../public") ;
const path = require('path') ;
const publicPath = path.join(__dirname ,'../public') ;
console.log(publicPath) ; */
const path = require('path') ;
const http = require('http') ;
const publicPath = path.join(__dirname ,'../public') ;
const express = require('express') ;
const socketIO =require('socket.io') ;
const port = process.env.PORT|| 3000 ;
var app = express() ;
var server =http.createServer(app) ;
var io =socketIO(server) ;
// to configure te static middleware
app.use(express.static(publicPath)) ;
io.on('connection' ,(socket)=>{
console.log('new user connected') ;

socket.on('disconnect' ,()=>{
    console.log('Disconnected client') ;
}) ;
socket.emit('newMessage',{
srom:'Salma' ,
text:'ta3bana moot' ,
createdAt:'0000'
} ) ;
socket.on('createMessage' ,(message)=>{
    console.log('message' ,message) ;
    }) ;

}) ;

server.listen(port ,()=>{
    console.log("Server on port 3000") ;
}) ;
