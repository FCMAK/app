import { SNavigation, SStorage } from "servisofts-component";
import SSocket from "servisofts-socket";
import { PageProps } from "./"
export default {
    getTablas(props) {
        if (!props) return;
        if (!props.state) return;
        if (!props.state[PageProps.reducerName]) return;
        var data = props.state[PageProps.reducerName].tablas;
        if (!data) {
            if (props.state[PageProps.reducerName].estado == "cargando") return;
            SSocket.send({
                component: PageProps.component,
                type: "getTablas",
                estado: "cargando",
            })
            return;
        }
        return data;
    },

}
