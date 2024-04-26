import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView, SImage, SForm, SDate, SLoad } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import WhatsApp from '../../../../../Components/WhatsApp';
import servicio_domicilio from '..';
//import Params from "../params.json"
import SSocket from 'servisofts-socket';
import Parent from '../index';
import Model from '../../../../../Model';

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
    }

    getPerfil(keyUsuario) {

        // var usuario = Usuario.Actions.getByKey(keyUsuario, this.props);
        var usuario = Model.usuario.Action.getByKey(keyUsuario);
        if (!usuario) return <SLoad />
        //SNavigation.navigate('login');
        //return <SLoad />
        //alert('No se encontro el usuario' + keyUsuario);

        return (
            <SView center>
                <SView style={{
                    width: 130,
                    height: 130,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <SView style={{
                        width: "90%",
                        height: "90%",
                        backgroundColor: "#66000022",
                        borderRadius: 100,
                        overflow: "hidden",
                    }} >
                        <SImage src={`${SSocket.api.root}usuario/${usuario.key}`} style={{
                            width: "100%",
                            height: "100%",
                        }} />
                    </SView>
                </SView>
                <SHr />
                <SView >
                    <SView center>
                        <SText style={{
                            fontSize: 18,
                        }} font='LondonBetween'>{usuario["Nombres"] + " " + usuario["Apellidos"]} </SText>
                    </SView>
                    <SView center>
                        <SText style={{
                            fontSize: 16,
                        }} font={"LondonBetween"} color={STheme.color.gray} >{usuario["CI"] ?? "--"} </SText>
                    </SView>
                    <SView center row>
                        <SView>
                            <SIcon name={"whatsApp"} width={15} fill={STheme.color.primary} />
                        </SView>
                        <SView>
                            <SText style={{
                                fontSize: 16,
                            }} font={"LondonBetween"} color={STheme.color.gray} >
                            </SText>
                        </SView>
                        <SText>
                            {this.whatsApp ?? "--"}
                        </SText>
                    </SView>
                </SView>
            </SView>
        )
    }

    getContentForm(obj) {
        this.dataOk = {};

        return <SForm
            center
            ref={(form) => { this.form = form; }}
            col={"xs-12 sm-9 md-8 lg-8 xl-10"}
            inputProps={{
                customStyle: "kolping"
            }}
            inputs={{
                monto: { label: "Monto", name: "monto", defaultValue: obj["monto"], isRequired: true, type: "money" },
                observacion: { label: "Observación", name: "observacion", defaultValue: obj["observacion"], placeholder: "Descripción observación", icon: <SIcon name={"Obs"} width={40} height={30} /> },
            }}
            onSubmit={(values) => {
                var fechaOk = new SDate().toString();
                this.dataOk = {
                    ...obj,
                    ...values,
                    fecha_aprobacion: fechaOk
                }
                //alert (JSON.stringify(this.dataOk ))
                Parent.Actions.editar({ ...this.dataOk }, this.props);
                SNavigation.goBack();

            }}
        />
    }

    // getContent() {
    //     this.data = {};
    //     if (this.key) {
    //         this.data = Parent.Actions.getByKey(this.key, this.props);
    //         if (!this.data) return <SLoad />
    //     } else {
    //         this.data = {};
    //     }
    //     return <SText>{JSON.stringify(this.data)}</SText>
    // }

    getEstadoText(obj) {
        if (obj.fecha_aprobacion) {
            return <SText font={"LondonTwo"} color={STheme.color.primary} fontSize={14} style={{ textTransform: "uppercase" }}  >Aprobado</SText>
        }
        return <SText font={"LondonTwo"} color={STheme.color.gray} fontSize={14} style={{ textTransform: "uppercase" }}  >Pendiente</SText>
    }

    render() {
        // var usuario = this.props.state.usuarioReducer.usuarioLog;
        // this.usuario = usuario;
        // if (!usuario) {
        //     SNavigation.navigate('login');
        //     return <SView />
        // }

        this.data = {};
        if (this.key) {
            this.data = Parent.Actions.getByKey(this.key, this.props);
            if (!this.data) return <SLoad />
        } else {
            this.data = {};
        }

        return (
            <SPage title={'Registro de ' + Parent.component} center>
                {/* {JSON.stringify(this.data)} */}
                <SHr />
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SHr height={20} />
                    <SView col={"xs-12"} style={{ padding: 8 }} center >
                        <SView col={"xs-12"}>
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>Datos de paciente</SText>
                            <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
                            <SHr height={10} />
                        </SView>
                        <SHr height={20} />
                        <SView col={"xs-12"}>
                            {this.getPerfil(this.data.key_usuario)}
                        </SView>
                        <SHr height={30} />
                        <SView col={"xs-12"}>
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>Datos de cotización</SText>
                            <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
                            <SHr height={25} />
                            <SView row col={"xs-12"} center >
                                <SView col={"xs-7"} >
                                    <SView row height={25}>
                                        <SText font={"LondonTwo"} color={STheme.color.text} fontSize={14} >Fecha: </SText>
                                        <SText font={"LondonTwo"} color={STheme.color.gray} fontSize={14} >{new SDate(this.data.fecha_on).toString("MONTH, dd - hh:mm")} </SText>
                                    </SView>
                                    <SView row height={25}>
                                        <SText font={"LondonTwo"} color={STheme.color.text} fontSize={14} >Estado: </SText>
                                        <SText font={"LondonTwo"} color={STheme.color.gray} fontSize={14} style={{ textTransform: "uppercase" }}  >
                                            {this.getEstadoText(this.data)}
                                        </SText>
                                    </SView>
                                </SView>
                                <SView col={"xs-5"} center height>
                                    <SView width={140} height={190} style={{
                                        borderRadius: 7,
                                        backgroundColor: "#CF9749",
                                        overflow: "hidden"
                                    }} row center >
                                        {/* <SImage width={"100%"} height={"100%"} style={{ resizeMode: "cover" }} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Prescription_Sigmund_Freud.jpg/220px-Prescription_Sigmund_Freud.jpg'} /> */}
                                        <SImage width={"100%"} height={"100%"} src={SSocket.api.root + "cotizacion_farmacia" + "/" + this.data.key} style={{ resizeMode: "cover" }} />
                                    </SView>
                                </SView>
                            </SView>
                        </SView>
                        <SHr height={25} />
                        <SView col={"xs-12"} center>
                            {this.getContentForm(this.data)}
                        </SView>
                        <SHr height={55} />
                        <SView col={"xs-12"} row center>
                            <Kolping.KButtom primary onPress={() => {
                                this.form.submit();
                                // SNavigation.goBack();
                            }} >{(this.data.fecha_acordada) || (this.data.fecha_rechazo) ? "EDITAR" : "ENVIAR"}</Kolping.KButtom>
                        </SView>
                        <SHr height={30} />
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Perfil);