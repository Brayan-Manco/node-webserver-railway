const express = require('express');
const app = express()
require('dotenv').config();

const port = process.env.PORT;

app.set('view engine', 'hbs');

//handlebars
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');


//esta es la forma de renderizar la paginas utilizando handlebars hbs
app.get('/', (req, res) =>{
    res.render('home', {
        nombre: 'Brayan',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) =>{
    res.render('elements', {
        nombre: 'Brayan',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) =>{
    res.render('generic', {
        nombre: 'Brayan',
        titulo: 'Curso de Node'
    })
})


//servir contenido estatico
app.use( express.static('public') )
//al servir el express.static se sirve le index y no se devuelve las paginas
// app.get('/', (req, res) =>{
//     res.send('Hello works')
// })

//pero si se llama la ruta lo mostrara y se envia el html
app.get('/elements', (req, res) =>{
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('/generic', (req, res) =>{
    res.sendFile(__dirname + '/public/generic.html')
})


//cualquier ruta que no existe le manda este pagina
app.get('*', (req, res) =>{
    // res.send('404 | Pagina no encontrada')
    res.sendFile(__dirname + '/public/404.html')
    //se le pasa en path
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })