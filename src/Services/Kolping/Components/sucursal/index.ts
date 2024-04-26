//  COMPONENT CONFIG
const component = "sucursal"; // COMPONENT NAME 
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Components from "./Components";
import Lista from "./Pages/Lista";
import Registro from "./Pages/Registro";
import mapa from "./Pages/mapa";


//alvaro
export default {
    component,
    version,
    Actions,
    ...Components,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        //el component cuando paso un dato
        ["admin/"+component]: Lista,
        [component + "/registro"]: Registro,
        [component + "/lista"]: Lista,
        [component + "/mapa"]: mapa,
    }
}