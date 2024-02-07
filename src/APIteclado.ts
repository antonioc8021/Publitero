import promptSync from 'prompt-sync';
import Publicaciones from './publicaciones';

/**
 * {
 * autor: string
 * texto: string
 * }
 * 
 * Crear publicación
 * Leer todas
 * Leer por ID
 * TODO: Actualizar por ID
 * TODO: Borrar por ID
 */

let funcionar = true;
const redSocial = new Publicaciones();
const teclado = promptSync();

while (funcionar) {

    const opcion = teclado("Introduce una opción:\n1ª: Crear una publicación.\n2º: Leer todas las publicaciones.\n3º: Introduce el ID de la publicación que quieras leer.\n4º: Modificar una publicación. \n5º: Eliminar una publicación.\n6ºOtra tecla para cerrar.\n");


    /*  
    * Crear publicación
     * Leer todas
     * Leer por ID
     * Actualizar por ID
     * Borrar por ID */
    switch (opcion) {
        case '1':
            const autor = teclado("Introduzca el nombre del autor: ");
            const textoNuevo = teclado("Introduce el texto: ")
            redSocial.crearPublicación(autor, textoNuevo);
            break;

        case '2':
            const almacenaTodo = redSocial.mostrarTodo();
            for (let i = 0; i < almacenaTodo.length; i++) {
                console.log(`id:${i}\nAutor: ${almacenaTodo[i].autor},\n${almacenaTodo[i].texto}\n`);
            } break;

        case '3':
            const ver = teclado("Introduce el id del mensaje que desea ver: ");
            const almacenaUno = redSocial.mostrarPorID(parseInt(ver));
            console.log(`Autor: ${almacenaUno.autor},\n${almacenaUno.texto}`);
            break;

        case '4':
            const actualizar = teclado("Introduce el id del mensaje que desea ver: ");
            const textoActualizar = teclado("Introduce el texto que desea actualizar");
            redSocial.actualizarPublicacion(parseInt(actualizar), textoActualizar);
            break;

        case '5':
            const borrar = teclado("Introduce el id del mensaje que desea borrar: ");
            redSocial.borrarPublicacion(parseInt(borrar));
            break;

        default: funcionar = false;
    }
}






