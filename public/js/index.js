var socket =io() ;
socket.on('connect' ,function(){
          console.log('connected to server') ;
         
}) ;
socket.on('disconnect' ,function(){
        console.log('Disconnected to server') ;
}) ;

socket.on('newMessage' , function(message){
console.log('newmessage' , message) ;
}) ;
socket.emit('createMessage' ,{
    from:'salom' ,
    text:'cool'
}) ;