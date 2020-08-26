const http = require('http');
const debug = require('debug')("node-angular");
const app = require('./restapi/app');
const io = require('./socket');

const normalizePort = val => {
  var port = parseInt(val,10);

  if(isNaN(port)) {
    return val;
  }

  if(port>=0) {
    return port;
  }

  return false;
};

const onError = error => {
  if(error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof addr == "string" ? "pipe" + addr : "port" + port;
  switch(error.code) {
    case "EACCES":
      console.error(bind + "requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + "is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
  debug("Listening on "+bind);
};

const port = normalizePort(process.env.PORT || "3000");

app.set('port',port);
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);

io.init(server);
const socket = io.getIO();

socket.on('connection', (socket) => {
  console.log('Connected!!!');

  socket.on('addDelivery', (message) => {
    //socket.emit('delivery', (message.message));
    socket.broadcast.emit('delivery', ({title: 'Nowa Dostawa', content: '25'}));
  })
})

server.listen(port)


