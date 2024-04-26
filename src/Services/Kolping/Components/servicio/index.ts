//  COMPONENT CONFIG
const component = "servicio"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Lista from "./Pages/Lista";
import Detalle from "./Pages/Detalle";


//alvaro
export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        //el component cuando paso un dato
        //["admin/" + component]: Home,
        // ["admin/" + component]: Lista,
        [component + "/lista"]: Lista,
        [component + "/detalle"]: Detalle,



    }
}