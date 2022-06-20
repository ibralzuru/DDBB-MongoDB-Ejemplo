const express = require('express'); // almaceno en la variable express
require('dotenv').config(); // para q funcione dotenv
const db = require('./config/database') // requiero el fichero de config/database.js donde tengo mongoose

const app = express(); //ejecuto a expresss


const port = process.env.PORT || 4000; // Creo variable que va a usar mi servidor


//routes
app.get('/' , (req,res) => {   // Primera ruta creada 
    return res.send('Bienvenidos a mi aplicacion de tareas')
});


db().then(() => {// Ejecuto db para que funcione database.js
//Levanto el sv ene l puerto indicado.
app.listen(port, () => {   // como primer argumento le paso el puerto de la app
    console.log('server is running: ' + port);
}) 
}) 
.catch((error) => {
    console.log("error connecting to mongoDB ", error)
})



// (node index.js en terminal para comprobar que hasta aqui funciona)