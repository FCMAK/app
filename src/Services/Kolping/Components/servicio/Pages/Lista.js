import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView, SList, SHr, SDate } from 'servisofts-component';
import Parent from '../index'
import STheme from 'servisofts-component/Component/STheme';
import KButtom from '../../../../../Components/Kolping/KButtom';
import KBuscador from '../../../../../Components/Kolping/KBuscador';

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "Pendiente" // Pendiente, Historial
        };
        this.tipo_servicio = SNavigation.getParam("servicio");

    }
    getFilter() {
        return <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} height={50} row>
            <SView col={"xs-6"} height card>
                <KButtom outline={this.state.filter != "Pendiente"} onPress={() => { this.setState({ filter: "Pendiente" }) }}>Pendientes</KButtom>
            </SView>
            <SView col={"xs-6"} height card>
                <KButtom outline={this.state.filter != "Historial"} onPress={() => { this.setState({ filter: "Historial" }) }}>Historial</KButtom>
            </SView>
        </SView>
    }
    getEstado(obj) {
        if (obj.fecha_rechazo) {
            return "Rechazado"
        }
        if (obj.fecha_acordada) {
            return "Aprobado"
        }
        return "Pendiente"
    }
    getEstadoText(obj) {
        switch (obj) {
            case "Rechazado":
                return <SText font='LondonTwo' fontSize={14} color={STheme.color.info}>{"Rechazado"}</SText>
            case "Aprobado":
                return <SText font='LondonTwo' fontSize={14} color={STheme.color.primary}>{"Aprobado"}</SText>
            default:
                return <SText font='LondonTwo' fontSize={14} color={STheme.color.gray}>{"Pendiente"}</SText>
        }
    }
    getEstadoColor(obj) {
        switch (obj) {
            case "Rechazado":
                return STheme.color.info;
            case "Aprobado":
                return STheme.color.primary;
            default:
                return STheme.color.card;
        }
    }
    getContent() {
        // var data = Parent.Actions.getAll(this.props);
        // var usuarios = usuario.Actions.getAll(this.props);
        // if (!data) return <SLoad />;
        // if (!usuarios) return <SLoad />;
        return <>
            <SHr height={15} />
            <SView col={"xs-12"} row>
                <SView col={"xs-10"} row>
                    <SIcon name={"logoLista"} width={14} />
                    <SView width={10} row></SView>
                    <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info} style={{ textTransform: "uppercase" }}>IMAGENOLOGÍA</SText>
                </SView>
                <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
                <SHr height={20} />
            </SView>
            <SView center col={"xs-12"} height={50} row backgroundColor={STheme.color.card} style={{ borderBottomWidth: 1, borderTopWidth: 1, borderRightWidth: 1, borderColor: STheme.color.lightGray, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}
                onPress={() => {
                    SNavigation.navigate("servicio/detalle");
                }}>
                <SView col={"xs-1"} center height backgroundColor={STheme.color.primary}>
                    <SIcon name={"IconServicio"} height={20} />
                </SView>
                <SView col={"xs-1"} style={{ alignItems: "flex-start" }}>
                    <SIcon name={"FlechaServicio"} height={15} />
                </SView>
                <SView col={"xs-10"} style={{ alignItems: "flex-start" }} >
                    <SText font={"LondonTwo"} fontSize={20} color={STheme.color.text} >Ecografía</SText>
                </SView>
            </SView>
            <SHr height={10} />
            <SView center col={"xs-12"} height={50} row backgroundColor={STheme.color.card} style={{ borderBottomWidth: 1, borderTopWidth: 1, borderRightWidth: 1, borderColor: STheme.color.lightGray, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
                <SView col={"xs-1"} center height backgroundColor={STheme.color.primary}>
                    <SIcon name={"IconServicio"} height={20} />
                </SView>
                <SView col={"xs-1"} style={{ alignItems: "flex-start" }}>
                    <SIcon name={"FlechaServicio"} height={15} />
                </SView>
                <SView col={"xs-10"} style={{ alignItems: "flex-start" }} >
                    <SText font={"LondonTwo"} fontSize={20} color={STheme.color.text} >Mamografía</SText>
                </SView>
            </SView>
            <SHr height={10} />
            <SView center col={"xs-12"} height={50} row backgroundColor={STheme.color.card} style={{ borderBottomWidth: 1, borderTopWidth: 1, borderRightWidth: 1, borderColor: STheme.color.lightGray, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
                <SView col={"xs-1"} center height backgroundColor={STheme.color.primary}>
                    <SIcon name={"IconServicio"} height={20} />
                </SView>
                <SView col={"xs-1"} style={{ alignItems: "flex-start" }}>
                    <SIcon name={"FlechaServicio"} height={15} />
                </SView>
                <SView col={"xs-10"} style={{ alignItems: "flex-start" }} >
                    <SText font={"LondonTwo"} fontSize={20} color={STheme.color.text}>Rayos X</SText>
                </SView>
            </SView>
            <SHr height={10} />
            <SView center col={"xs-12"} height={50} row backgroundColor={STheme.color.card} style={{ borderBottomWidth: 1, borderTopWidth: 1, borderRightWidth: 1, borderColor: STheme.color.lightGray, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
                <SView col={"xs-1"} center height backgroundColor={STheme.color.primary}>
                    <SIcon name={"IconServicio"} height={20} />
                </SView>
                <SView col={"xs-1"} style={{ alignItems: "flex-start" }}>
                    <SIcon name={"FlechaServicio"} height={15} />
                </SView>
                <SView col={"xs-10"} style={{ alignItems: "flex-start" }} >
                    <SText font={"LondonTwo"} fontSize={20} color={STheme.color.text} >Tomografía</SText>
                </SView>
            </SView>
        </>
    }


    render() {
        return (
            <SPage title={'Lista de servicios'} >
                <SView col={"xs-12"} center>
                    <SHr />
                    <SHr />
                    <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} >
                        <KBuscador />
                        {this.getContent()}
                    </SView>
                    <SHr />
                    <SHr />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Lista);