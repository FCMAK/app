import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SLoad } from 'servisofts-component';
import { SButtom, SDate, SForm, SNavigation, SPage, SPopup, SText, STheme, SView } from 'servisofts-component';
import Usuario from '..';
import BackgroundImage from '../../../Components/BackgroundImage';
import FotoPerfilComponent from '../../../Components/FotoPerfilComponent';
import LogoAnimado from '../../CargaPage/LogoAnimado';
import RolDeUsuario from './RolDeUsuario';
import Kolping from '../../../Components/Kolping';

class RegistroCliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
        this.key_rol = SNavigation.getParam("key_rol");
        if (!this.key_rol) {
            this.key_rol = "d16d800e-5b8d-48ae-8fcb-99392abdf61f";
        }
    }
    getForm() {

        return <SForm
            ref={(ref) => { this.form = ref; }}
            row
            style={{
                justifyContent: "space-between",
            }}
            inputProps={{
                col: "xs-12",
                customStyle: "kolping",

            }}
            inputs={{
                Nombres: { label: "Nombres", isRequired: true, defaultValue: this.usr.Nombres, },
                Apellidos: { label: "Apellidos", isRequired: true, defaultValue: this.usr.Apellidos, },
                Correo: { label: "Correo", type: "email", isRequired: true, defaultValue: this.usr.Correo, },
                Password: { label: "Password", type: "password", isRequired: true, defaultValue: this.usr.Password, },
                RepPassword: { label: "Repetir password", type: "password", isRequired: true, defaultValue: this.usr.Password, },

            }}
            onSubmit={(values) => {
                if (this.key) {
                    Usuario.Actions.editar({
                        ...this.usr,
                        ...values
                    }, this.props);
                } else {
                    Usuario.Actions.registro(values, this.key_rol, this.props);
                }
            }}
        />
    }

    alertError(error) {
        return <SView col={"xs-12 md-8 xl-6"} style={{ height: 200, borderRadius: 8, }} backgroundColor={STheme.color.background}>
            <BackgroundImage />
            <SView style={{
                width: "100%",
                height: "100%",
            }} center>
                <SText style={{ fontSize: 16, }}>El usuario ya existe</SText>
                <SView height={8} />
                <SText style={{ fontSize: 12, }}>{`Nombre: ${error["Nombres"] + " " + error["Apellidos"]}`}</SText>
                <SText style={{ fontSize: 12, }}>{`Correo: ${error["Correo"]}`}</SText>
                {/* <SText style={{ fontSize: 12, }}>{`Fecha nacimiento: ${error["Fecha nacimiento"]}`}</SText> */}
                <SText style={{ fontSize: 12, }}>{`CI: ${error["CI"]}`}</SText>
                <SText style={{ fontSize: 12, }}>{`Telefono: ${error["Telefono"]}`}</SText>
            </SView>
        </SView>
    }

    getEliminar() {
        if (!this.key) return;
        return <>
            <SButtom props={{
                type: "danger",
                variant: "confirm"
            }}
                onPress={() => {
                    Usuario.Actions.editar({
                        ...this.usr,
                        estado: 0,
                    }, this.props);
                }}
            >{("Eliminar")}</SButtom>
            <SView width={16} />
        </>
    }
    render() {

        var error = Usuario.Actions.getError("registro", this.props);
        if (error) {
            SPopup.open({ key: "errorRegistro", content: this.alertError(error) });
        }
        if (this.props.state.usuarioReducer.estado == "exito" && this.props.state.usuarioReducer.type == "registro") {
            this.props.state.usuarioReducer.estado = "";
            SNavigation.goBack();
        }
        if (this.props.state.usuarioReducer.estado == "exito" && this.props.state.usuarioReducer.type == "editar") {
            this.props.state.usuarioReducer.estado = "";
            SNavigation.goBack();
        }
        if (this.key) {
            this.usr = Usuario.Actions.getByKey(this.key, this.props);
            if (!this.usr) return <SLoad />
        } else {
            this.usr = {}
        }

        return (
            <SPage title={"Registro"}>
                <SView center>
                    <SView col={"xs-11 md-6 xl-4"} center>
                        <SView height={8} />
                        <SText fontSize={20} bold>{`${this.key ? "Edita el" : "Registra tu"} usuario!`}</SText>
                        <SView height={8} />
                        {this.key ? <SView width={160} height={160}> <FotoPerfilComponent data={this.usr} component={"usuario"} /> </SView> : null}
                        {this.key ? <SView  col={"xs-12"}><SView height={40} /> <SText color={"#DE5738"} fontSize={18}  font={"LondonTwo"}>MIS DATOS</SText> </SView> : null}
                        {this.getForm()}
                        <SView height={16} />
                        <SView col={"xs-11"} row center>
                            {/* {this.getEliminar()} */}
                            <Kolping.KButtom primary props={{
                                type: "outline"
                            }}
                                onPress={() => {
                                    this.form.submit();
                                }}
                            >{(this.key ? "Editar" : "CONFIRMAR")}</Kolping.KButtom>
                        </SView>
                        <SView height={36} />
                    </SView>
                    <RolDeUsuario data={this.usr} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(RegistroCliente);