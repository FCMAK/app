import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import WhatsApp from '../../../../../Components/WhatsApp';
import servicio_domicilio from '../../servicio_domicilio';
import Params from "../params.json"
import { Container } from '../../../../../Components';
import SSocket from 'servisofts-socket';
import Model from '../../../../../Model';
import DomicilioTitulo from '../Components/Titulo';
import DomicilioDescripcion from '../Components/Descripcion';
import DomicilioHorario from '../Components/Horario';
import DomicilioPromociones from '../Components/Promociones';
import DomicilioBanner from '../Components/Banner';
import DomicilioWhatsApp from '../Components/WhatsApp';
import Contactenos from '../Components/Contactenos';

class Farmacia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                titulo: "Farmacia Kolping",
                descripcion: "Farmacia Kolping con más de 20 años al servicio de la población cruceña cuenta con una variedad de medicamentos de diferentes laboratorios de excelente calidad.\nPensando en tu comodidad y seguridad te ofrecemos el servicio de farmacia a domicilio sin recargo hasta el 4to anillo. ¡Todos tus medicamentos al mejor precio y hasta la comodidad de tu hogar!",
                horarios: "Lunes a Viernes 07:00 am a 20:00 pm \nSábados 08:00 am a 20:00 pm",
                telefono: "73138212"

            }
        };
    }

    render() {
        // var reducer = servicio_domicilio.Actions._getReducer(this.props);
        // if (reducer.type == "registro" && reducer.estado == "exito") {
        //     reducer.estado = ""
        //     var obj = reducer.lastRegister;
        //     var usuario = this.props.state.usuarioReducer.usuarioLog;

        //     var mensaje = `Hola, Mi nombre es ${usuario.Nombres} ${usuario.Apellidos} estoy interesado(a) en el servicio de Óptica a domicilio. 
        //                     Solicitud #${obj.numero}
        //                     ${Params.url}${obj.numero}/`;
        //     // WhatsApp.send({ phone: "59175548132", menssage: mensaje })
        //     WhatsApp.send({ phone: Params["optica"]?.phone, menssage: mensaje })
        //     SNavigation.navigate("domicilio/request", { numero: obj.numero });
        // }
        return (
            <SPage title={'A domicilio'} >
                {/* <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row> */}
                <Container>
                    <SHr height={20} />
                    <SView col={"xs-12"} style={{ padding: 8 }} center >
                        <SView col={"xs-12"}>
                            <DomicilioTitulo dato={this.state?.data?.titulo} />
                            <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
                            <SHr height={10} />
                            <DomicilioDescripcion dato={this.state?.data?.descripcion} />
                        </SView>
                        <SHr height={20} />
                        <SView col={"xs-12"}>
                            <SText color={STheme.color.text} font={"LondonTwo"} fontSize={16} >Horario de atención:   </SText>
                            <SHr height={8} />
                            <DomicilioHorario dato={this.state?.data?.horarios} />
                        </SView>

                        <SHr height={100} />
                        <SView col={"xs-12"} center>
                            {/* <DomicilioWhatsApp dato={this.state?.data?.telefono} /> */}

                            <SHr height={25} />
                        </SView>



                        <Contactenos primary onPress={(btn) => {
                            // servicio_domicilio.Actions.registro({
                            //     tipo: "optica"
                            // }, this.props)
                            var usuario = Model.usuario.Action.getUsuarioLog();
                            if (!usuario) {
                                SNavigation.navigate("login")
                                return;
                            } else {
                                btn.setLoading(true)
                                SSocket.sendPromise({
                                    component: "servicio_domicilio",
                                    type: "registro",
                                    estado: "cargando",
                                    key_usuario: Model.usuario.Action.getKey(),
                                    data: {
                                        tipo: "farmacia"
                                    }
                                }).then(e => {
                                    // console.log(e);
                                    const obj = e.data;
                                    var usuario = Model.usuario.Action.getUsuarioLog();
                                    var mensaje = `Hola, Mi nombre es ${usuario.Nombres} ${usuario.Apellidos} estoy interesado(a) en el servicio de Farmacia a domicilio. 
                                                    Solicitud #${obj.numero}
                                                    ${Params.url}${obj.numero}/`;
                                    WhatsApp.send({ phone: Params["farmacia"]?.phone, menssage: mensaje })
                                    SNavigation.navigate("domicilio/request", { numero: obj.numero });
                                    btn.setLoading(false)
                                }).catch(e => {
                                    btn.setLoading(false)
                                })
                            }

                        }} ><SView col={"xs-12"} row center> <SIcon name='iWhatsApp' height={35} width={35} /> <SView width={10} />CONTÁCTENOS POR WHATSAPP</SView></Contactenos>
                        <SHr height={30} /> 
                        <DomicilioPromociones />
                        <SHr height={20} />
                        <DomicilioBanner />
                        <SHr height={20} />
                    </SView>
                    {/* </SView> */}
                </Container>
          
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Farmacia);