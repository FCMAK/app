import { SPage } from 'servisofts-component';


import root from './root';
import buscar from "./buscar"
import noencontrado from './noencontrado';
import registro from './registro';
import registro2 from './registro2';
import genero from './genero';
import direccion from './direccion';
export const Parent = {
    name: "paciente",
    path: "/paciente",
}
export default SPage.combinePages(Parent.name, {
    // "": root,
    "": root,
    buscar,
    noencontrado,
    registro,
    registro2,
    genero,
    direccion
});