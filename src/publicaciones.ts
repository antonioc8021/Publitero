type Publicacion = {
    autor: string
    texto: string
}

class Publicaciones {
    // atributos:
    private datos: Publicacion[] = [];


    constructor() {
    }

    crearPublicación(autor: string, texto: string) {
        // cuando puseo, como estoy metiendolo en un objeto literal lo que debo de hacer es realizar un objeto literal
        const nuevaPublicacion = { autor, texto };
        this.datos.push(nuevaPublicacion);
    }

    actualizarPublicacion(id: number, textoNuevo: string) {
        this.datos[id].texto = textoNuevo;
    }

    borrarPublicacion(id: number) {
        this.datos.splice(id, 1);
    }

    mostrarPorID(publicacion: number): Publicacion {
        return this.datos[publicacion];
    }

    mostrarTodo(): Publicacion[] {
        return this.datos;
    }
}

export default Publicaciones;