import Publicaciones from "./publicaciones";
import express from 'express';

const app = express();
const puerto = 3000;
app.use(express.json());

const redSocial = new Publicaciones();

app.post('/publicacion', (req, res) => {
    const publicacion = req.body;
    const autor = publicacion.autor;
    const textoNuevo = publicacion.texto;
    redSocial.crearPublicación(autor, textoNuevo);
    res.status(201).send();
});

app.get('/publicacion', (req, res) => {
    const almacenaTodo = redSocial.mostrarTodo();
    res.status(200).send(almacenaTodo);
});

app.get('/publicacion/:id', (req, res) => {
    const id = req.params.id;
    const almacenaUno = redSocial.mostrarPorID(parseInt(id));
    res.status(200).send(almacenaUno);
});

app.listen(puerto, () => {
    console.log('Estamos activos papá');
});