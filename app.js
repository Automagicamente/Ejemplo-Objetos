const Manija = require("./Manija");
const Persona = require("./Persona");
const Puerta = require("./Puerta");


const unaPersona = new Persona();
const unaManija = new Manija();
const otraManija = new Manija();
const unaPuerta = new Puerta(unaManija);

unaPersona.usar(unaManija);
/* unaPersona.bajarManijaDe(unaPuerta); */
unaPersona.abrir(unaPuerta);