import { SPage } from 'servisofts-component';


import root from './root';
import horarios from './horarios';
import medicos from './medicos';
import servicios from './servicios';
import orden from "./orden"
import confirmar from './confirmar';
import historico from './historico'
import pago from './pago';
export const Parent = {
    name: "ficha",
    path: "/ficha",
}
export default SPage.combinePages(Parent.name, {
    // "": root,
    "": root,
    pago,
    medicos,
    horarios,
    servicios,
    orden,
    confirmar,
    historico


});