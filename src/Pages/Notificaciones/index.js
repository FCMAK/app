import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, SView, STheme } from 'servisofts-component';
import LogoAnimado from '../CargaPage/LogoAnimado';
import Usuario from '../Usuario';
class Notificaciones extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getDato({ svg, title, desc, hora }) {
        return <SView col={"xs-12"} row onPress={() => {

        }}>
            <SView col={"xs-12"} height={20}></SView>
            <SView col={"xs-3"} center>
                <SIcon name={svg} fill={"#01899233"} width={75} />
            </SView>
            <SView col={"xs-9"}>
                <SText color={STheme.color.primary} fontSize={15}>{title} </SText>
                <SText color={STheme.color.black} fontSize={12}>{desc} </SText>
                <SText color={STheme.color.black}>Horas {hora} </SText>
                <SText style={{ textAlign: 'right' }} fontSize={12} color={STheme.color.black}>15 de noviembre 2021 </SText>
            </SView>
            <SView col={"xs-12"} height={20} style={{ borderBottomWidth: 1, borderColor: STheme.color.info }}></SView>
        </SView>
    }

    getLista() {
        return <SView style={{
            top: 20
        }}>
            {this.getDato({ svg: 'senfermeria', title: 'Reserva de ficha - ENFERMERÍA', desc: "En 40 minutos tiene una cita médica pendiente.", hora: "10:30 AM" })}
            {this.getDato({ svg: 'svacunacion', title: 'Reserva de ficha - VACUNACIÓN', desc: "En 40 minutos tiene una cita médica pendiente.", hora: "10:30 AM" })}
            {this.getDato({ svg: 'soptica', title: 'Reserva de ficha - ÓPTICA', desc: "En 40 minutos tiene una cita médica pendiente.", hora: "10:30 AM" })}

        </SView>
    }

    render() {
        // if (Usuario.Actions.getUsuarioLogueado(this.props)) {
        //     SNavigation.replace("inicio");
        //     return null;
        // }
        return (
            <SPage title="Notificaciones">
                <SView flex center col={"xs-12"}>
                    <SView col={"xs-11 md-6 xl-4"} height={200} >
                        <SHr height={30} />
                        <SText color={STheme.color.info} fontSize={20} font={"LondonTwo"}>Tus Notificaciones</SText>
                        <SText color={STheme.color.black} fontSize={16} font={"LondonTwo"}>Tienes 3 notificaciones sin leer:</SText>
                        {this.getLista()}

                    </SView>
                    <SHr height={48} />

                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Notificaciones);