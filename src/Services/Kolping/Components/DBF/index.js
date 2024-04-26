import Reducer from "./Reducer"
import Event from './Event';
export const PageProps = {
    name: "dbf",
    reducerName: "dbfReducer",
    component: "dbf",
    rootPath: "dbf",
}
export default {
    ...Event,
    Pages: require("./Pages").default,
    Reducer,
    props: PageProps,
}