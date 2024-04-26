
const initialState = {
    estado: "",
    tablas:false,
}

export default (state, action) => {
    if (!state) {
        return initialState;
    }
    if (action.component == "dbf") {
        switch (action.type) {
            case "getTablas":
                getTablas(state, action);
                break;
        }
        if (action.estado == "error") {
            state.error = action.error;
        }
        state = { ...state };
    }
    return state;
}

const getTablas = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.tablas = action.data;
    }
}