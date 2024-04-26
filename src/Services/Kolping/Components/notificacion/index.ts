//  COMPONENT CONFIG
const component = "notificacion"; // COMPONENT NAME 
const version = "2.0"; 
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";

import Lista from "./Pages/Lista";
// import Registro from "./Pages/Registro";
import Notificaciones from "./Pages/Notificaciones";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component+"/lista"]: Lista,
        // [component + "/registro"]: Registro,
        [component + "/notificaciones"]: Notificaciones,
        ["notificaciones"]: Notificaciones,

    }
}