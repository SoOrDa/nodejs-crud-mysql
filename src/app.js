const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

// IMPORTING ROUTES
const customerRoutes = require('./routes/customer');
const { urlencoded } = require('express');
// SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs'); //Definir ejs como motor de plantillas
app.set('views', path.join(__dirname, 'views')); // Definir la ubicacion de nuestras vistas

// MIDDLEWARES
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3308, //mysql -> 3008 mariadb ->3306 cuidado!
    database: 'crudnodejsmysql'
}, 'single'));

app.use(express.urlencoded({extended: false}));
//  ROUTES
app.use('/', customerRoutes);

//  STATIC FIELS
app.use(express.static(path.join(__dirname, 'public')));
//  
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});