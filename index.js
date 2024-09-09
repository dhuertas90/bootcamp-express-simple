const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

/*
Tanto app.use y app.get están diseñados para manejar la misma ruta (/), 
pero los archivos estáticos tienen prioridad. 
Si quitas el archivo index.html, entonces el código app.get('/', ...) 
se ejecutaría y mostraría '¡Hola, mundo!'.

Esto sucede con las demas url-archivos.html
*/ 

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

app.get('/about', (req, res) => {
    res.send('Acerca de nosotros');
});

app.get('/contact', (req, res) => {
    res.send('Contacto');
});
