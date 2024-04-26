import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import WhatsApp from '../../../../../Components/WhatsApp';
import servicio_domicilio from '../../servicio_domicilio';
import Params from "../params.json"
class Laboratorio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        var reducer = servicio_domicilio.Actions._getReducer(this.props);
        if (reducer.type == "registro" && reducer.estado == "exito") {
            reducer.estado = ""
            var obj = reducer.lastRegister;
            var usuario = this.props.state.usuarioReducer.usuarioLog;
            var mensaje = `Hola, Mi nombre es ${usuario.Nombres} ${usuario.Apellidos} estoy interesado(a) en el servicio de Laboratorio a domicilio. 
                            Solicitud #${obj.numero}
                            ${Params.url}${obj.numero}/`;
            WhatsApp.send({ phone: Params["laboratorio"]?.phone, menssage: mensaje })
            SNavigation.navigate("domicilio/request", { numero: obj.numero });
        }
        return (
            <SPage title={'Laboratorio a Domicilio'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SHr height={20} />
                    <SView col={"xs-12"} style={{ padding: 8 }} center >
                        <SView col={"xs-12"}>
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>Laboratorio Clínico Nivel 3</SText>
                            <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
                            <SHr height={10} />
                            <SText font={"LondonBetween"} fontSize={15}>En nuestro laboratorio de nivel nuestro personal certificado le brinda la atención con calidez humana y profesionalismo.</SText>
                        </SView>
                        <SHr height={20} />
                        <SView col={"xs-12"}>
                            <SText color={STheme.color.text} font={"LondonTwo"} fontSize={16} >Horario de atención:   </SText>
                            <SHr height={8} />
                            <SText font={"LondonBetween"} fontSize={15}>Lunes a Viernes 07:00 am a 19:00 pm</SText>
                            <SText font={"LondonBetween"} fontSize={15}>Sábados 08:00 am a 12:00 pm</SText>
                        </SView>
                        {/* <SView col={"xs-12"} row>
                            <SView col={"xs-6 md-7 lg-6 xl-6"}>
                                <SText color={STheme.color.text} font={"LondonTwo"} fontSize={16}>Informes y Cotizaciones:</SText>
                            </SView>
                            <SView col={"xs-6 md-5 lg-6 xl-6"} center row >
                                <SView col={"xs-12 sm-6 md-6 lg-6 xl-6"} row center onPress={() => {
                                    var mensaje = `Hola, estoy interesado(a) en el servicio de Laboratorio a domicilio.`;
                                    WhatsApp.send({ phone: Params["laboratorio"]?.phone, menssage: mensaje })
                                }}>
                                    <SIcon name={"whatsApp"} width={14} height={14} />
                                    <SText color={STheme.color.primary} font={"LondonBetween"}> {Params["laboratorio"]?.phone}</SText>
                                </SView>
                                <SView width={20} />
                            </SView>
                            <SView width={20} />
                        </SView> */}
                        <SHr height={30} />
                        <SView col={"xs-12"}>
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>Área para análisis</SText>
                            <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
                            <SHr height={25} />

                            <SView col={"xs-12"}>

                                <SView col={"xs-12 sm-12 md-12 lg-12 xl-12"} row>
                                    <SHr height={10} />
                                    <SView col={"xs-4"}></SView>
                                    <SView col={"xs-8"} center style={{ borderWidth: 1, borderColor: STheme.color.card, borderRadius: 8 }}>
                                        <SView col={"xs-12"} height={45} backgroundColor={STheme.color.card} row center>
                                            <SView col={"xs-2"} center>
                                                <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                            </SView>
                                            <SView col={"xs-10"}>
                                                <SText font={"LondonBetween"} fontSize={17} >Hematología</SText>
                                            </SView>
                                        </SView>
                                        <SView col={"xs-12"} height={45} row center>
                                            <SView col={"xs-2"} center>
                                                <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                            </SView>
                                            <SView col={"xs-10"}>
                                                <SText font={"LondonBetween"} color={STheme.color.text} fontSize={17} >Química Sanguínea</SText>
                                            </SView>
                                        </SView>
                                        <SView col={"xs-12"} height={45} backgroundColor={STheme.color.card} row center>
                                            <SView col={"xs-2"} center>
                                                <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                            </SView>
                                            <SView col={"xs-10"}>
                                                <SText font={"LondonBetween"} fontSize={17} >Micología</SText>
                                            </SView>
                                        </SView>
                                        <SView col={"xs-12"} height={45} row center>
                                            <SView col={"xs-2"} center>
                                                <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                            </SView>
                                            <SView col={"xs-10"}>
                                                <SText font={"LondonBetween"} color={STheme.color.text} fontSize={17} >Serología</SText>
                                            </SView>
                                        </SView>
                                        <SView col={"xs-12"} height={45} backgroundColor={STheme.color.card} row center>
                                            <SView col={"xs-2"} center>
                                                <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                            </SView>
                                            <SView col={"xs-10"}>
                                                <SText font={"LondonBetween"} fontSize={17} >Hormonas</SText>
                                            </SView>
                                        </SView>
                                        <SView col={"xs-12"} height={45} row center>
                                            <SView col={"xs-2"} center>
                                                <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                            </SView>
                                            <SView col={"xs-10"}>
                                                <SText font={"LondonBetween"} color={STheme.color.text} fontSize={17} >Marcadores Tumorales</SText>
                                            </SView>
                                        </SView>
                                        <SView col={"xs-12"} height={45} backgroundColor={STheme.color.card} row center>
                                            <SView col={"xs-2"} center>
                                                <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                            </SView>
                                            <SView col={"xs-10"}>
                                                <SText font={"LondonBetween"} fontSize={17} >Exámenes de Orina</SText>
                                            </SView>
                                        </SView>
                                        <SView col={"xs-12"} height={45} row center>
                                            <SView col={"xs-2"} center>
                                                <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                            </SView>
                                            <SView col={"xs-10"}>
                                                <SText font={"LondonBetween"} color={STheme.color.text} fontSize={17} >Parasitología</SText>
                                            </SView>
                                        </SView>
                                        <SView col={"xs-12"} height={45} backgroundColor={STheme.color.card} row center>
                                            <SView col={"xs-2"} center>
                                                <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                            </SView>
                                            <SView col={"xs-10"}>
                                                <SText font={"LondonBetween"} fontSize={17} >Bacteriología</SText>
                                            </SView>
                                        </SView>
                                        <SView col={"xs-12"} height={45} row center>
                                            <SView col={"xs-2"} center>
                                                <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                            </SView>
                                            <SView col={"xs-10"}>
                                                <SText font={"LondonBetween"} color={STheme.color.text} fontSize={17} >Exámenes Especiales</SText>
                                            </SView>
                                        </SView>
                                        <SView col={"xs-12"} height={45} backgroundColor={STheme.color.card} row center>
                                            <SView col={"xs-2"} center>
                                                <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                            </SView>
                                            <SView col={"xs-10"}>
                                                <SText font={"LondonBetween"} fontSize={17} >Exámenes de Covid-19</SText>
                                            </SView>
                                        </SView>
                                    </SView>
                                </SView>
                                <SView col={"xs-12"} style={{
                                    left: "-35%",
                                    top: "5%",
                                    position: "absolute",
                                }} center>
                                    <SView style={{
                                        width: 300,
                                        height: 500,
                                    }}>
                                        <SIcon name={`Enfermera26`} width={"100%"} fill={"#f0f"} />
                                    </SView>
                                </SView>
                            </SView>

                        </SView>
                        <SHr height={25} />
                        {/* <SView col={"xs-12"} center>
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.primary}>¡Sin recargo hasta el 4to anillo!</SText>
                        </SView> */}
                        <SHr height={30} />
                        <Kolping.KButtom primary onPress={() => {

                            //                             var mensaje = `Hola, Mi nombre es María Julia estoy interesado(a) en el servicio de Laboratorio a domicilio. 
                            // Solicitud #88
                            // https://app.kolping.com/domicilio/request/88/`;

                            //                             mensaje = encodeURIComponent(mensaje);
                            //                             Linking.openURL("https://wa.me/59169209170?text=" + mensaje)

                            //                             if (Platform.OS == "android" || Platform.OS == "ios") {
                            //                                 Linking.openURL(`whatsapp://send?text=${mensaje}`);
                            //                             } else {
                            //                                 window.open("https://wa.me/59169209170?text=" + mensaje)
                            //                             }
                            servicio_domicilio.Actions.registro({
                                tipo: "laboratorio"
                            }, this.props)

                        }}>SOLICITAR LABORATORIO</Kolping.KButtom>
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
export default connect(initStates)(Laboratorio);