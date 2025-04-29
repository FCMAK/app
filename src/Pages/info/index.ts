import { SPage } from 'servisofts-component';


import especialidades from './especialidades';
import medicos from './medicos';
import horarios from './horarios';

export const Parent = {
    name: "info",
    path: "/info",
}
export default SPage.combinePages(Parent.name, {
    // "": root,
    especialidades,
    medicos,
    horarios,

});