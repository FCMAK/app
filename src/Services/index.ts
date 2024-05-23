import Kolping from './Kolping';
import Usuario from './Usuario';
import Roles_permisos from './Roles_permisos';


const Pages = {
    ...Kolping.Pages,
    ...Usuario.Pages,
    ...Roles_permisos.Pages,
}

const Reducers = {
    ...Kolping.Reducers,
    // ...Usuario.Reducers,
    ...Roles_permisos.Reducers,
}

export default {
    Pages,
    Reducers
}