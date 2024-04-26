//  COMPONENT CONFIG
const component = "categoria_farmacia"; // COMPONENT NAME 
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Component from "./Component";
import Lista from "./Pages/Lista";
import Registro from "./Pages/Registro";
import Select from "./Pages/Select";


//alvaro
export default {
    component,
    version,
    Actions,
    ...Component,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        //el component cuando paso un dato
        ["admin/" + component]: Lista,
        [component + "/registro"]: Registro,
        [component + "/lista"]: Lista,
        [component + "/select"]: Select,

    }
}