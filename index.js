const express = require('express'); // almaceno en la variable express

const app = express(); //llamo a express 


//routes
app.get('/' , (req,res) => {   // Primera ruta creada 
    return res.send('Bienvenidos a mi aplicacion de tareas')
});

app.listen(3000, () => {   // como primer argumento le paso el puerto de la app
    console.log('server is running');
}) 

// (node index.js en terminal para comprobar que hasta aqui funciona)