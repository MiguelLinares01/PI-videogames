export default function validate3(platt){
    const errors3 = {};
    
    var p = Object.values(platt);
    if(p.filter(la => la !== "no").length === 0) errors3.plataformas = "El juego se puede jugar en algún lado";

    return errors3;
}