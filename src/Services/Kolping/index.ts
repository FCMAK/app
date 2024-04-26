import { SPageListProps } from 'servisofts-component'
import sucursal from "./Components/sucursal"
import domicilio from "./Components/domicilio"
import ficha from "./Components/ficha"
import notificacion from './Components/notificacion';
import DBF from './Components/DBF';
import medico from './Components/medico';
import especialidad from './Components/especialidad';
import farmacia from './Components/farmacia';
import categoria_farmacia from './Components/categoria_farmacia';
import turno from './Components/turno';
import farmacia_categoria_farmacia from './Components/farmacia_categoria_farmacia';
import servicio_domicilio from './Components/servicio_domicilio';
import cotizacion_farmacia from './Components/cotizacion_farmacia';

import servicio from './Components/servicio';
const ServiceName = "kolping";
const Pages: SPageListProps = {
    ...sucursal.Pages,
    ...notificacion.Pages,
    ...domicilio.Pages,
    ...ficha.Pages,
    ...DBF.Pages,
    ...medico.Pages,
    ...especialidad.Pages,
    ...farmacia.Pages,
    ...categoria_farmacia.Pages,
    ...farmacia_categoria_farmacia.Pages,
    ...turno.Pages,
    ...servicio_domicilio.Pages,
    ...cotizacion_farmacia.Pages,
    ...servicio.Pages
}

const Reducers = {
    ...sucursal.Reducers,
    ...notificacion.Reducers,
    ...DBF.Reducer,
    ...medico.Reducers,
    ...especialidad.Reducers,
    ...farmacia.Reducers,
    ...categoria_farmacia.Reducers,
    ...farmacia_categoria_farmacia.Reducers,
    ...turno.Reducers,
    ...servicio_domicilio.Reducers,
    ...cotizacion_farmacia.Reducers,
    ...servicio.Reducers,
}

export default {
    ServiceName,
    Pages,
    Reducers

};

