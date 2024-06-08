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
import PacienteBuscar from "./Pages/PacienteBuscar";

import AgendaFichas from "./Pages/AgendaFichas";
import AgendaPacientes from "./Pages/AgendaPacientes";

import Components from "./Components";




//alvaro
export default {
    component,
    version,
    ...Components,
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
       [component + "/paciente/buscar"]: PacienteBuscar,

       [component + "/agenda"]: AgendaFichas,
       [component + "/agendaPacientes"]: AgendaPacientes,
    }
}