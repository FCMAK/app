import { SModel } from "servisofts-model";
import Action from "./Action";
import Reducer from "./Reducer";

export default new SModel<Action, Reducer>({
    info: {
        service: "medico",
        component: "medico"
    },
    Columns: {
        "CodMed": { type: "integer", pk: true },
        "NomMed": { type: "text", editable: true, label: "Nombre Médico" },
        "TitMed": { type: "text", editable: true, label: "Título" },
        "sucursal": { type: "text", editable: true, label: "Sucursal" },
        
        

    },
    image: {
        api: "medico",
        name: "medico"
    },
    Action,
    Reducer,
});