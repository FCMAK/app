import SSocket from 'servisofts-socket';
import Parent from './index';
import Service from '../../index';

export default class Actions {
    static _getReducer = (props) => {
        return props.state[Parent.component + "Reducer"];
    }
    static getAll = ({
        key_farmacia,
        key_categoria_farmacia
    }, props) => {
        var reducer = Actions._getReducer(props);
        var data = reducer.data[key_farmacia ?? key_categoria_farmacia];
        if (!data) {
            if (reducer.estado == "cargando") return null;
            SSocket.send({
                // service: Service.ServiceName,
                component: Parent.component,
                version: Parent.version,
                type: "getAll",
                estado: "cargando",
                key_categoria_farmacia: key_categoria_farmacia,
                key_farmacia: key_farmacia,
                key_usuario: props.state.usuarioReducer.usuarioLog.key,
            })
            return null;
        }
        return data;
    }

    static getByKey = ({
        key_farmacia,
        key_categoria_farmacia
    }, key, props) => {
        var data = Actions.getAll({ key_farmacia, key_categoria_farmacia }, props);
        if (!data) return null;
        return data[key];
    }

    static registro = (data, props) => {
        SSocket.send({
            // service: Service.ServiceName,
            component: Parent.component,
            version: Parent.version,
            type: "registro",
            estado: "cargando",
            key_usuario: props.state.usuarioReducer.usuarioLog.key,
            data: data
        })
    }
    static editar = (data, props) => {
        SSocket.send({
            // service: Service.ServiceName,
            component: Parent.component,
            version: Parent.version,
            type: "editar",
            estado: "cargando",
            key_usuario: props.state.usuarioReducer.usuarioLog.key,
            data: data
        })
    }
    static eliminar = (data, props) => {
        SSocket.send({
            // service: Service.ServiceName,
            component: Parent.component,
            version: Parent.version,
            type: "editar",
            estado: "cargando",
            key_usuario: props.state.usuarioReducer.usuarioLog.key,
            data: {
                ...data,
                estado: 0,
            }
        })
    }
}