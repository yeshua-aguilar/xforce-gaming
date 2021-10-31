'use strict'  

//REQUIRES
var mongoose = require('mongoose');   
var app = require('./app');   //IMPORTAMOS EL ARCHIVO APP

// PUERTO SERVIDOR
var port = process.env.port || 3999;

mongoose.Promise = global.Promise;  
mongoose.connect('mongodb+srv://grupo3:grupo3@cluster0.ksqs0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true }) 
    .then(
        () => { 
            console.log('La conexion a la bd es correcta');
            // CREAR EL SERVIDOR 
            app.listen(port,()=>{
                console.log('El sevidor http://localhost:3999 esta funcionando.');
            });
        }
    )
.catch(error => console.log(error));