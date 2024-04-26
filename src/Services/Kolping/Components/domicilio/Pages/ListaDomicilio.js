import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';

class ListaDomicilio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getCardSolicitud({ url, telefono, servicio, fecha, hora, ficha, svg, estado }) {
        return <SView col={"xs-12"} row height={70} style={{ borderWidth: 1, borderColor: STheme.color.primary, borderRadius: 8 }}
            backgroundColor={STheme.color.card}
            onPress={() => {
                //alert(title + '\n' + texto + '\n' + numero);
                this.props.navigation.navigate(url, {key:telefono});
            }} row>
            <SView col={"xs-4"} center height >
                <SView style={{}}>
                    <SText font={"LondonBetween"} color={STheme.color.darkGray} fontSize={10}>{fecha} - {hora}</SText>
                    <SHr height={10} />
                    <SText font={"LondonTwo"} color={STheme.color.black} fontSize={15}>{telefono}</SText>
                </SView>
            </SView>
            <SView col={"xs-4"} height center>
                <SView center col style={{ borderLeftWidth: 2, borderColor: STheme.color.lightGray }}>
                    <SText font={"LondonBetween"} color={STheme.color.info} fontSize={15}>{servicio}</SText>
                    <SText font={"LondonTwo"} color={STheme.color.text} fontSize={20}>#{ficha}</SText>
                </SView>

            </SView>
            <SView col={"xs-4"} center height row>
                <SView col={"xs-12"} style={{ borderLeftWidth: 2, borderColor: STheme.color.lightGray }} row center>
                    <SView height={44} >
                        <SIcon name={svg} width={30} fill={(estado=="Pendiente") ? STheme.color.lightGray : STheme.color.success} />
                    </SView>
                    <SView  >
                        <SText color={STheme.color.black} font={"LondonTwo"} fontSize={15}> {estado} </SText>
                    </SView>
                </SView>
            </SView>
        </SView>
    }
    getLista() {
        return <SView col={"xs-12"} center >
            <SHr height={10} />
            <SView col={"xs-12"} >
                {this.getCardSolicitud({
                    url: "domicilio/detalle",
                    telefono: '+59163652125',
                    servicio: 'Laboratorio',
                    fecha: 'Enero, 06',
                    hora: '16:45 AM',
                    ficha: '87',
                    svg: "Dpendiente",
                    estado: "Pendiente"
                })}
                <SHr height={10} />
                {this.getCardSolicitud({
                    url: "domicilio/detalle",
                    telefono: '+591731252512',
                    servicio: 'Óptica',
                    fecha: 'Enero, 06',
                    hora: '16:45 AM',
                    ficha: '88',
                    svg: "Dpendiente",
                    estado: "Pendiente"
                })}
                <SHr height={10} />
                {this.getCardSolicitud({
                    url: "domicilio/detalle",
                    telefono: '+59176013124',
                    servicio: 'Laboratorio',
                    fecha: 'Enero, 06',
                    hora: '16:45 AM',
                    ficha: '89',
                    svg: "Dpendiente",
                    estado: "Aceptado"
                })}
                <SHr height={10} />
                {this.getCardSolicitud({
                    url: "domicilio/detalle",
                    telefono: '+59177012121',
                    servicio: 'Farmacia',
                    fecha: 'Enero, 06',
                    hora: '16:45 AM',
                    ficha: '90',
                    svg: "Drechazado",
                    estado: "Rechazado"
                })}
                <SHr height={35} />
            </SView>
        </SView>
    }

    render() {
        return (
            <SPage title={'Agenda de Fichas'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SHr height={10} />
                    <SView col={"xs-12"} center row>
                        <SView center col={"xs-6"} height={35} center backgroundColor={STheme.color.primary} style={{ borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }}
                            onPress={() => { }}>
                            <SText fontSize={16} font={"Roboto-Bold"} color={STheme.color.white}>Pendientes</SText>
                        </SView>
                        <SView col={"xs-6"} center height={35} style={{ borderBottomRightRadius: 8, borderTopRightRadius: 8, borderWidth: 1, borderColor: STheme.color.primary }}
                            onPress={() => { }}>
                            <SText fontSize={16} font={"Roboto-Bold"} color={STheme.color.primary}>Historial</SText>
                        </SView>
                    </SView>
                    <Kolping.KBuscador />
                    {this.getLista()}
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(ListaDomicilio);