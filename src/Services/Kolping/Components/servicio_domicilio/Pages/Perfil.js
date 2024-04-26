import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView, SImage, SForm, SDate, SLoad } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import WhatsApp from '../../../../../Components/WhatsApp';
import servicio_domicilio from '..';
import Params from "../params.json"
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
        var usuario = Model.usuario.Action.getByKey(keyUsuario)
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
                        }} font={"LondonBetween"} color={STheme.color.gray}>{usuario["CI"] ?? "--"} </SText>
                    </SView>
                    <SView center row>
                        <SView>
                            <SIcon name={"whatsApp"} width={15} fill={STheme.color.primary} />
                        </SView>
                        <SView>
                            <SText style={{
                                fontSize: 16,
                            }} font={"LondonBetween"} color={STheme.color.gray}>
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
        // this.data = {};
        // if (this.key) {
        //     this.data = Parent.Actions.getByKey(this.key, this.props);
        //     if (!this.data) return <SLoad />
        // } else {
        //     this.data = {};
        // }
        this.dataOk = {};
        if (obj.fecha_rechazo) {
            var fecha = obj.fecha_rechazo;
        }
        if (obj.fecha_acordada) {
            var fecha = obj.fecha_acordada;
        }

        return <SForm
            center
            ref={(form) => { this.form = form; }}
            col={"xs-12 sm-9 md-8 lg-8 xl-10"}
            inputProps={{
                customStyle: "kolping"
            }}
            inputs={{
                fecha: { label: "Fecha", name: "fecha", defaultValue: fecha ? new SDate(fecha).toString("dd/MM/yyyy") : "", placeholder: "DD / MM / YYYY", isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
                hora: { label: "Hora", name: "hora", defaultValue: fecha ? new SDate(fecha).toString("hh:mm") : "", placeholder: "HH : MM", isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
            }}
            onSubmit={(values) => {
                var fechaOk = values.fecha + "T" + values.hora;

                var fechaFormatOk = new SDate(values.fecha).toString("yyyy-MM-dd");
                var newFecha = values.fecha.split("/").reverse().join("-");
                var fechaFormatOk = newFecha + "T" + values.hora;

                // var isValidDate = Date.parse(values.fecha);
                // if (isNaN(isValidDate)) {
                //     alert(isValidDate + "FORMATO NO VALIDO.")
                // }
                // else {
                //     alert(isValidDate + "FORMATO VALIDO")
                // }

                var date_regex = /^(?:(?:(0?[1-9]|1\d|2[0-8])[/](0?[1-9]|1[0-2])|(29|30)[/](0?[13-9]|1[0-2])|(31)[/](0?[13578]|1[02]))[/](0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|(29)[/](0?2)[/](\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
                var testDate = values.fecha
                if (date_regex.test(testDate)) {
                    //alert( "FORMATO VALIDO " + testDate)
                }
                else {
                    alert("FORMATO NO VALIDO " + testDate)
                }


                this.dataOk = {
                    ...obj,
                    // ...values,
                    fecha_acordada: fechaFormatOk
                }
                // alert(fechaFormatOk);
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
        if (obj.fecha_rechazo) {
            return <SText font={"LondonTwo"} color={STheme.color.info} fontSize={14} style={{ textTransform: "uppercase" }}  >Rechazado</SText>
        }
        if (obj.fecha_acordada) {
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
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>Datos de Paciente</SText>
                            <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
                            <SHr height={10} />
                        </SView>
                        <SHr height={20} />
                        <SView col={"xs-12"}>
                            {this.getPerfil(this.data.key_usuario)}
                        </SView>
                        <SHr height={30} />
                        <SView col={"xs-12"}>
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>Datos de Solicitud</SText>
                            <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
                            <SHr height={25} />
                            <SView row col={"xs-12"} center style={{}}>
                                <SView col={"xs-7"} style={{ borderRightWidth: 1, borderColor: STheme.color.primary, paddingRight: 15 }}>
                                    <SView row height={25}>
                                        <SText font={"LondonTwo"} color={STheme.color.text} fontSize={14} >Fecha: </SText>
                                        <SText font={"LondonTwo"} color={STheme.color.gray} fontSize={14} >{new SDate(this.data.fecha_on).toString("MONTH, dd - hh:mm")} </SText>
                                    </SView>
                                    <SView row height={25}>
                                        <SText font={"LondonTwo"} color={STheme.color.text} fontSize={14} >Servicio: </SText>
                                        <SText font={"LondonTwo"} color={STheme.color.gray} fontSize={14} style={{ textTransform: "uppercase" }} >{this.data.tipo}</SText>
                                    </SView>
                                    <SView row height={25}>
                                        <SText font={"LondonTwo"} color={STheme.color.text} fontSize={14} >Estado: </SText>
                                        <SText font={"LondonTwo"} color={STheme.color.gray} fontSize={14} style={{ textTransform: "uppercase" }}  >
                                            {this.getEstadoText(this.data)}
                                        </SText>
                                    </SView>
                                </SView>
                                <SView col={"xs-5"} center>
                                    <SText font={"LondonTwo"} color={STheme.color.text} fontSize={14} >Nro. Solicitud:</SText>
                                    <SText font={"LondonTwo"} color={STheme.color.gray} fontSize={24} >#{this.data.numero}</SText>
                                </SView>
                            </SView>
                        </SView>
                        <SHr height={25} />
                        <SView col={"xs-12"} center>
                            {this.getContentForm(this.data)}
                            {/* <SView col={"xs-12"} center row>
                                <SView center width={60} height={50} center backgroundColor={STheme.color.primary} style={{ borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }}
                                    onPress={() => { }}>
                                    <SText fontSize={18} font={"Roboto-Bold"} color={STheme.color.white}>AM</SText>
                                </SView>
                                <SView center width={60} height={50} style={{ borderBottomRightRadius: 8, borderTopRightRadius: 8, borderWidth: 1, borderColor: STheme.color.primary }}
                                    onPress={() => { }}>
                                    <SText fontSize={18} font={"Roboto-Bold"} color={STheme.color.primary}>PM</SText>
                                </SView>
                            </SView> */}
                        </SView>
                        <SHr height={55} />
                        <SView col={"xs-12"} row center>
                            <SView col={"xs-5"} >
                                <Kolping.KButtom secondary onPress={() => {
                                    this.dataOk = {
                                        ...this.data,
                                        fecha_rechazo: new SDate().toString("yyyy-MM-ddThh:mm:ss"),
                                    }
                                    //alert (JSON.stringify(this.dataOk ))
                                    Parent.Actions.editar({ ...this.dataOk }, this.props);
                                    SNavigation.goBack();
                                }} >{(this.data.fecha_acordada) || (this.data.fecha_rechazo) ? "RECHAZADO" : "RECHAZADO"}</Kolping.KButtom>
                            </SView>
                            <SView col={"xs-1"}  ></SView>
                            <SView col={"xs-5"}  >
                                <Kolping.KButtom primary onPress={() => {
                                    this.form.submit();
                                }} >{(this.data.fecha_acordada) || (this.data.fecha_rechazo) ? "EDITAR" : "APROBADO"}</Kolping.KButtom>
                            </SView>
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