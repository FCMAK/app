import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SNavigation, SPage, SText, SLoad } from 'servisofts-component';
import servicio_domicilio from '../../servicio_domicilio';
import MensajeProceso from './MensajeProceso';

class request extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.numero = SNavigation.getParam("numero");
    }

    getRequest() {

        return <SText>{JSON.stringify(solicitud)}</SText>;
    }
    render() {
        var solicitud = servicio_domicilio.Actions.getByNumero(this.numero, this.props);
        if (!solicitud) return <SLoad />;
        if (!solicitud.fecha_acordada) return <MensajeProceso obj={solicitud}/>
        return (
            <SPage title={'request'}>
                {this.getRequest()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(request);