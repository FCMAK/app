import { SPageListProps } from 'servisofts-component'
import { PageProps } from ".."

import Home from './Home';
import Tabla from './Tabla';
const Pages: SPageListProps = {}
Pages[PageProps.rootPath] = { component: Home };
Pages[PageProps.rootPath + "/"] = { component: Tabla, params: ["key"] };
export default Pages;