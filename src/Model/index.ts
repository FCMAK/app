import { SModel } from "servisofts-model";
import Usuario from "servisofts-rn-usuario";
import Roles_permisos from "servisofts-rn-roles_permisos";

import { STheme } from "servisofts-component";

import kolping from "./kolping";
import notification from "./notification";
import Geolocation from "servisofts-rn-geolocation"

const Model = {
    ...Usuario.Model,
    ...Roles_permisos.Model,
    ...kolping,
    ...notification,
    ...Geolocation.Model,

}

Usuario.init({
    cabecera: "usuario_app",
    Columns: {
        "key": { type: "text", pk: true },
        "Nombres": { type: "text", notNull: true, editable: true },
        "Apellidos": { type: "text", notNull: true, editable: true },
        "CI": { type: "text", notNull: true, editable: true },
        "Correo": { type: "text", notNull: true, editable: true },
        "Telefono": { type: "text", editable: true },
        "Password": { type: "text", notNull: true, editable: true },
        "direccion": { type: "text", notNull: true, editable: true },
        "latitude": { type: "text", notNull: true, editable: true },
        "longitude": { type: "text", notNull: true, editable: true },
    },
});
Roles_permisos.init({
    modelusuario: Model.usuario,
});



export default {
    ...Model,
    ...SModel.declare(Model)
}