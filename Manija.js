class Manija{
    #estaAbajo=false;

    /**
     * Devuelve el estado de la manija
     * @returns true si esta abajo y false caso contrario
     */
    estaAbajo(){
        return this.#estaAbajo;
    }

    /**
     * Baja la manija
     */
    bajar(){
        this.#estaAbajo=true;
    }

    /**
     * Acciona el ser usado
     */
    serUsado(){
        this.bajar();
    }
}


module.exports = Manija;