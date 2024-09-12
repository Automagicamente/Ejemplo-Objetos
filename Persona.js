const Manija = require("./Manija");
const Puerta = require("./Puerta");

class Persona{

    /**
     * Intenta abrir una puerta
     * @param {Puerta} unaPuerta a abrir
     */
    abrir(unaPuerta){
        console.log("Iniciando el abrir puerta");
        if (unaPuerta.serAbiertaPor(this)) {
            console.log("Abri la puerta! :D");
        }else{
            console.log("No abre! :(");
            
        }
    }


    /** 
     * Baja la manija de una puerta
     * @param {Puerta} unaPuerta que contiene la manija a bajar
     */
    bajarManijaDe(unaPuerta){
        console.log("Iniciando bajar manija");
        //POSIBLE COMPORTAMIENTO A DESCARTAR
        unaPuerta.bajarManija();
    }

    /**
     * Usa algo
     * @param {Manija} algo a ser usado
     */
    usar(algo){
        console.log("Intentando usar algo");
        algo.serUsado();
    }
}


module.exports = Persona;