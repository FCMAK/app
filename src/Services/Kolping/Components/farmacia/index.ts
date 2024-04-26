//  COMPONENT CONFIG
const component = "farmacia"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import carritoReducer from "./carritoReducer";
import Lista from "./Pages/Lista";
import Registro from "./Pages/Registro";
import Catalogo from "./Pages/Catalogo";
import Carrito from "./Pages/Carrito";
import MensajeCarritoVacio from "./Pages/MensajeCarritoVacio";
import AgregarCarrito from "./Pages/AgregarCarrito";
import CategoriaFiltro from "./Pages/CategoriaFiltro";


//alvaro farmacia/mensajeCarritoVacio
export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer,
        ['carritoReducer']: carritoReducer
    },
    Pages: {
        //el component cuando paso un dato
        ["admin/" + component]: Lista,
        [component + "/registro"]: Registro,
        [component + "/lista"]: Lista,
        [component + "/agregarCarrito"]: AgregarCarrito,
        [component]: Catalogo,
        [component + "/carrito"]: Carrito,
        [component + "/filtro"]: CategoriaFiltro,
        [component + "/mensajeCarritoVacio"]: MensajeCarritoVacio,



    }
}