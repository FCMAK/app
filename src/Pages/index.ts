import { SPage, SPageListProps } from 'servisofts-component'
import Services from '../Services';
import Home from './Home';
import Carga from './Carga';
import Ajustes from './Ajustes';
import Kolping from './Kolping';
import Inicio from './Inicio';
import Test from './Test';
import Administracion from './Administracion';
import LA from './LA';
import TerminosCondiciones from '../Pages/TerminosCondiciones';
import inDevelop from './inDevelop';
import CameraComponent from '../Components/CameraComponent';
import notification from './notification';

import login from './login';
import registro from './registro';
// import perfil from './perfil';
import test2 from './test2';
import paciente from './paciente';
import ficha from './ficha';
// const NewPages = SPage.combinePages("/", {
//     ...notification,
// })

const newPages = SPage.combinePages("/", {
    // "": root,
    ...ficha,
    ...paciente
});

const Pages: SPageListProps = {
    // ...NewPages,
    "/": Inicio,
    "carga": Carga,
    "home": Home,
    "ajustes": Ajustes,
    "kolping": Kolping,
    "test": Test,
    "admin": Administracion,
    "la": LA,
    "terminos": TerminosCondiciones,
    "inDevelop": inDevelop,
    "camara": CameraComponent,
    test2,
    ...Services.Pages,

    ...notification,
    ...login,
    ...registro,
    ...newPages
    // ...perfil

}

export default Pages;