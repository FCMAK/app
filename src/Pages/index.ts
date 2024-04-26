import { SPageListProps } from 'servisofts-component'

import InicioPage from "./InicioPage";
import CargaPage from './CargaPage/index';
import Presentacion from './Presentacion';

import Usuario from './Usuario';
import SSRolesPermisosPages from '../SSRolesPermisos/Pages';
import RolesPermisosReducer from '../SSRolesPermisos/Reducer'

import AjustesPage from './AjustesPage';
import Sucursal from './Sucursal';
import Servicio from './Servicio';
import Test from './test';
import Prueba from './prueba';
import TipoUsuario from './TipoUsuario';
import TerminosCondiciones from './TerminosCondiciones';
import ResetEnviado from './ResetEnviado';
import InicioCliente from './InicioCliente';
import Notificaciones from './Notificaciones';
import Servicios from './Servicios';

const Pages: SPageListProps = {
    "inicio": InicioPage,
    "carga": CargaPage,
    "presentacion": Presentacion,
    AjustesPage,
    ...Usuario.Pages,
    ...Sucursal.Pages,
    ...SSRolesPermisosPages,
    ...Servicio.Pages,
    "test": Test,
    "prueba": Prueba,
    "tipoUsuario": TipoUsuario,
    "terminoscondiciones": TerminosCondiciones,
    "resetenviado": ResetEnviado,
    "inicioCliente": InicioCliente,
    "Notificaciones": Notificaciones,
    "Servicios": Servicios


}
export const Reducer = {
    ...Usuario.Reducers,
    ...Sucursal.Reducers,
    ...RolesPermisosReducer,
    ...Servicio.Reducers,

}

export default Pages;