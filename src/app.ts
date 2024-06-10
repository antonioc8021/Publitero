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

app.put('/publicacion/:id', (req, res) => {
    const id = req.params.id;
    const textoNuevo = req.body.texto;

    try {
        redSocial.actualizarPublicacion(parseInt(id), textoNuevo);
        res.status(200).send();
    } catch (error) {
        res.status(404).send({ error: 'Publicación no encontrada' });
    }
});

app.delete('/publicacion/:id', (req, res) => {
    const id = req.params.id;

    try {
        redSocial.borrarPublicacion(parseInt(id));
        res.status(204).send();
    } catch (error) {
        res.status(404).send({ error: 'Publicación no encontrada' });
    }
});


app.listen(puerto, () => {
    console.log('Estamos activos papá');
});