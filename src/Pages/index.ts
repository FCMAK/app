import { SPageListProps } from 'servisofts-component'
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

 
const Pages: SPageListProps = {
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
    ...Services.Pages,

}

export default Pages;