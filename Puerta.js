class Puerta{
    #manija = "def manija";

    constructor(unaManija){
        this.#manija = unaManija;
    }

    /**
     * Se acciona el intentar abrir la puerta
     * @returns true si abre la puerta y false caso contrario
     */
    serAbiertaPor(){
        return this.#manija.estaAbajo();
    }

    /**
     * Baja la manija de la puerta
     */
    bajarManija(){
        this.#manija.bajar();
    }
}


module.exports = Puerta;