const express = require('express'); // almaceno en la variable express

const mongoose = require('mongoose') // para q funcione mongoose

require('dotenv').config(); // para q funcione dotenv


const app = express(); //llamo a express 


const port = process.env.PORT || 4000;


//routes
app.get('/' , (req,res) => {   // Primera ruta creada 
    return res.send('Bienvenidos a mi aplicacion de tareas')
});


//connection to MONGODB

mongoose.connect(process.env.MONGO_URI) //esto lo que me devuelve es una promesa y la uso con .then o .catch (/test es lo que voy a atacar en mi base de datos puedo cambiarla)
.then(() => {
    console.log('Connection stablished')
})
.catch((error) => {
    console.log('Error connection to MongoDB',error)
})


app.listen(port, () => {   // como primer argumento le paso el puerto de la app
    console.log('server is running: ' + port);
}) 

// (node index.js en terminal para comprobar que hasta aqui funciona)