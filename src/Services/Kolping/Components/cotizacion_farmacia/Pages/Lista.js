import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SLoad, SNavigation, SPage, SPopup, SText, SView, SList, SHr, SDate } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import Parent from '../index'
import STheme from 'servisofts-component/Component/STheme';
import KButtom from '../../../../../Components/Kolping/KButtom';
import KBuscador from '../../../../../Components/Kolping/KBuscador';
import Model from '../../../../../Model';

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "en espera" // en espera, Historial
        };
    }

    getEstadoCotiza(tipo) {
        switch (tipo) {
            case "Aceptada":
                return "#65B54E";
            case "en espera":
                return "#F5CB35";
            default:
                return "#F5CB35";
        }
    }

    getFilter() {
        return <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} height={50} row>
            <SView col={"xs-6"} height card>
                <KButtom outline={this.state.filter != "en espera"} onPress={() => { this.setState({ filter: "en espera" }) }}>En espera</KButtom>
            </SView>
            <SView col={"xs-6"} height card>
                <KButtom outline={this.state.filter != "Historial"} onPress={() => { this.setState({ filter: "Historial" }) }}>Historial</KButtom>
            </SView>
        </SView>
    }
    getEstado(obj) {
        // if (obj.fecha_rechazo) {
        //     return "Rechazado"
        // }
        if (obj.fecha_aprobacion) {
            return "Aceptada"
        }
        return "en espera"
    }
    getEstadoText(obj) {
        switch (obj) {
            case "Aceptada":
                return <SText font='LondonTwo' fontSize={14} color={STheme.color.primary}>{"Aceptada"}</SText>
            default:
                return <SText font='LondonTwo' fontSize={14} color={STheme.color.gray}>{"en espera"}</SText>
        }
    }
    getEstadoColor(obj) {
        switch (obj) {
            case "Rechazado":
                return STheme.color.info;
            case "Aceptada":
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
            center
            space={16}
            render={(obj) => {
                if (obj.tipo != this.tipo_servicio) return null;
                var estado = this.getEstado(obj);
                if (this.state.filter == "en espera" && estado != "en espera") return null;
                if (this.state.filter == "Historial" && estado == "en espera") return null;

                var usuario = usuarios[obj.key_usuario];
                return <SView col={'xs-11 md-8 lg-6 xl-4'} height={90} row center backgroundColor={'#EEEEEE'} style={{ borderRadius: 8, }}
                    onPress={() => {
                        SNavigation.navigate("admin/cotizacion_farmacia/perfil", { key: obj.key });
                    }}
                >
                    <SView width={80} height style={{
                        borderBottomStartRadius: 7,
                        borderTopStartRadius: 7,
                        backgroundColor: STheme.color.info,
                        overflow: "hidden"
                    }} row center >
                        {/* <SImage src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Prescription_Sigmund_Freud.jpg/220px-Prescription_Sigmund_Freud.jpg'} /> */}
                        <SImage src={SSocket.api.root + "cotizacion_farmacia" + "/" + obj.key + '?time='+ new Date().getTime()} style={{ resizeMode: "cover" }} />
                    </SView>
                    <SView width={8} height />
                    <SView flex height row center >
                        <SView col={"xs-12"} row style={{ justifyContent: 'flex-start' }} >
                            <SText col={"xs-12"} fontSize={18} font={"LondonTwo"} color={'#000000'} Bold >COTIZACIÓN: {obj.numero}  </SText>
                            <SText col={"xs-12"} fontSize={12} font={"LondonTwo"} color={'#666666'} >PACIENTE: {usuario?.Nombres + " " + usuario?.Apellidos} </SText>
                            <SText col={"xs-12"} fontSize={12} font={"LondonTwo"} color={'#666666'} >FECHA: {new SDate(obj.fecha_on).toString("MONTH, dd - hh:mm")}</SText>
                        </SView>
                        <SView col={"xs-12"} row style={{ justifyContent: 'flex-end' }} center>
                            <SView width={12} height={12} style={{ borderRadius: 50 }} backgroundColor={this.getEstadoCotiza(estado)} />
                            <SView width={4} height />
                            <SText fontSize={12} font={"LondonTwo"} color={'#018992'} >Cotización {estado}</SText>
                        </SView>
                    </SView>
                    <SView width={8} height />

                </SView>
            }}
        />
    }

    render() {
        return (
            <SPage title={'Lista cotización farmacia'} center>
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
                {this.getContent()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Lista);