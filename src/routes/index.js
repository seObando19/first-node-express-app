const express = require('express');
const router = express.Router(); //-> modulo router sirve para mantener multiples rutas por separado

router.get('/', (req,res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', {title : 'First website'});
});

router.get('/contact', (req,res) =>{
    res.render('contact.html', {title : 'Contact Page'});
});
module.exports = router;