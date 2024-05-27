export default function validate2(gen){
    const errors2 = {};
    
    var g = Object.values(gen);
    if(g.filter(la => la !== "no").length === 0) errors2.generos = "El juego ha de tener al menos 1 género";

    return errors2;
}