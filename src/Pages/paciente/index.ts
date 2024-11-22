import { SPage } from 'servisofts-component';


import root from './root';
import buscar from "./buscar"
import noencontrado from './noencontrado';
import encontrado from './encontrado';
import registro from './registro';
import registro2 from './registro2';
import genero from './genero';
import direccion from './direccion';
import encontrado_multiples from "./encontrado_multiples"
import Inicio, { PacientesInicio } from '../Inicio';
export const Parent = {
    name: "paciente",
    path: "/paciente",
    notifyChange: (change) => {
        console.log("Notificando el cambioo")
        if (root.INSTANCE) root.INSTANCE.componentDidMount()
        if (PacientesInicio.INSTANCE) PacientesInicio.INSTANCE.componentDidMount()
    }
}
export default SPage.combinePages(Parent.name, {
    // "": root,
    "": root,
    buscar,
    noencontrado,
    encontrado,
    registro,
    registro2,
    genero,
    direccion,
    encontrado_multiples
});

