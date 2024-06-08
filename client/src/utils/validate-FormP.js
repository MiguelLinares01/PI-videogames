export default function validate(input){
    const errors = {};
    const carEsp = /[!¡{}@#$%^&*.,<>/\\'\";?¿]/;

    if(!input.nombre.length) errors.nombre = "El juego requiere de un nombre";
    if(input.nombre.length){
        if(carEsp.test(input.nombre)) errors.nombre = "El nombre del juego no puede andar con carácteres especiales";
    }

    if(!input.descripcion.length) errors.descripcion = "El juego necesita una descripción";

    if(!input.imagen.length) errors.imagen = "El juego debe de tener una imagen";

    if(!input.lanzamiento.length) errors.lanzamiento = "El juego tiene que tener una fecha de lanzamiento";

    if(input.rating){
        if(input.rating < 1 || input.rating > 5){
            errors.rating = "El rating es de 1 a 5";
        }
    }

    return errors;
}