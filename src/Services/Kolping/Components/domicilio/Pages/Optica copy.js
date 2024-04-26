import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import WhatsApp from '../../../../../Components/WhatsApp';
import servicio_domicilio from '../../servicio_domicilio';
import Params from "../params.json"

class Optica extends Component {
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

            var mensaje = `Hola, Mi nombre es ${usuario.Nombres} ${usuario.Apellidos} estoy interesado(a) en el servicio de Óptica a domicilio. 
                            Solicitud #${obj.numero}
                            ${Params.url}${obj.numero}/`;
            // WhatsApp.send({ phone: "59175548132", menssage: mensaje })
            WhatsApp.send({ phone: Params["optica"]?.phone, menssage: mensaje })
            SNavigation.navigate("domicilio/request", { numero: obj.numero });
        }
        return (
            <SPage title={'Óptica a Domicilio'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SHr height={20} />
                    <SView col={"xs-12"} style={{ padding: 8 }} center >
                        <SView col={"xs-12"}>
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>Óptica Kolping</SText>
                            <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
                            <SHr height={10} />
                            <SText font={"LondonBetween"} fontSize={15}>Con más de 22 años al servicio de la población, brindando salud visual a todos nuestros clientes, con un servicio personalizado y con una gran variedad de productos de distintas marcas de excelente calidad para toda la familia.</SText>
                        </SView>
                        <SHr height={20} />
                        <SView col={"xs-12"}>
                            <SText color={STheme.color.text} font={"LondonTwo"} fontSize={16} >Horario de atención:   </SText>
                            <SHr height={8} />
                            <SText font={"LondonBetween"} fontSize={15}>Lunes a Viernes 07:00 am a 18:00 pm</SText>
                            <SText font={"LondonBetween"} fontSize={15}>Sábados 08:00 am a 12:00 pm</SText>
                        </SView>
                        {/* <SView col={"xs-12"} row>
                            <SView col={"xs-6 md-7 lg-6 xl-6"}>
                                <SText color={STheme.color.text} font={"LondonTwo"} fontSize={16}>Informes y Cotizaciones:</SText>
                            </SView>
                            <SView col={"xs-6 md-5 lg-6 xl-6"} center row >
                                <SView col={"xs-12 sm-6 md-6 lg-6 xl-6"} row center
                                    onPress={() => {

                                        var mensaje = `Hola, estoy interesado(a) en el servicio de Óptica a domicilio.`;
                                        WhatsApp.send({ phone: Params["optica"]?.phone, menssage: mensaje })
                                    }}>
                                    <SIcon name={"whatsApp"} width={14} height={14} />
                                    <SText color={STheme.color.primary} font={"LondonBetween"}> {Params["optica"]?.phone}</SText>
                                </SView>
                                <SView width={20} />
                            </SView>
                            <SView width={20} />
                        </SView> */}
                        <SHr height={30} />
                        <SView col={"xs-12"}>
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>Productos</SText>
                            <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
                            <SHr height={25} />
                            <SView col={"xs-12"} >
                                <SText font={"LondonBetween"} fontSize={16} fontSize={17} height={30}> <SView backgroundColor={STheme.color.primary} style={{ borderRadius: 20, width: 8, height: 8 }}></SView>  Anti Réflex</SText>
                                <SText font={"LondonBetween"} fontSize={16} fontSize={17} height={30}> <SView backgroundColor={STheme.color.primary} style={{ borderRadius: 20, width: 8, height: 8 }}></SView>  Bifocales</SText>
                                <SText font={"LondonBetween"} fontSize={16} fontSize={17} height={30}> <SView backgroundColor={STheme.color.primary} style={{ borderRadius: 20, width: 8, height: 8 }}></SView>  Progresivos</SText>
                                <SText font={"LondonBetween"} fontSize={16} fontSize={17} height={30}> <SView backgroundColor={STheme.color.primary} style={{ borderRadius: 20, width: 8, height: 8 }}></SView>  Gafas</SText>
                                <SText font={"LondonBetween"} fontSize={16} fontSize={17} height={30}> <SView backgroundColor={STheme.color.primary} style={{ borderRadius: 20, width: 8, height: 8 }}></SView>  Monturas para dama</SText>
                                <SText font={"LondonBetween"} fontSize={16} fontSize={17} height={30}> <SView backgroundColor={STheme.color.primary} style={{ borderRadius: 20, width: 8, height: 8 }}></SView>  Monturas para niños y niñas</SText>
                                <SText font={"LondonBetween"} fontSize={16} fontSize={17} height={30}> <SView backgroundColor={STheme.color.primary} style={{ borderRadius: 20, width: 8, height: 8 }}></SView>  Monturas para varón</SText>
                            </SView>
                        </SView>
                        <SHr height={25} />
                        {/* <SView col={"xs-12"} center>
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.primary}>¡Sin recargo hasta el 4to anillo!</SText>
                        </SView> */}
                        <SHr height={25} />
                        <Kolping.KButtom primary onPress={() => {
                            servicio_domicilio.Actions.registro({
                                tipo: "optica"
                            }, this.props)

                        }} >SOLICITAR SERVICIO</Kolping.KButtom>
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
export default connect(initStates)(Optica);