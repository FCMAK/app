//  COMPONENT CONFIG
const component = "ficha"; // COMPONENT NAME 
const version = "1.0";
// ---------------------------------------
import Inicio from "./Pages/Inicio";
import Centros from "./Pages/ListaCentros";
import ListaEspecialidad from "./Pages/ListaEspecialidad";
import ListaDoctores from "./Pages/ListaDoctores";
import HorarioDoctor from "./Pages/HorarioDoctor";
import Confirmacion from "./Pages/Confirmacion";
import Pago from "./Pages/Pago";
import MensajePago from "./Pages/MensajePago";
import Paciente from "./Pages/Paciente";

import AgendaFichas from "./Pages/AgendaFichas";
import AgendaPacientes from "./Pages/AgendaPacientes";



//alvaro
export default {
    component,
    version,
   // Actions,
    // Reducers: {
    //     [component + 'Reducer']: Reducer
    // },
    Pages: {
        //el component cuando paso un dato
       // [component]: Lista,
       [component ]: Centros,
       [component + "/opciones"]: Inicio,
       [component + "/listaEspecialidad"]: ListaEspecialidad,
       [component + "/listaDoctores"]: ListaDoctores,
       [component + "/horarios"]: HorarioDoctor,
       [component + "/confirmacion"]: Confirmacion,
       [component + "/pago"]: Pago,
       [component + "/mensaje"]: MensajePago,
       [component + "/paciente"]: Paciente,

       [component + "/agenda"]: AgendaFichas,
       [component + "/agendaPacientes"]: AgendaPacientes,
    }
}