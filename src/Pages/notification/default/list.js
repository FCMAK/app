import DPA, { connect } from 'servisofts-page';
import { Parent } from "."
import Model from '../../../Model';
import item from './item';

class index extends DPA.list {
    constructor(props) {
        super(props, {
            Parent: Parent,
            title:"Lista de Notificaciones",
            excludes: ["key", "fecha_on", "key_usuario", "estado", "key_servicio"],
            item: item,
            onRefresh:(resolve)=>{
                Model.almacen.Action.CLEAR();
                Model.sucursal.Action.CLEAR();
                resolve();
            }
        });
    }
    $allowNew() {
        return true
        return Model.usuarioPage.Action.getPermiso({ url: Parent.path, permiso: "new" });
    }
    $allowTable() {
        return true
        return Model.usuarioPage.Action.getPermiso({ url: Parent.path, permiso: "table" });
    }
    $allowAccess() {
        return true
        return Model.usuarioPage.Action.getPermiso({ url: Parent.path, permiso: "ver" })
    }
    $filter(data) {
        return data.estado != 0
    }
    $getData() {
        return Parent.model.Action.getAll();
    }
}
export default connect(index);