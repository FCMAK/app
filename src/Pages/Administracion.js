import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SPage, SText } from 'servisofts-component';
import Pages from '.';
import { MenuPages } from 'servisofts-rn-roles_permisos';


class Administracion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        // const UsuaioPage = Pages["usuarioPage/lista"];
        return (
            <SPage title={'Administracion'}>
                {/* <UsuaioPage /> */}
                <SHr />
                <MenuPages path={""} permiso={"ver"}>

                </MenuPages>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Administracion);