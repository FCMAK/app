import { SPage } from "servisofts-component";
import Model from "../../../Model";
import list from "./list";
import table from "./table";
import _new from "./new";
import profile from "./profile/index";
import edit from "./edit";
import _delete from "./delete";
const model = Model.notification_default;

export const Parent = {
    name: "default",
    path: `/notification/default`,
    model
}
export default SPage.combinePages(Parent.name, {
    "": list,
    "list": list,
    "table": table,
    "new": _new,
    ...profile,
    "edit": edit,
    "delete": _delete
})
