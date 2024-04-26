//  COMPONENT CONFIG
const component = "domicilio"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
//import Actions from "./Actions";
//import Reducer from "./Reducer";
//import Lista from "./Pages/Laboratorio";
import Laboratorio from "./Pages/Laboratorio";
import Optica from "./Pages/Optica";
import MensajeProceso from "./Pages/MensajeProceso";
import MensajeCompletado from "./Pages/MensajeCompletado";

import ListaDomicilio from "./Pages/ListaDomicilio";
import DetalleDomicilio from "./Pages/DetalleDomicilio";
import Farmacia from "./Pages/Farmacia";
import request from "./Pages/request";



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
        [component + "/request"]: { component: request, params: ["numero"] },
        [component + "/laboratorio"]: Laboratorio,
        [component + "/optica"]: Optica,
        [component + "/mensajeProceso"]: MensajeProceso,
        [component + "/mensajeCompletado"]: MensajeCompletado,
        [component + "/lista"]: ListaDomicilio,
        [component + "/detalle"]: DetalleDomicilio,
        [component + "/farmacia"]: Farmacia,


    }
}