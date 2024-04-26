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

                        <SHr height={30} />
                        <SView col={"xs-12"}>
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>Productos</SText>
                            <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
                            <SHr height={25} />
                        </SView>
                        <SView col={"xs-12"}>
                            <SView col={"xs-12"} style={{
                                right: "-30%",
                                top: "5%",
                                position: "absolute",
                            }} center>
                                <SView style={{
                                    width: 300,
                                    height: 500,
                                }}>
                                    <SIcon name={`Enfermera14`} width={"100%"} fill={"#f0f"} />
                                </SView>
                            </SView>
                            <SView col={"xs-11 sm-10 md-8 lg-8 xl-11"}  >
                                <SHr height={80} />
                                <SView col={"xs-8"}  center style={{ borderWidth: 1, borderColor: STheme.color.card, borderRadius: 8 }}>
                                    <SView col={"xs-12"} height={45} backgroundColor={STheme.color.card} row center>
                                        <SView col={"xs-2"} center>
                                            <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                        </SView>
                                        <SView col={"xs-10"}>
                                            <SText font={"LondonBetween"} fontSize={17} >Anti Réflex</SText>
                                        </SView>
                                    </SView>
                                    <SView col={"xs-12"} height={45}  row center>
                                        <SView col={"xs-2"} center>
                                            <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                        </SView>
                                        <SView col={"xs-10"}>
                                            <SText font={"LondonBetween"} color={STheme.color.text} fontSize={17} >Bifocales</SText>
                                        </SView>
                                    </SView>
                                    <SView col={"xs-12"} height={45} backgroundColor={STheme.color.card} row center>
                                        <SView col={"xs-2"} center>
                                            <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                        </SView>
                                        <SView col={"xs-10"}>
                                            <SText font={"LondonBetween"} fontSize={17} >Progresivos</SText>
                                        </SView>
                                    </SView>
                                    <SView col={"xs-12"} height={45}  row center>
                                        <SView col={"xs-2"} center>
                                            <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                        </SView>
                                        <SView col={"xs-10"}>
                                            <SText font={"LondonBetween"} color={STheme.color.text} fontSize={17} >Gafas</SText>
                                        </SView>
                                    </SView>
                                    <SView col={"xs-12"} height={45} backgroundColor={STheme.color.card} row center>
                                        <SView col={"xs-2"} center>
                                            <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                        </SView>
                                        <SView col={"xs-10"}>
                                            <SText font={"LondonBetween"} fontSize={17} >Monturas para dama</SText>
                                        </SView>
                                    </SView>
                                    <SView col={"xs-12"} height={45}  row center>
                                        <SView col={"xs-2"} center>
                                            <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                        </SView>
                                        <SView col={"xs-10"}>
                                            <SText font={"LondonBetween"} color={STheme.color.text} fontSize={17} >Monturas para niños y niñas</SText>
                                        </SView>
                                    </SView>
                                    <SView col={"xs-12"} height={45} backgroundColor={STheme.color.card} row center>
                                        <SView col={"xs-2"} center>
                                            <SIcon name={"aspa"} width={20} height={15} fill={"#378D00"} />
                                        </SView>
                                        <SView col={"xs-10"}>
                                            <SText font={"LondonBetween"} fontSize={17} >Monturas para varón</SText>
                                        </SView>
                                    </SView>
                                </SView>
                            </SView>
                        </SView>

                        <SHr height={150} />
                        
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