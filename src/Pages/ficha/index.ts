import { SPage } from 'servisofts-component';

import root from './root';
import horarios from './horarios';
import medicos from './medicos';
import servicios from './servicios';
import orden from "./orden"
import confirmar from './confirmar';
import historico from './historico'
import historico_kolping from './historico_kolping'
import pago from './pago';
import pago_kolping from './pago_kolping';
import pago_nulo from './pago_nulo';

import qr from './qr';
import qr_kolping from './qr_kolping';
import mensajeSinFicha from './mensajeSinFicha';
import opciones from "./opciones";
import especialidades from './especialidades';
export const Parent = {
    name: "ficha",
    path: "/ficha",
}
export default SPage.combinePages(Parent.name, {
    // "": root,
    "": root,
    pago,
    pago_kolping,
    pago_nulo,
    qr,
    qr_kolping,
    medicos,
    horarios,
    servicios,
    orden,
    confirmar,
    historico,
    historico_kolping,
    mensajeSinFicha,
    opciones,
    especialidades

});