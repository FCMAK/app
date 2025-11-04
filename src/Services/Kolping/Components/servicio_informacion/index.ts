//  COMPONENT CONFIG
const component = "servicio_informacion"; // COMPONENT NAME
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
  ["servicio_informacion/registro"]: Registro,
  // [component + "/registro"]: Registro,

  // [component + "/perfil"]: Perfil,
  // ["admin/"+component + "/lista"]: Lista,



 }
}