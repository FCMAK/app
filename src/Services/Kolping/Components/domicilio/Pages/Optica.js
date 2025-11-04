import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SLoad, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import WhatsApp from '../../../../../Components/WhatsApp';
import servicio_domicilio from '../../servicio_domicilio';
import Params from "../params.json"
import { Container } from '../../../../../Components';
import SSocket from 'servisofts-socket';
import Model from '../../../../../Model';
import DomicilioDescripcion from '../Components/Descripcion';
import DomicilioHorario from '../Components/Horario';
import DomicilioPromociones from '../Components/Promociones';
import DomicilioBanner from '../Components/Banner';
import DomicilioWhatsApp from '../Components/WhatsApp';
import Contactenos from '../Components/Contactenos';
import servicio_informacion from '../../servicio_informacion';

class Optica extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        SSocket.sendPromise({
            // service: Service.ServiceName,
            component: "servicio_informacion",
            type: "getByKey",
            estado: "cargando",
            key: "optica"
        }).then(e => {
            this.setState({ data: e.data })
        }).catch(e => {
            console.log(e);
        })
    }

    // load_data() {
    //  SSocket.sendPromise({
    //   component: "servicio_informacion",
    //   type: "getByKey",
    //   key_usuario: Model.usuario.Action.getKey(),
    //   key: "567",
    //  }).then(e => {
    //   this.setState({ informacion: e.data })
    //  }).catch(e => {
    //   console.log(e);
    //  })
    // }
    render() {
        var data_informacion = this.state.data
        // var data_informacion = servicio_informacion.Actions.getByKey("optica", this.props);
        // if (!data_informacion) return <SView col={"xs-12"} flex center> <SLoad /></SView>;
        return (
            <SPage title={'A domicilio'} >
                <Container loading={!this.state.data}>
                    <SHr height={20} />
                    <SView col={"xs-12"} style={{ padding: 8 }} center >
                        <SView col={"xs-12"}>
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>{data_informacion?.titulo}</SText>
                            <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}>
                            </SView>
                            <SHr height={10} />
                            <SText font={"LondonBetween"} fontSize={15}>{data_informacion?.descripcion}</SText>
                        </SView>
                        <SHr height={20} />
                        <SView col={"xs-12"}>
                            <SText color={STheme.color.text} font={"LondonTwo"} fontSize={16} >Horario de atención:   </SText>
                            <SHr height={8} />
                            <SText font={"LondonBetween"} fontSize={15}>{data_informacion?.horarios}</SText>
                        </SView>
                        <SHr height={20} />
                        <SView col={"xs-12"} center>
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
                                        tipo: "optica"
                                    }
                                }).then(e => {
                                    const obj = e.data;
                                    var usuario = Model.usuario.Action.getUsuarioLog();
                                    var mensaje = `Hola, Mi nombre es ${usuario.Nombres} ${usuario.Apellidos} estoy interesado(a) en el servicio de Óptica a domicilio.
                                                    Solicitud #${obj.numero}
                                                    ${Params.url}${obj.numero}/`;
                                    WhatsApp.send({ phone: data_informacion.telefono, menssage: mensaje })
                                    SNavigation.navigate("domicilio/request", { numero: obj.numero });
                                    btn.setLoading(false)
                                }).catch(e => {
                                    btn.setLoading(false)
                                })
                            }

                        }} >
                            <SView col={"xs-12"} row center>
                                <SView height={35} width={35}>
                                    <SIcon name='iWhatsApp' />
                                </SView>
                                <SView width={10} />
                                <SText height={20} center
                                    font='LondonTwo'
                                    style={{
                                        color: STheme.color.white,
                                    }}
                                    fontSize={14}>{"CONTÁCTENOS POR WHATSAPP"}</SText>
                            </SView>
                        </Contactenos>


                    </SView>
                    <SHr height={30} />
                    <DomicilioPromociones key_servicio={"optica"} />
                    <SHr height={20} />
                    {/* <DomicilioBanner />
                    <SHr height={20} /> */}
                </Container>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Optica);