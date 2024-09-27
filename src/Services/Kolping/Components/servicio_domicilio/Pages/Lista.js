import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView, SList, SHr, SDate } from 'servisofts-component';
import Parent from '../index'
import STheme from 'servisofts-component/Component/STheme';
import KButtom from '../../../../../Components/Kolping/KButtom';
import KBuscador from '../../../../../Components/Kolping/KBuscador';
import Model from '../../../../../Model';

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
        var data = Parent.Actions.getAll(this.props);
        var usuarios = Model.usuario.Action.getAll();
        if (!data) return <SLoad />;
        if (!usuarios) return <SLoad />;
        return <SList
            data={data}
            col={"xs-12"}
            center
            space={16}
            render={(obj) => {
                if (obj.tipo != this.tipo_servicio) return null;
                var estado = this.getEstado(obj);
                if (this.state.filter == "Pendiente" && estado != "Pendiente") return null;
                if (this.state.filter == "Historial" && estado == "Pendiente") return null;

                var usuario = usuarios[obj.key_usuario];
                return <SView col={"xs-12"} card height={70} center row  style={{
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: this.getEstadoColor(estado),
                }} onPress={() => {
                    SNavigation.navigate(Parent.component + "/perfil", { key: obj.key })
                }}>
                    <SView col={"xs-12"} height row center>
                        <SView row height center style={{
                            padding: 8,
                        }} col={"xs-6"}>
                            <SText font='LondonBetween' color={STheme.color.lightGray} fontSize={10}>{new SDate(obj.fecha_on).toString("MONTH, dd - hh:mm")}</SText>
                            <SHr />
                            <SText font='LondonTwo' fontSize={12} center>{usuario?.Nombres + " " + usuario?.Apellidos}</SText>
                            <SHr />
                        </SView>
                        <SView width={2} height={"70%"} backgroundColor={STheme.color.lightGray} />
                        <SView col={"xs-2.5"} row height center >
                            <SText font='LondonBetween' fontSize={20}>{`#${obj.numero}`}</SText>
                        </SView>
                        <SView width={2} height={"70%"} backgroundColor={STheme.color.lightGray} />
                        <SView row col={"xs-3"} height center>
                            {this.getEstadoText(estado)}
                        </SView>
                    </SView>
                </SView>
            }} />
    }


    render() {
        return (
            <SPage title={'Lista a domicilio de ' + this.tipo_servicio} center>
                <SHr />
                <SHr />
                {this.getFilter()}
                <SHr />
                <SHr />
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
                    <KBuscador />
                </SView>
                <SHr />
                <SHr />
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
                    {this.getContent()}
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Lista);