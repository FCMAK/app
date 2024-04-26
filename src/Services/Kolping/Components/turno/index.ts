//  COMPONENT CONFIG
const component = "turno"; // COMPONENT NAME 
const version = "1.0";
const PKey = "smtur_ntur";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Lista from "./Pages/Lista";
import Registro from "./Pages/Registro";



//alvaro
export default {
    component,
    version,
    Actions,
    PKey,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        //el component cuando paso un dato
        // [component]: Lista,
        ["admin/" + component]: Lista,
        [component + "/registro"]: Registro,
        [component + "/lista"]: Lista,
    }
}