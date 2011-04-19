$(document).ready(function() {  
  
  // Create SocketIO instance, connect
  var socket = new io.Socket('localhost',{
    port: 9346
  });
  socket.connect(); 
  
  // Add a connect listener
  socket.on('connect',function() {
    $('#msgs').prepend('<p>Client has connected to the server!</p>');
  });
  // Add a connect listener
  socket.on('message',function(data) {
    $('#msgs').prepend('<p>' + data + '</p>');
  });
  // Add a disconnect listener
  socket.on('disconnect',function() {
    $('#msgs').prepend('<p>The client has disconnected!</p>');
  });
  
  // Sends a message to the server via sockets
  function sendMessageToServer(message) {
    socket.send(message);
  }
  
  $('#msg').keypress(function(event) {
    if (event.keyCode == '13') {
      sendMessageToServer(this.value);
      event.preventDefault();
    }
  });
  
  $('#disconnect').click(function(event) {
      socket.disconnect();
  });
});

