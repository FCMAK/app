import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView, SImage, SForm } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import WhatsApp from '../../../../../Components/WhatsApp';
import servicio_domicilio from '../../servicio_domicilio';
import Params from "../params.json"
import SSocket from 'servisofts-socket';

class DetalleDomicilio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.whatsApp = SNavigation.getParam("key"); //key por navegador

    }
    getPerfil() {
        var usuario = this.props.state.usuarioReducer.usuarioLog;
        if (!usuario) {
            SNavigation.navigate('login');
            return <SView />
        }
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
                        <SImage src={`${SSocket.api.root}usuario/${usuario.key}?time=${new Date().getTime()}`} style={{
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
                        }} font={"LondonBetween"} color={STheme.color.gray} font={"LondonMM"}>{usuario["CI"] ?? "--"} </SText>
                    </SView>
                    <SView center row>
                        <SView>
                            <SIcon name={"whatsApp"} width={15} fill={STheme.color.primary} />
                        </SView>
                        <SView>
                            <SText style={{
                                fontSize: 16,
                            }} font={"LondonBetween"} color={STheme.color.gray} font={"LondonMM"}>
                            </SText>
                        </SView>
                        {this.whatsApp ?? "--"}
                    </SView>
                </SView>
            </SView>
        )
    }

    getContentForm() {
        // this.data = {};
        // if (this.key) {
        //     this.data = Parent.Actions.getByKey(this.key, this.props);
        //     if (!this.data) return <SLoad />
        // } else {
        //     this.data = {};
        // }
        return <SForm
            center
            ref={(form) => { this.form = form; }}
            col={"xs-12 sm-9 md-8 lg-8 xl-10"}
            inputProps={{
                customStyle: "kolping"
            }}
            inputs={{
                fecha: { label: "Fecha", placeholder: "DD / MM / YYYY", isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
                hora: { label: "Hora", placeholder: "HH : MM am", isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
            }}


        // onSubmitName={"Guardar"}
        // onSubmit={(values) => {
        //     if (this.key) {
        //         Parent.Actions.editar({ ...this.data, ...values }, this.props);
        //     } else {
        //         Parent.Actions.registro(values, this.props);
        //     }
        // }}
        />
    }

    render() {
        var usuario = this.props.state.usuarioReducer.usuarioLog;
        this.usuario = usuario;
        if (!usuario) {
            SNavigation.navigate('login');
            return <SView />
        }
        var reducer = servicio_domicilio.Actions._getReducer(this.props);
        if (reducer.type == "registro" && reducer.estado == "exito") {
            reducer.estado = ""
            var obj = reducer.lastRegister;
            var usuario = this.props.state.usuarioReducer.usuarioLog;

            var mensaje = `Hola, Mi nombre es ${usuario.Nombres} ${usuario.Apellidos} estoy interesado(a) en el servicio de Óptica a domicilio. 
                            Solicitud #${obj.numero}
                            ${Params.url}${obj.numero}/`;
            // WhatsApp.send({ phone: "59175548132", menssage: mensaje })
            WhatsApp.send({ phone: Params["optica"]?.phone, menssage: mensaje })
            SNavigation.navigate("domicilio/request", { numero: obj.numero });
        }
        return (
            <SPage title={'Detalle solicitud a domicilio'} center>
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
                            {this.getPerfil()}
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
                                        <SText font={"LondonTwo"} color={STheme.color.gray} fontSize={14} >Enero, 06 - 16:45 </SText>
                                    </SView>
                                    <SView row height={25}>
                                        <SText font={"LondonTwo"} color={STheme.color.text} fontSize={14} >Servicio: </SText>
                                        <SText font={"LondonTwo"} color={STheme.color.gray} fontSize={14} >LABORATORIO</SText>
                                    </SView>
                                    <SView row height={25}>
                                        <SText font={"LondonTwo"} color={STheme.color.text} fontSize={14} >Estado: </SText>
                                        <SText font={"LondonTwo"} color={STheme.color.gray} fontSize={14} >PENDIENTE </SText>
                                    </SView>
                                </SView>
                                <SView col={"xs-5"} center>
                                    <SText font={"LondonTwo"} color={STheme.color.text} fontSize={14} >Nro. Solicitud:</SText>
                                    <SText font={"LondonTwo"} color={STheme.color.gray} fontSize={24} >#14</SText>
                                </SView>

                            </SView>
                        </SView>
                        <SHr height={25} />
                        <SView col={"xs-12"} center>
                            {this.getContentForm()}
                            <SView col={"xs-12"} center row>
                                <SView center width={60} height={50} center backgroundColor={STheme.color.primary} style={{ borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }}
                                    onPress={() => { }}>
                                    <SText fontSize={18} font={"Roboto-Bold"} color={STheme.color.white}>AM</SText>
                                </SView>
                                <SView center width={60} height={50} style={{ borderBottomRightRadius: 8, borderTopRightRadius: 8, borderWidth: 1, borderColor: STheme.color.primary }}
                                    onPress={() => { }}>
                                    <SText fontSize={18} font={"Roboto-Bold"} color={STheme.color.primary}>PM</SText>
                                </SView>
                            </SView>
                        </SView>
                        <SHr height={55} />
                        <SView col={"xs-12"}  row center>
                            <SView col={"xs-5"}  >
                                <Kolping.KButtom primary onPress={() => {
                                    servicio_domicilio.Actions.registro({
                                        tipo: "optica"
                                    }, this.props)

                                }} >APROBADO</Kolping.KButtom>
                            </SView>
                            <SView col={"xs-1"}  ></SView>
                            <SView col={"xs-5"} >
                                <Kolping.KButtom secondary onPress={() => {
                                    servicio_domicilio.Actions.registro({
                                        tipo: "optica"
                                    }, this.props)

                                }} >RECHAZADO</Kolping.KButtom>
                            </SView>
                        </SView>
                        <SHr height={30} />
                    </SView>
                </SView>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(DetalleDomicilio);