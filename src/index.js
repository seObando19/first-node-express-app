const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//configuracon para usr en vez de motores de plantilla html
app.engine('html', require('ejs').renderFile);

//middlewares

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//listennig the server
app.listen(app.get('port'), () =>{
    console.log('Server on port: ', app.get('port'));
});