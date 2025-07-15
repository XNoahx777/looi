// server.js
const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 10000;

// Sirve archivos estáticos (tu HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta raíz sirve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Configura eventos Socket.IO aquí (ejemplo)
io.on('connection', (socket) => {
  console.log('Cliente conectado');

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Levanta servidor
server.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
