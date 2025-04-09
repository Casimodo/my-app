// Point d'entrée principal
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const http = require('http');
const path = require('path');
const helmet = require('helmet');
const socketIo = require('socket.io');
const authRoutes = require('./routes/auth');
const indexRoutes = require('./routes/index');
const debugRoutes = require('./routes/debug');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(helmet());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/debug', debugRoutes);

io.on('connection', (socket) => {
  console.log('Socket connecté :', socket.id);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});