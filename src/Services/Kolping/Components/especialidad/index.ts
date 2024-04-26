//  COMPONENT CONFIG
const component = "especialidad"; // COMPONENT NAME 
const version = "1.0";
const PKey = "smtur_cesp";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Lista from "./Pages/Lista";
import Registro from "./Pages/Registro";
import Select from "./Pages/Select";


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
        ["admin/"+component]: Lista,
        [component + "/registro"]: Registro,
        [component + "/lista"]: Lista,
        [component + "/select"]: Select,
    }
}