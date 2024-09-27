import { SPage } from 'servisofts-component';


import root from './root';
import horarios from './horarios';
import medicos from './medicos';
export const Parent = {
    name: "ficha",
    path: "/ficha",
}
export default SPage.combinePages(Parent.name, {
    // "": root,
    "": root,
    medicos,
    horarios

});