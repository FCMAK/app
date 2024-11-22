import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
// import Camera from './Camara';
// import {SafeAreaView} from 'react-native';

class MensajeCotizacionVacio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (<SPage title={'Cotización Vacio'} center>
            <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row  >
                <SHr height={20} />
                <SView col={"xs-12"} style={{ padding: 8 }} center  >
                    <SView col={"xs-12"} center  >
                        <SText font={"LondonMM"} bold center fontSize={24} color={STheme.color.text}>No hay cotización</SText>
                        <SHr height={30} />
                        <SText center fontSize={18} color={'#666666'}>Añada una cotización:</SText>
                        <SText center fontSize={18} color={'#666666'}>¡El Centro Médico está siempre a mano!</SText>
                    </SView>
                    <SHr height={70} />
                    <SView col={"xs-12"} center height={300}>
                        <SIcon name={"Enfermera19"} />
                    </SView>
                    <SHr height={70} />
                    <Kolping.KButtom primary onPress={() => {
                        SNavigation.navigate("cotizacion_farmacia/registro");
                    }}>COTIZA TU RECETA</Kolping.KButtom>
                    <SHr height={30} />
                </SView>
            </SView>
        </SPage >);
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(MensajeCotizacionVacio);