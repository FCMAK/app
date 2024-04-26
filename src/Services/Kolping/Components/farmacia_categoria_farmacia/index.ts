//  COMPONENT CONFIG
const component = "farmacia_categoria_farmacia"; // COMPONENT NAME 
const version = "1.0";
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
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        //el component cuando paso un dato
        ["admin/" + component]: Lista,
        [component + "/registro"]: Registro,
        [component + "/lista"]: Lista,
    }
}