import { SModel } from "servisofts-model";
import Action from "./Action";
import Reducer from "./Reducer";

export default new SModel<Action, Reducer>({
    info: {
        service: "especialidad",
        component: "especialidad"
    },
    Columns: {
        "CodEsp": { type: "text", pk: true },
        "NomEsp": { type: "text", editable: true, label: "NIT" },
    },
    image: {
        api: "especialidad",
        name: "especialidad"
    },
    Action,
    Reducer,
});