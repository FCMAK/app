import { SPageListProps } from 'servisofts-component'
import Actions from './Actions'

import Login from './Page/Login'
import RegistroCliente from './Page/RegistroCliente'
import Perfil from './Page/Perfil'
import UsuarioPage from './Page/UsuarioPage'
import ClientesPage from './Page/ClientesPage'
import ClientePerfilPage from './Page/ClientePerfilPage'
import VentasPage from './Page/VentasPage'
import EntrenadorPage from './Page/EntrenadorPage'

import RecuperarPass from './Page/RecuperarPass'

const Pages: SPageListProps = {
    login: Login,
    registro:RegistroCliente,
    "perfil":Perfil,
    UsuarioPage,
    ClientesPage,
    VentasPage,
    EntrenadorPage,
    ClientePerfilPage,
    "RecuperarContrasena":RecuperarPass,
}


import usuarioReducer from './Reducer/usuarioReducer'
import clientesActivosReducer from './Reducer/clientesActivosReducer'
const Reducers = {
    usuarioReducer,
    clientesActivosReducer
}


export default {
    Pages,
    Actions,
    Reducers
};