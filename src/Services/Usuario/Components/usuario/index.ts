//  COMPONENT CONFIG
const component = "usuario"; // COMPONENT NAME 
const version = "2.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";

import Lista from "./Pages/Lista";
// import Registro from "./Pages/Registro";
// import RecuperarPass from "./Pages/RecuperarPass";
// import CodigoRecuperarPass from "./Pages/CodigoRecuperarPass";
// import NuevoPass from "./Pages/NuevoPass";
// import TipoUsuario from "./Pages/TipoUsuario";
// import Login from "./Pages/Login";
import Editar from "./Pages/EditarUsuario";
import Perfil from "./Pages/Perfil";
import Eliminar from "./Pages/Perfil/eliminar";
import Changepass from "./Pages/Perfil/changepass";
import RolUsr from "./Pages/RolUsr";
import select from "./Pages/select";
//alvaro

// export const Parent = {
//     name: "usuario",
//     path: `/usuario`,
//     model
// } 

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        ["admin/"+component]: Lista,
        // [component + "/registro"]: Registro,
        // [component + "/recuperarContrasena"]: RecuperarPass,
        // [component + "/codigoRecuperarContrasena"]: CodigoRecuperarPass,
        // [component + "/nuevaContrasena"]: NuevoPass,
        [component + "/rol"]: RolUsr,
        "perfil": Perfil,
        "perfil/eliminar": Eliminar,
        "perfil/changepass": Changepass,
        // "login":Login,
        "editar": Editar,

        [component + "/select"]: select,
    }
}