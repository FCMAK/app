//  COMPONENT CONFIG
const component = "cotizacion_farmacia"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Lista from "./Pages/Lista";
import Registro from "./Pages/Registro";
import Perfil from "./Pages/Perfil";
import Home from "./Pages/Home";
import ListaCotizacion from "./Pages/ListaCotizacion";
import MensajeCotizacionVacio from "./Pages/MensajeCotizacionVacio";
// import Camara from "./Pages/Camara";

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
        // ["admin/" + component]: Lista,
        [component + "/registro"]: Registro,
        ["admin/" + component + "/perfil"]: Perfil,
        // ["admin/" + component + "/lista"]: Lista,
        [component + "/listaCotizada"]: ListaCotizacion,
        [component + "/vacia"]: MensajeCotizacionVacio,
        // [component + "/camara"]: Camara,


        MensajeCotizacionVacio

    }
}