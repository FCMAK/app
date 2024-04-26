import Parent from './index'

type DataProps = {
    component: any,
    type: string,
    version?: any,
    estado?: "exito" | "cargando" | "error",
    error: any,
    [key: string]: any;
}

const initialState = () => {
    var initialState: any = {
        component: Parent.component,
        version: Parent.version,
        data: {}
    }
    return initialState;
}
export default (state: any, action: DataProps) => {
    if (!state) return initialState();
    if (action.component != Parent.component) return state;
    // if (action.version != Parent.version) return state;
    TypesSwitch(state, action)
    state.type = action.type;
    state.estado = action.estado;
    state.error = action.error;
    state.lastSend = new Date();
    state = { ...state };
    return state;
}

const TypesSwitch = (state: any, action: DataProps) => {
    switch (action.type) {
        case "getAll": return getAll(state, action);
        case "registro": return registro(state, action);
        case "editar": return editar(state, action);

    }
}

const getAll = (state: any, action: DataProps) => {
    if (action.estado != "exito") return;
    state.data[action.key_farmacia ?? action.key_categoria_farmacia] = action.data;
    if (!(action.key_farmacia ?? action.key_categoria_farmacia)) {
        Object.keys(action.data).map((key) => {
            var obj = action.data[key];
            if (!state.data[obj.key_farmacia]) state.data[obj.key_farmacia] = {};
            state.data[obj.key_farmacia][key] = action.data[key];
            if (!state.data[obj.key_categoria_farmacia]) state.data[obj.key_categoria_farmacia] = {};
            state.data[obj.key_categoria_farmacia][key] = action.data[key];
        })
    }
}
const registro = (state: any, action: DataProps) => {
    if (action.estado != "exito") return;
    if (!state.data) return;
    state.lastRegister = action.data;
    var obj = action.data;
    if (state.data[obj.key_farmacia]) state.data[obj.key_farmacia][obj.key] = obj;
    if (state.data[obj.key_categoria_farmacia]) state.data[obj.key_categoria_farmacia][obj.key] = obj;
}
const editar = (state: any, action: DataProps) => {
    if (action.estado != "exito") return;
    if (!state.data) return;
    var obj = action.data;
    if (state.data[obj.key_farmacia]) state.data[obj.key_farmacia][obj.key] = obj;
    if (state.data[obj.key_categoria_farmacia]) state.data[obj.key_categoria_farmacia][obj.key] = obj;
}
